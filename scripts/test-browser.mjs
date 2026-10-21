import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

export async function browserChecks(base=process.env.TEST_URL||'http://127.0.0.1:4321',original=process.env.ORIGINAL_URL) {
  const browser=await chromium.launch({headless:true,executablePath:process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH||undefined,args:JSON.parse(process.env.PLAYWRIGHT_CHROMIUM_ARGS||'[]')});
  const context=await browser.newContext({viewport:{width:1440,height:1000},colorScheme:'light'});
  const page=await context.newPage();
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await context.route('**/googletagmanager.com/**',r=>r.fulfill({body:''}));
  try {
    await page.goto(base);await page.locator('.save-doc').first().waitFor({state:'visible'});
    await page.waitForFunction(()=>!document.querySelector('.save-doc').disabled);
    assert.equal(await page.locator('html').getAttribute('data-theme'),'light');
    await page.locator('.theme-toggle').click();
    assert.equal(await page.locator('html').getAttribute('data-theme'),'dark');
    await page.reload();assert.equal(await page.locator('html').getAttribute('data-theme'),'dark');
    await page.locator('.theme-toggle').click();
    await page.locator('#search-division').selectOption('rajshahi-division');
    await page.locator('#search-district').selectOption('joypurhat');
    await Promise.all([page.waitForURL('**/doctors?**'),page.locator('.search-grid button[type=submit]').click()]);
    assert.match(await page.locator('.count').innerText(),/৪৪/);
    await page.goto(base+'/en/doctors?division=dhaka-division&district=narayanganj');
    assert.match(await page.locator('.count').innerText(),/67/);
    await page.locator('.language-switch').click();
    assert.equal(new URL(page.url()).pathname,'/doctors');assert.equal(new URL(page.url()).searchParams.get('district'),'narayanganj');
    await page.goto(base);
    const first=page.locator('.save-doc').first();await first.click();
    await page.waitForFunction(()=>document.querySelector('.save-doc')?.getAttribute('aria-pressed')==='true');
    const saved=await page.evaluate(()=>JSON.parse(localStorage.getItem('doclist-saved-doctors-v1')));
    assert.equal(saved.length,1);assert.ok(Math.abs(saved[0].expiresAt-Date.now()-365*86400000)<60000);
    await page.goto(base+'/my-doc');await page.locator('.doctor-card').waitFor();
    await page.reload();await page.locator('.doctor-card').waitFor();
    await page.locator('.save-doc').click();await page.locator('.empty-state').waitFor();
    await page.evaluate(()=>localStorage.setItem('doclist-saved-doctors-v1',JSON.stringify([{id:'expired',expiresAt:Date.now()-1000}])));
    await page.reload();await page.locator('.empty-state').waitFor();
    await page.goto(base+'/en');
    const ga=await page.evaluate(()=>({commands:window.dataLayer.map(x=>Array.from(x)),loaders:document.querySelectorAll('script[src*="googletagmanager.com/gtag/js?id=G-SJSQXS7FJ9"]').length}));
    assert.equal(ga.loaders,1);assert.equal(ga.commands.filter(x=>x[0]==='config'&&x[1]==='G-SJSQXS7FJ9').length,1);
    const avatar=page.locator('img.local-portrait').first();
    await page.waitForFunction(()=>!document.querySelector('.save-doc').disabled);
    await avatar.scrollIntoViewIfNeeded();
    await avatar.evaluate(img=>img.dispatchEvent(new Event('error')));
    await page.locator('.doctor-card .initials').first().waitFor();
    // Compare the original rendered geometry and theme colors in the same browser.
    let visualCases=0;
    if(original) {
      const comparison=await browser.newContext({viewport:{width:1440,height:1000},colorScheme:'light'});
      await comparison.route('**/googletagmanager.com/**',r=>r.fulfill({body:''}));
      await comparison.route('**/api/doctors/*/engagement',r=>r.fulfill({contentType:'application/json',body:JSON.stringify({loves:0,impressions:7,loved:false})}));
      const a=await comparison.newPage(),b=await comparison.newPage();
      for(const width of [1440,390])for(const theme of ['light','dark']) {
        for(const p of [a,b])await p.setViewportSize({width,height:1000});
        await a.goto(base);await b.goto(original);
        for(const p of [a,b]) {
          await p.addStyleTag({content:'*,*::before,*::after{transition:none!important;animation:none!important}'});
          await p.evaluate(theme=>{localStorage.setItem('doclist-theme',theme);document.documentElement.dataset.theme=theme;},theme);
          await p.waitForFunction(()=>!document.querySelector('.save-doc').disabled);
          await p.evaluate(()=>document.fonts.ready);
        }
        const snapshot=async p=>p.evaluate(()=>['.site-header','.hero','.hero h1','.search-grid','.site-footer','.doctor-card'].map(selector=>{
          const el=document.querySelector(selector),r=el.getBoundingClientRect(),s=getComputedStyle(el);
          return {selector,x:r.x,y:r.y,width:r.width,height:r.height,color:s.color,background:s.backgroundColor,font:s.fontFamily};
        }));
        assert.deepEqual(await snapshot(a),await snapshot(b),`visual geometry ${width} ${theme}`);visualCases++;
      }
    }
    assert.deepEqual(errors,[],'browser runtime errors');
    const report={status:'passed',themePersistence:true,divisionDistrictFiltering:true,joypurhatCount:44,narayanganjCount:67,languageQueryPreserved:true,savedDoctorsSaveReloadRemoveExpiry:true,googleTag:'G-SJSQXS7FJ9',avatarFallback:true,visualCases,browserErrors:errors};
    fs.writeFileSync('migration/validation-browser.json',JSON.stringify(report,null,2)+'\n');console.log(report);return report;
  }finally{await browser.close();}
}
if(process.argv[1]?.endsWith('test-browser.mjs'))await browserChecks();
