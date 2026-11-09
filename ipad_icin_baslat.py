# -*- coding: utf-8 -*-
import os
import sys
import socket
import webbrowser
import http.server
import socketserver

def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(('8.8.8.8', 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return '127.0.0.1'

def main():
    PORT = 8080
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)
    
    local_ip = get_local_ip()
    ipad_url = f"http://{local_ip}:{PORT}"
    
    # iPad ve tarayıcı için ayar dosyasını güncelle
    with open("config.js", "w", encoding="utf-8") as f:
        f.write(f'window.SERVER_IP = "{local_ip}";\nwindow.SERVER_PORT = {PORT};\n')

    print("=" * 65)
    print("      🎨 KIVANÇ'IN ÇİZİM ATÖLYESİ SUNUCUSU BAŞLATILDI 🎨")
    print("=" * 65)
    print(f"\n[1] IPAD'DEN AÇMAK İÇİN:")
    print(f"    iPad'deki Safari tarayıcısını aç ve şu adresi yaz:")
    print(f"    -->  {ipad_url}  <--")
    print(f"\n    İpucu: iPad Safari'de 'Paylaş' -> 'Ana Ekrana Ekle' diyerek")
    print(f"    tam ekran uygulama haline getirebilirsin!\n")
    print(f"[2] BU BİLGİSAYARDAN AÇMAK İÇİN:")
    print(f"    -->  http://localhost:{PORT}")
    print("=" * 65)
    print("Durdurmak için bu pencereyi kapatabilir veya Ctrl + C yapabilirsin.\n")

    # Bilgisayarda tarayıcıyı aç
    try:
        webbrowser.open(f"http://localhost:{PORT}")
    except Exception:
        pass

    Handler = http.server.SimpleHTTPRequestHandler
    Handler.extensions_map.update({
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.html': 'text/html',
        '.svg': 'image/svg+xml',
    })

    # Port meşgulse alternatif port dene
    while True:
        try:
            with socketserver.TCPServer(("", PORT), Handler) as httpd:
                print(f"Sunucu aktif (Port {PORT}). İstekler bekleniyor...\n")
                httpd.serve_forever()
        except OSError:
            PORT += 1
            ipad_url = f"http://{local_ip}:{PORT}"
            with open("config.js", "w", encoding="utf-8") as f:
                f.write(f'window.SERVER_IP = "{local_ip}";\nwindow.SERVER_PORT = {PORT};\n')

if __name__ == "__main__":
    main()
