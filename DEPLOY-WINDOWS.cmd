@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
 echo Install Node.js 22 first, then run this file again.
 pause
 exit /b 1
)
call npx --yes wrangler@4.75.0 login
if errorlevel 1 goto failed
call npx --yes wrangler@4.75.0 pages deploy dist --project-name doclist-bd --branch main
if errorlevel 1 goto failed
echo Deployment completed.
pause
exit /b 0
:failed
echo Deployment did not complete. Review the error above.
pause
exit /b 1
