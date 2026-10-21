@echo off
cd /d "%~dp0"
call npx --yes wrangler@4.75.0 login
if errorlevel 1 goto failed
call npm run build
if errorlevel 1 goto failed
call npm run deploy:pages
if errorlevel 1 goto failed
echo Cloudflare Pages deployment completed.
pause
exit /b 0
:failed
echo Deployment did not complete. Read the error above.
pause
exit /b 1
