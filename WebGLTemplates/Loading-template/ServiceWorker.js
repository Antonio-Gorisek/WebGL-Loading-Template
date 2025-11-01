#if USE_DATA_CACHING
// DEFINES THE NAME OF THE CACHE BASED ON COMPANY, PRODUCT, AND VERSION
const cacheName = {{{JSON.stringify(COMPANY_NAME + "-" + PRODUCT_NAME + "-" + PRODUCT_VERSION )}}};

// LIST OF FILES TO CACHE FOR OFFLINE USE OR FAST LOADING
const contentToCache = [
    "Build/{{{ LOADER_FILENAME }}}",
    "Build/{{{ FRAMEWORK_FILENAME }}}",
#if USE_THREADS
    "Build/{{{ WORKER_FILENAME }}}",
#endif
    "Build/{{{ DATA_FILENAME }}}",
    "Build/{{{ CODE_FILENAME }}}",
    "TemplateData/style.css"
];
#endif

// RUNS WHEN THE SERVICE WORKER IS INSTALLED
// USED TO OPEN THE CACHE AND STORE INITIAL FILES
self.addEventListener('install', function (e) {
    console.log('[Service Worker] Install');
    
#if USE_DATA_CACHING
    e.waitUntil((async function () {
      const cache = await caches.open(cacheName);
      console.log('[Service Worker] Caching all: app shell and content');
      await cache.addAll(contentToCache);
    })());
#endif
});

#if USE_DATA_CACHING
// RUNS WHEN A NETWORK REQUEST IS MADE
// CHECKS THE CACHE FIRST, IF NOT FOUND FETCHES FROM NETWORK AND UPDATES CACHE
self.addEventListener('fetch', function (e) {
    e.respondWith((async function () {
      let response = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (response) { return response; }

      response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })());
});
#endif