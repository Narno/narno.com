var CACHE_VERSION="1583319747";var CACHE_NAME='narno.com';var CACHE=CACHE_NAME+'-v'+CACHE_VERSION;var urlsToCache=[];urlsToCache.push('/blog/velo-cargo-bullitt-ya-quoi-dans-le-carton/');urlsToCache.push('/blog/chrome-open-new-tab-after-current-tab/');urlsToCache.push('/blog/facebook-notifier/');urlsToCache.push('/mes-velos/');urlsToCache.push('/config-pc/');urlsToCache.push('/tags/cycliste-urbain/');urlsToCache.push('/a-propos/');urlsToCache.push('/blog/pourquoi-ne-pas-juste-dire-merci/');urlsToCache.push('/blog/lassee-des-incivilites-la-velosphere-se-rebiffe/');urlsToCache.push('/blog/reboot-du-blog/');urlsToCache.push('/blog/leo-est-ne/');urlsToCache.push('/blog/magento-ajouter-une-colonne-dans-une-grille/');urlsToCache.push('/blog/installer-dayz-facilement/');urlsToCache.push('/blog/telecharger-manuellement-une-extension-magento/');urlsToCache.push('/blog/verifier-la-validite-des-fichiers-de-configuration-xml-de-magento/');urlsToCache.push('/blog/utiliser-gettext-pour-traduire-vos-modules-magento/');urlsToCache.push('/blog/drupal-7-avis-et-retour-dexperience/');urlsToCache.push('/blog/modules-payant-pour-magento-attention-aux-arnaques/');urlsToCache.push('/blog/augmenter-la-qualite-des-photos-sur-magento/');urlsToCache.push('/blog/migration-dun-forum-phpbb2-vers-phpbb3/');urlsToCache.push('/blog/windows-update-desactiver-le-redemarrage-automatique/');urlsToCache.push('/blog/magento-et-referencement-naturel-seo/');urlsToCache.push('/blog/seo-pour-drupal/');urlsToCache.push('/blog/picasa-vers-flickr-importer-vos-photos-simplement/');urlsToCache.push('/blog/barcamp-magento-a-paris/');urlsToCache.push('/blog/skin-drupal-pour-nintendo-ds-r4/');urlsToCache.push('/blog/left-4-dead-pre-commande/');urlsToCache.push('/blog/magento-la-version-francaise-arrive/');urlsToCache.push('/blog/wikio-vote-module-de-vote-pour-drupal/');urlsToCache.push('/blog/soltek-qbic-eq3401-le-kit-de-survie/');urlsToCache.push('/blog/windows-update-je-te-hais/');urlsToCache.push('/blog/paris-web-2007-jy-suis-passe/');urlsToCache.push('/blog/afficher-votre-profil-ziki-sur-votre-blog-drupal/');urlsToCache.push('/galeries/soltek-eq3401-sp94-guide-montage/');urlsToCache.push('/blog/soltek-eq3401-sp94-guide-montage/');urlsToCache.push('/blog/');urlsToCache.push('/tags/');urlsToCache.push('/galeries/');urlsToCache.push('/tags/velo/');urlsToCache.push('/tags/developpement/');urlsToCache.push('/tags/ssg/');urlsToCache.push('/tags/drupal/');urlsToCache.push('/tags/ma-vie/');urlsToCache.push('/tags/magento/');urlsToCache.push('/tags/jeux-video/');urlsToCache.push('/tags/php/');urlsToCache.push('/tags/windows/');urlsToCache.push('/tags/seo/');urlsToCache.push('/tags/photos/');urlsToCache.push('/tags/drivers/');urlsToCache.push('/tags/mini-pc/');urlsToCache.push('/tags/humeur/');urlsToCache.push('/tags/accessibilite/');urlsToCache.push('/');urlsToCache.push('/robots.txt');urlsToCache.push('/sitemap.xml');urlsToCache.push('/404.html');urlsToCache.push('/manifest.webmanifest');urlsToCache.push('/serviceworker.js');urlsToCache.push('/blog/le-blog-avance/');urlsToCache.push('/code/');urlsToCache.push('/blog/page/2/');urlsToCache.push('/blog/page/3/');urlsToCache.push('/blog/page/4/');urlsToCache.push('/blog/page/5/');urlsToCache.push('/blog/page/6/');urlsToCache.push('/tags/developpement/page/2/');urlsToCache.push('/tags/drupal/page/2/');urlsToCache.push('/tags/magento/page/2/');urlsToCache.push('/page/2/');urlsToCache.push('/page/3/');urlsToCache.push('/page/4/');urlsToCache.push('/page/5/');urlsToCache.push('/page/6/');urlsToCache.push('/page/7/');urlsToCache.push('/mon-velo/');urlsToCache.push('/configpc/');urlsToCache.push('/contact/');urlsToCache.push('/blog/magento-ajouter-une-colonne-dans-une-grille-du-back-office/');urlsToCache.push('/blog/drupal-7-avis-et-retour-dexperience-0/');urlsToCache.push('/blog/soltek-qbic-eqle-kit-de-survie/');urlsToCache.push('/rubriques/divers/minigaia/soltek-eq3401-sp94-guide-montage//');urlsToCache.push('/rubriques/divers/minigaia/soltek_eq3401_guide1//');urlsToCache.push('/soltek-eq3401-sp94-guide-montage//');urlsToCache.push('/blog/page/1/');urlsToCache.push('/tags/developpement/page/1/');urlsToCache.push('/tags/drupal/page/1/');urlsToCache.push('/tags/magento/page/1/');urlsToCache.push('/page/1/');urlsToCache.push('/icon.png');urlsToCache.push('/css/poole.css');urlsToCache.push('/css/syntax.css');urlsToCache.push('/css/lanyon.css');urlsToCache.push('/css/narno.com.css');self.addEventListener('install',function(event){console.log('[SW] Install');event.waitUntil(self.skipWaiting(caches.open(CACHE).then(function(cache){console.log('[SW] Pre-cache');urlsToCache.forEach(function(url){cache.add(url).catch(error=>console.error(`[SW] Can't add "${url}" to cache`))})})))});self.addEventListener('activate',function(event){console.log('[SW] Activate');event.waitUntil(caches.keys().then(function(keyList){return Promise.all(keyList.map(function(key){if(key!==CACHE){console.log(`[SW] Remove old cache '${key}'`);return caches.delete(key)}}))}))});self.addEventListener('fetch',function(event){if(event.request.method!=='GET'){return}
url=new URL(event.request.url);if(!(url.origin==location.origin)){return}
if(url.pathname=='/watcher'){return}
event.respondWith(caches.match(event.request).then(function(response){if(response){return response}
var fetchRequest=event.request.clone();return fetch(fetchRequest).then(function(response){if(!response||response.status!==200||response.type!=='basic'){return response}
var responseToCache=response.clone();caches.open(CACHE).then(function(cache){if(event.request.url.startsWith('data:')){return}
cache.put(event.request,responseToCache)});return response}).catch(function(response){if(event.request.headers.get('Accept').indexOf('image')!==-1){return new Response('<svg role="img" aria-labelledby="offline-title" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><title id="offline-title">Offline</title><g fill="none" fill-rule="evenodd"><path fill="#D8D8D8" d="M0 0h400v300H0z"/><text fill="#505050" font-family="Helvetica Neue,Arial,Helvetica,sans-serif" font-size="72" font-style="italic"><tspan x="93" y="172">offline</tspan></text></g></svg>',{headers:{'Content-Type':'image/svg+xml'}})}})}))})