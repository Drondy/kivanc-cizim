# -*- coding: utf-8 -*-
"""
Design and visually verify:
1. Sonic Category Icon SVG (replacing the brown garden hedgehog emoji!)
2. Polished shapes for Super Sonic, Tails, Knuckles, Shadow
3. 8 Brand-New Kirpi Sonic World drawings (Amy Rose, Metal Sonic, Silver, Dr. Eggman, Bebek Chao, Spin Dash, Sonic Racecar Speed Star, Chaos Emeralds)
Outputs an inspection HTML so we can screenshot and inspect every pixel in headless Chrome!
"""

SONIC_CATEGORY_ICON_SVG = '''<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="catSonicRing" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="50%" stop-color="#facc15"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
    <linearGradient id="catSonicBlue" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#60a5fa"/>
      <stop offset="45%" stop-color="#2563eb"/>
      <stop offset="100%" stop-color="#1e40af"/>
    </linearGradient>
    <linearGradient id="catSonicPeach" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffedd5"/>
      <stop offset="100%" stop-color="#fdba74"/>
    </linearGradient>
  </defs>
  <!-- Golden Ring Backdrop -->
  <circle cx="62" cy="60" r="46" fill="none" stroke="url(#catSonicRing)" stroke-width="11"/>
  <circle cx="62" cy="60" r="51.5" fill="none" stroke="#0f172a" stroke-width="3.5"/>
  <circle cx="62" cy="60" r="40.5" fill="none" stroke="#0f172a" stroke-width="3.5"/>
  <!-- Far Ear -->
  <path d="M 74 34 L 91 13 L 94 40 Z" fill="url(#catSonicBlue)" stroke="#0f172a" stroke-width="4.5" stroke-linejoin="round"/>
  <!-- Sonic Head + 3 Sweeping Spikes -->
  <path d="M 42 36 C 64 16, 98 28, 98 62 C 98 84, 70 96, 48 84 C 36 92, 22 97, 16 93 C 20 82, 28 74, 36 68 C 22 72, 10 73, 5 67 C 10 56, 22 48, 36 46 C 24 44, 14 41, 8 36 C 18 24, 32 24, 42 36 Z" fill="url(#catSonicBlue)" stroke="#0f172a" stroke-width="4.8" stroke-linejoin="round"/>
  <!-- Front Ear -->
  <path d="M 44 38 L 36 11 L 63 27 Z" fill="url(#catSonicBlue)" stroke="#0f172a" stroke-width="4.5" stroke-linejoin="round"/>
  <path d="M 46 34 L 41 19 L 57 28 Z" fill="url(#catSonicPeach)" stroke="#0f172a" stroke-width="2.5" stroke-linejoin="round"/>
  <!-- Joined White Eyes -->
  <path d="M 52 67 C 49 36, 73 31, 78 52 C 83 32, 101 38, 97 67 Z" fill="#ffffff" stroke="#0f172a" stroke-width="4" stroke-linejoin="round"/>
  <!-- Green Irises & Black Pupils -->
  <ellipse cx="70" cy="54" rx="6.5" ry="10.5" fill="#22c55e" stroke="#0f172a" stroke-width="2.2"/>
  <ellipse cx="71" cy="54" rx="3.8" ry="6.8" fill="#0f172a"/>
  <circle cx="69" cy="49.5" r="2.2" fill="#ffffff"/>
  <ellipse cx="87" cy="54" rx="5.5" ry="10" fill="#22c55e" stroke="#0f172a" stroke-width="2.2"/>
  <ellipse cx="88" cy="54" rx="3.2" ry="6.4" fill="#0f172a"/>
  <circle cx="86" cy="49.5" r="2" fill="#ffffff"/>
  <!-- Peach Muzzle -->
  <path d="M 45 77 C 45 60, 66 60, 77 68 C 87 60, 102 62, 101 77 C 96 96, 56 97, 45 77 Z" fill="url(#catSonicPeach)" stroke="#0f172a" stroke-width="4" stroke-linejoin="round"/>
  <!-- Sonic Nose -->
  <ellipse cx="102" cy="65" rx="7" ry="4.8" fill="#0f172a" transform="rotate(-12 102 65)"/>
  <ellipse cx="101" cy="63.5" rx="2.5" ry="1.2" fill="#ffffff" opacity="0.6" transform="rotate(-12 101 63.5)"/>
  <!-- Confident Smirk -->
  <path d="M 67 80 C 78 88, 89 84, 94 76" fill="none" stroke="#0f172a" stroke-width="3.8" stroke-linecap="round"/>
</svg>'''

print("Icon length:", len(SONIC_CATEGORY_ICON_SVG))
