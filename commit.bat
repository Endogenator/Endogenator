@echo off
setlocal

echo --------------------------------------
echo Endogenator Git Commit
echo --------------------------------------

cd /d K:\endogenator

:: Safety: remove stale lock if it exists
if exist .git\index.lock (
  echo Removing stale git lock...
  del .git\index.lock
)

:: Show status
echo.
git status
echo.

:: Prompt for commit message
set /p MSG="Commit message (leave blank for default): "

if "%MSG%"=="" (
  set MSG=site: update content and notes
)

:: Stage everything
git add -A
if errorlevel 1 goto :error

:: Commit
git commit -m "%MSG%"
if errorlevel 1 goto :error

:: Push
git push
if errorlevel 1 goto :error

echo.
echo ✓ Commit and push complete.
pause
exit /b 0

:error
echo.
echo ✗ Git command failed. Check output above.
pause
exit /b 1