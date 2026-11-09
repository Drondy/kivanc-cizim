@echo off
title Kivanc Cizim Atolyesi
cd /d "%~dp0"
echo Kivanc'in Cizim Atolyesi baslatiliyor...
python ipad_icin_baslat.py
if errorlevel 1 (
    echo.
    echo Python baslatilamadi! Dogrudan index.html dosyasini acabilirsiniz.
    pause
)
