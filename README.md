EduGabon WebApp (PWA) + instructions to create Android APK/AAB.

Contenu:
- index.html, styles.css, app.js : prototype front-end (demo data)
- manifest.json, service-worker.js : PWA files
- icons/* : placeholder icons

-----------------------
COMMENT PUBLIER SUR PLAY STORE (résumé simple)
-----------------------
Option A - Utiliser PWABuilder (le plus simple, en ligne)
1. Va sur https://www.pwabuilder.com
2. Upload l'URL où tu héberges cette webapp (ou zip) ; PWABuilder peut créer un APK/AAB pour toi.
3. Suis les étapes et télécharge l'AAB.
4. Va sur Google Play Console (compte développeur, frais 25$) et publie l'AAB.

Option B - Utiliser Capacitor (pour un wrapper natif)
1. Installe Node.js + npm + Java + Android Studio sur ton PC.
2. Dans ce dossier, installe capacitor: `npm init -y` puis `npm install @capacitor/core @capacitor/cli`
3. `npx cap init edugabon com.yourname.edugabon`
4. Copie le contenu du dossier webapp dans `www/` du projet Capacitor.
5. `npx cap add android`
6. Ouvre Android Studio: `npx cap open android` -> Build -> Generate Signed Bundle / APK.
7. Suis les étapes pour créer la clé de signature et génère l'AAB pour Play Store.

Option C - Fournir le ZIP à un développeur ou service de confiance qui génèrera l'AAB pour toi.

-----------------------
Si tu veux, je peux:
- Préparer un ZIP prêt pour PWABuilder (c'est celui-ci)
- Te fournir la procédure pas-à-pas pour publier l'AAB (avec captures d'écran)
- T'expliquer comment payer les 25$ et configurer Play Console
-----------------------
