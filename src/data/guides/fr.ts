// French translations for guide content
export const frGuides: Record<string, string> = {
  "getting-started": `## Qu'est-ce qu'un navigateur anti-détection ?

Un navigateur anti-détection est un navigateur web spécialisé conçu pour gérer plusieurs identités en ligne en créant des **empreintes digitales uniques** pour chaque profil. Contrairement aux navigateurs classiques, les navigateurs anti-détection masquent ces identifiants.

## Pourquoi en avez-vous besoin ?

Si vous gérez plusieurs comptes sur Amazon, Facebook ou Google, vous avez probablement rencontré des blocages. Les plateformes utilisent les **empreintes digitales** pour détecter le multi-compte.

Informations collectées :
- **Empreinte Canvas** — rendu graphique du GPU
- **Données WebGL** — capacités 3D
- **Résolution d'écran** — dimensions de l'affichage
- **Polices installées** — polices système disponibles
- **User Agent** — informations navigateur et OS
- **Fuseau horaire et langue** — paramètres locaux

## Comment fonctionnent-ils ?

1. **Création de profil** — profil avec des paramètres d'empreinte uniques
2. **Configuration** — valeurs Canvas, WebGL, polices, taille d'écran
3. **Attribution de proxy** — IP unique pour chaque profil
4. **Environnement isolé** — cookies, cache et stockage séparés
5. **Navigation indétectable** — empreinte unique + IP unique

## Comment choisir

| Facteur | À rechercher |
|---------|-------------|
| **Qualité des empreintes** | ML > injection de bruit |
| **Moteurs** | Chromium + Firefox idéal |
| **Plan gratuit** | Testez avant d'acheter |
| **Fonctions d'équipe** | Permissions par rôle |
| **Automatisation** | API, Selenium, Puppeteer, Playwright |
| **Prix** | Comparez le coût par profil |

## Démarrage rapide

1. **Inscrivez-vous** à un navigateur anti-détection
2. **Téléchargez et installez** l'application
3. **Créez votre premier profil** avec les paramètres par défaut
4. **Ajoutez un proxy** (résidentiel recommandé)
5. **Lancez le profil** et vérifiez sur [BrowserLeaks](https://browserleaks.com)

## Étapes suivantes

- [Configuration proxy](/guides/proxy-setup) — guide détaillé
- [Test d'empreintes](/guides/fingerprint-testing) — vérification
- [Automatisation](/guides/automation-guide) — automatiser avec du code`,

  "proxy-setup": `## Pourquoi les proxies sont essentiels

Le navigateur gère votre **empreinte digitale**, mais votre **adresse IP** est tout aussi importante. Sans proxy, tous vos profils partagent la même IP.

## Types de proxies

### Proxies résidentiels
- **Idéal pour** : réseaux sociaux, e-commerce
- **Risque de détection** : très faible
- **Coût** : élevé ($5-15/Go)

### Proxies datacenter
- **Idéal pour** : scraping, opérations en masse
- **Risque** : moyen
- **Coût** : faible ($1-3/Go)

### Proxies ISP
- **Idéal pour** : comptes long terme
- **Risque** : très faible
- **Coût** : le plus élevé ($2-5/IP/mois)

## Étapes de configuration

### Étape 1 : Choisir un fournisseur
- **Bright Data**, **Oxylabs**, **Smartproxy**, **IPRoyal**

### Étape 2 : Obtenir vos identifiants
- **Hôte/IP**, **Port**, **Identifiant**, **Mot de passe**, **Protocole**

### Étape 3 : Configurer dans le navigateur
1. Ouvrir les paramètres du profil
2. Section Proxy
3. Sélectionner le protocole
4. Entrer les informations
5. Cliquer "Vérifier le proxy"
6. Sauvegarder

## Bonnes pratiques

- **Un proxy par profil**
- **Correspondance des données** — fuseau horaire, langue, géolocalisation
- **Sessions statiques** — pour la gestion de comptes
- **Rotation** — pour la collecte de données`,

  "automation-guide": `## Pourquoi automatiser ?

L'automatisation permet de passer de quelques comptes à des centaines :
- **Mise à l'échelle** — créer et gérer des profils par programme
- **Gain de temps** — automatiser les tâches répétitives
- **Réduction des erreurs** — éliminer les erreurs humaines
- **Fonctionnement 24/7** — planifier des tâches automatiques

---

## MoreLogin

**URL API :** \`http://127.0.0.1:40000\`
**Documentation :** [guide.morelogin.com](https://guide.morelogin.com)

### Node.js + Puppeteer

\`\`\`javascript
const axios = require('axios');
const puppeteer = require('puppeteer');
const BASE = 'http://127.0.0.1:40000';

async function main() {
  const createResp = await axios.post(BASE + '/api/env/create/quick', { name: 'automation-profile' });
  const envId = createResp.data.data.envId;
  const startResp = await axios.post(BASE + '/api/env/start', { envId });
  const browser = await puppeteer.connect({ browserWSEndpoint: startResp.data.data.wsEndpoint });
  const page = (await browser.pages())[0];
  await page.goto('https://browserleaks.com/canvas');
  console.log('Title:', await page.title());
  await axios.post(BASE + '/api/env/stop', { envId });
}
main();
\`\`\`

## Comparaison

| Fonction | MoreLogin | AdsPower | GoLogin | Multilogin | Dolphin Anty | Octo Browser |
|----------|-----------|----------|---------|------------|-------------|-------------|
| Playwright | ✓ | ✗ | ✓ | ✓ | ✗ | ✗ |
| Selenium | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Puppeteer | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| API locale | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| MCP | ✓ | ✗ | ✓ | ✗ | ✗ | ✗ |`,

  "fingerprint-testing": `## Pourquoi tester vos empreintes

Après configuration, vous devez **vérifier que tout fonctionne correctement**.

## Outils recommandés

### 1. CreepJS
**URL** : [abrahamjuliot.github.io/creepjs](https://abrahamjuliot.github.io/creepjs/)

Test complet : Canvas, WebGL, audio, polices, incohérences.

### 2. BrowserLeaks
**URL** : [browserleaks.com](https://browserleaks.com/)

Tests individuels : Canvas, WebGL, WebRTC, polices.

### 3. Pixelscan
**URL** : [pixelscan.net](https://pixelscan.net/)

Détection d'incohérences : navigateur vs OS, fuseau vs IP.

## Liste de vérification

| Vérification | Critère | Outil |
|-------------|---------|-------|
| Canvas | Unique par profil | BrowserLeaks |
| WebGL | Correspond à l'OS/GPU | BrowserLeaks |
| WebRTC | Pas de fuite IP | BrowserLeaks |
| Fuseau horaire | Correspond au proxy | Pixelscan |
| Langue | Correspond au pays | Pixelscan |

## Résolution de problèmes

### Fuite WebRTC
**Solution** : Désactiver ou mode "remplacement"

### Décalage de fuseau horaire
**Solution** : Correspondance automatique avec le proxy

### Empreintes Canvas identiques
**Solution** : Activer le bruit Canvas ou le mode ML`,
};
