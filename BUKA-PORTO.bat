@echo off
setlocal
title Porto Lokal - Burhanuddien Robbani
cd /d "%~dp0"

set PORT=8000
set URL=http://localhost:%PORT%/
set NETSTAT=%SystemRoot%\System32\netstat.exe
set SLEEP=%SystemRoot%\System32\timeout.exe

echo ============================================
echo   PORTO LOKAL - Burhanuddien Robbani
echo ============================================
echo.

rem --- pilih python yang tersedia ---
set PY=python
where python >nul 2>&1 || set PY=py -3

rem --- cek apakah port sudah dipakai (server sudah jalan) ---
set RUNNING=0
%SystemRoot%\System32\netstat.exe -ano | findstr /R /C:"LISTENING" | findstr /C:":%PORT% " >nul 2>&1 && set RUNNING=1

if "%RUNNING%"=="1" (
  echo [i] Server lokal sudah jalan di port %PORT%.
  goto OPEN
)

rem --- root folder (titik di akhir mencegah backslash terakhir memakan kutip) ---
set ROOT=%~dp0.

echo [1/2] Menjalankan server lokal di port %PORT% ...
start "Porto Lokal Server" /min cmd /c "%PY% -m http.server %PORT% --bind 127.0.0.1 --directory "%ROOT%""

rem --- tunggu server siap (maks ~8 detik), pakai ping sebagai sleep ---
set /a TRIES=0
:WAIT
%SystemRoot%\System32\ping.exe -n 2 127.0.0.1 >nul 2>&1
set /a TRIES+=1
set READY=0
%SystemRoot%\System32\netstat.exe -ano | findstr /R /C:"LISTENING" | findstr /C:":%PORT% " >nul 2>&1 && set READY=1
if "%READY%"=="1" goto OPEN
if %TRIES% LSS 5 goto WAIT

echo [!] Server belum siap. Coba jalankan manual:
echo     python -m http.server %PORT%
pause
exit /b 1

:OPEN
echo [2/2] Membuka browser: %URL%
start "" "%URL%"
echo.
echo Selesai. Tutup jendela "Porto Lokal Server" untuk mematikan server.
endlocal
