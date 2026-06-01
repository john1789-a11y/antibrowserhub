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

  "best-for-amazon": `## Pourquoi les vendeurs Amazon ont-ils besoin d'un anti-détection ?

Amazon est extrêmement strict concernant la détection de multicompte. La plateforme croise les empreintes de navigateur, les adresses IP, les cookies et le comportement des utilisateurs. Si elle associe plusieurs boutiques à un même utilisateur, elle suspend tous les comptes liés.

Un navigateur anti-détection crée des **environnements totalement isolés** pour chaque boutique, évitant cette association.

## Notre sélection

### 1. MoreLogin — Le meilleur choix global
- Empreinte Canvas basée sur le Machine Learning (ML), indétectable par Amazon.
- Synchronisation automatique du fuseau horaire, de la langue et de la localisation.
- À partir de **5,4 $/mois** pour 10 profils.

### 2. AdsPower — Idéal pour l'automatisation
- Automatisation RPA intégrée pour gérer vos fiches produits et stocks en masse.
- Prise en charge de plus de 50 paramètres.

### 3. GoLogin — Idéal pour les équipes à distance
- Lancement de profils sur le cloud pour y accéder depuis n'importe quel appareil.
- Proxies gratuits inclus et application Android.

## Conseils pour les vendeurs Amazon
1. **Un profil par boutique** : ne partagez aucune donnée.
2. **Proxies ISP statiques dédiés** : utilisez des IP résidentielles fixes pour chaque boutique.
3. **Moyens de paiement séparés** : utilisez des cartes et comptes bancaires différents.`,

  "best-for-facebook-ads": `## Pourquoi utiliser un anti-détection pour les publicités Facebook ?

Meta dispose d'algorithmes de détection très avancés. L'utilisation de plusieurs comptes publicitaires sur un même appareil entraîne le blocage immédiat de tout votre réseau.

## Sélection de navigateurs

### 1. AdsPower — Le roi de la pub Facebook
- **Constructeur RPA intégré** pour automatiser l'échauffement des comptes, les publications et le suivi.
- **Robot de cookies** pour collecter les cookies.
- Tarifs dès **5,4 $/mois**.

### 2. Dolphin Anty — Idéal pour les affiliés
- **10 profils gratuits à vie**.
- Automatisation par scénario visuel.
- Émulation d'empreintes mobiles (iOS/Android).

### 3. MoreLogin — Excellent rapport qualité/prix
- Empreintes Canvas de haute qualité issues du Machine Learning.
- Synchroniseur de fenêtres pour contrôler plusieurs profils à la fois.

## Stratégie d'échauffement (Warm-up) de compte Facebook
- **Jours 1-3** : Activité normale (défiler le fil d'actualité, regarder des vidéos, rejoindre des groupes).
- **Jours 4-7** : Interactions (likes, commentaires, partages).
- **Jours 8-14** : Création d'une page pro et configuration de Business Manager (BM).
- **Jours 15+** : Ajout du mode de paiement et lancement de petites campagnes (5-10 $/jour).`,

  "best-free-antidetect-browser": `## Les navigateurs anti-détection gratuits fonctionnent-ils ?

Oui ! La plupart des navigateurs réputés proposent des forfaits gratuits avec une protection réelle. C'est parfait pour débuter, pour un usage personnel ou de petites opérations.

## Comparatif des offres gratuites

| Navigateur | Profils gratuits | Fonctionnalités clés | Limitations |
|------------|------------------|----------------------|-------------|
| **Dolphin Anty** | 10 | Empreintes réelles, automatisation | Pas d'API |
| **Incogniton** | 10 | Synchronisation, intégration Selenium | Pas de fonctions avancées |
| **Undetectable** | 5 cloud + ∞ locaux | Profils locaux **illimités** ! | Limité à 5 sur le cloud |
| **GoLogin** | 3 | Lancement cloud, accès web | Fonctions limitées |
| **MoreLogin** | 2 | **Toutes** les fonctions débloquées (avec API) | Uniquement 2 profils |
| **AdsPower** | 2 | Spoofing de base, SunBrowser | Automatisation limitée |

## Recommandations

- **Besoin d'un maximum de profils gratuits ?** Choisissez **Dolphin Anty** (10 profils) ou **Incogniton** (10 profils).
- **Besoin de profils locaux illimités ?** Choisissez **Undetectable**.
- **Besoin d'un accès API complet gratuitement ?** Choisissez **MoreLogin** (toutes fonctions débloquées).`,

  "best-for-affiliate-marketing": `## Pourquoi l'affiliation nécessite-t-elle un anti-détection ?

Le marketing d'affiliation (Affiliate Marketing) implique de gérer plusieurs comptes publicitaires et réseaux. Un bannissement signifie la perte de vos campagnes et de vos gains.

## Choix principaux pour l'affiliation

### 1. Dolphin Anty — Conçu pour les affiliés
- Créé par des professionnels de l'affiliation, s'adapte parfaitement aux besoins du media buying.
- 10 profils gratuits et émulation d'empreintes mobiles.

### 2. AdsPower — Le choix des grandes équipes
- Scénarios RPA pour l'enregistrement et l'échauffement automatiques des comptes.
- Synchroniseur multi-fenêtres pour exécuter des actions groupées.

### 3. MoreLogin — Très économique
- Empreintes basées sur l'IA, à partir de **5,4 $/mois** pour 10 profils.

## Flux de travail d'affiliation type
1. **Préparation** : création de profils, configuration de proxys résidentiels, import de cookies.
2. **Échauffement** : interactions quotidiennes automatiques.
3. **Lancement** : diversification des comptes publicitaires pour minimiser les risques de blocage.`,

  "best-for-web-scraping": `## Pourquoi utiliser un navigateur anti-détection pour le scraping ?

Les sites modernes déploient des protections avancées (Cloudflare, CAPTCHAs). Les scripts headless classiques (Puppeteer, Playwright) sont rapidement détectés. Un anti-détection permet de simuler un **comportement utilisateur réel** et de contourner ces barrières.

## Solutions recommandées

### 1. MoreLogin — Meilleure API de scraping
- API REST et locale complète disponible même dans l'offre gratuite.
- Support natif de Playwright, Puppeteer et Selenium.

### 2. GoLogin — Scraping dans le cloud
- Exécutez vos profils sur les serveurs cloud de GoLogin pour économiser vos ressources locales.
- Support Linux pour déploiement sur serveur.

### 3. Multilogin — Fiabilité entreprise
- Modification des empreintes au niveau du moteur de rendu (Mimic / Stealthfox).
- Haute stabilité en mode headless pour des opérations d'envergure.`,

  "best-for-tiktok": `## Spécificités de TikTok
TikTok est une plateforme mobile avant tout. Elle analyse donc rigoureusement les empreintes mobiles, les coordonnées GPS, le type d'IP (priorité aux IP mobiles) et les comportements.

## Meilleurs choix pour TikTok

### 1. AdsPower — Pour les campagnes publicitaires
- Modèles RPA spécifiques pour automatiser les campagnes TikTok Ads et gérer vos budgets.

### 2. Dolphin Anty — Pour les créateurs de contenu
- Émulation avancée d'empreintes mobiles (Android/iOS) pour passer les contrôles applicatifs.
- 10 profils gratuits pour lancer vos réseaux de comptes.

### 3. MoreLogin — TikTok Shop et Cloud Phone
- Lancez un véritable téléphone Android virtuel (Cloud Phone) directement depuis votre navigateur.
- Spoofing Canvas très fiable.`,

  "best-for-crypto-airdrop": `## Pourquoi les airdrops nécessitent-ils un anti-détection ?

Dans la crypto, le farming d'airdrops requiert plusieurs portefeuilles. Les projets utilisent des systèmes de détection Sybil. Si plusieurs portefeuilles interagissent avec un contrat depuis le même appareil ou le même IP, ils sont éliminés des distributions de tokens.

## Recommandations

### 1. MoreLogin — Idéal pour le farming Web3
- **Synchroniseur de fenêtres** : effectuez des actions sur une seule fenêtre, elles sont reproduites en temps réel sur 50+ autres fenêtres.
- Installation en masse d'extensions (MetaMask, Phantom, Keplr).
- Tarifs très bas à partir de **5,4 $/mois**.

### 2. AdsPower — Organisation par tags
- Classez et étiquetez des centaines de portefeuilles par projet ou réseau.

## Bonnes pratiques de sécurité
1. **Un portefeuille par profil** : n'importez jamais la même phrase secrète dans différents profils.
2. **Proxys résidentiels dédiés** : un IP unique par portefeuille.
3. **Séparation des transactions** : ne financez pas tous vos portefeuilles depuis la même adresse d'échange. Utilisez les sous-comptes d'exchanges (ex. OKX).`,

  "cheapest-antidetect-browser": `## Comparatif des prix des navigateurs anti-détection (2026)

Le choix de l'option la moins chère dépend du nombre de profils requis :

| Navigateur | Gratuit | 10 profils | 50 profils | 100 profils | Coût/profil (100) |
|------------|---------|------------|------------|-------------|-------------------|
| **MoreLogin** | 2 | 5,4 $/mo | Sur mesure | Sur mesure | ~0,15 - 0,30 $ |
| **AdsPower** | 2 | 5,4 $/mo | ~20 $/mo | 30 $/mo | 0,30 $ |
| **GoLogin** | 3 | 24 $/mo | 24 $/mo | 24 $/mo | 0,24 $ |
| **Dolphin Anty** | 10 | 89 $/mo | 89 $/mo | 89 $/mo | 0,89 $ |
| **Multilogin** | 0 | 99 €/mo | 99 €/mo | 99 €/mo | 0,99 € |

## Le meilleur rapport qualité-prix

- **Moins de 10 profils** : **Dolphin Anty** (10 profils gratuits).
- **De 10 à 100 profils** : **MoreLogin** ou **AdsPower** (5,4 $/mois pour 10 profils avec options d'évolution).
- **Plus de 100 profils** : **GoLogin** (forfait fixe très compétitif de 24 $/mois pour 100 profils).`,

  "avoid-amazon-suspension": `## Comment Amazon détecte-t-il les comptes liés ?

Amazon analyse plusieurs couches de données :
1. **Empreintes de navigateur** : Canvas, WebGL, polices, résolutions.
2. **Réseau** : IP, DNS, fuites WebRTC.
3. **Données d'enregistrement** : numéros de téléphone, adresses e-mail, comptes bancaires, cartes de crédit.
4. **Comportement** : similarité des images et textes des fiches produits.

## Guide étape par étape pour vous protéger

### Étape 1 : Création de profils isolés
Utilisez **MoreLogin** ou **AdsPower** en choisissant la génération automatique des empreintes.

### Étape 2 : Proxies ISP de qualité
Évitez les proxies de centres de données. Utilisez uniquement des proxies ISP résidentiels statiques dédiés.

### Étape 3 : Vérification
Lancez le profil et vérifiez sa cohérence sur [browserleaks.com](https://browserleaks.com) et [pixelscan.net](https://pixelscan.net).

### Étape 4 : Séparation des données physiques
- Utilisez des comptes bancaires de réception séparés.
- Rédigez des descriptions uniques et modifiez l'angle de vos visuels produits.`,

  "multiple-facebook-accounts": `## Gérer plusieurs comptes publicitaires Facebook sans bannissement

Les bannissements Facebook surviennent généralement lors du croisement de données matérielles ou d'IP suspectes.

### Architecture recommandée

\`\`\`
Profil A ──> Compte FB A ──> BM A ──> Compte Publicitaire A
Profil B ──> Compte FB B ──> BM B ──> Compte Publicitaire B
\`\`\`

Chaque profil doit posséder son propre proxy résidentiel, ses cookies isolés, et un moyen de paiement unique.

### Règles d'échauffement de comptes
- **Connexion** : restez inactif pendant les premières 24 heures suivant la connexion.
- **Activité sociale** : interagissez normalement pendant 1 semaine (likes, partages, vidéos) sans ouvrir le gestionnaire de publicités.
- **Paiement** : ajoutez votre carte de crédit uniquement lors de la deuxième semaine d'utilisation.
- **Lancement** : démarrez avec de petits budgets de couverture pour valider les premiers prélèvements automatiques de Facebook.`,

  "chromium-vs-firefox-kernel": `## Moteur Chromium vs Firefox : lequel est le meilleur ?

La majorité des navigateurs anti-détection utilisent Chromium (MoreLogin, AdsPower SunBrowser, GoLogin). Quelques-uns proposent Firefox (Stealthfox dans Multilogin, FlowerBrowser dans AdsPower).

## Tableau comparatif

| Fonctionnalité | Chromium | Firefox |
|----------------|----------|---------|
| **Part de marché réelle** | ~65 % (standard du web) | ~7 % (minoritaire) |
| **Camouflage** | Se fond facilement dans la masse | Intéressant si les sites ciblent Chromium |
| **Extensions Chrome** | Prise en charge complète | Limitée aux addons Firefox |
| **Automatisation** | Excellent support (Puppeteer, Playwright) | Partiel (Playwright, Selenium) |
| **Consommation mémoire** | Élevée | Modérée |

## Quand utiliser chaque noyau ?

1. **Usage standard (E-commerce, Crypto, Réseaux sociaux)** : préférez **Chromium** pour sa compatibilité et l'accès complet au catalogue d'extensions.
2. **Pour contourner des filtres de fraude spécifiques** : testez **Firefox** qui présente des caractéristiques d'empreintes différentes et moins ciblées par les outils d'anti-détection.
3. **Diversification** : configurez 70 % de vos profils sur Chromium et 30 % sur Firefox.`,
};
