self.addEventListener('install', function (event) {
    console.log('Install', event);
    event.waitUntil(
        caches.open('v3').then(function (cache) {
            return cache.addAll([
                '/hafez/lib/twitter-bootstrap/css/bootstrap.min.css',
                '/hafez/lib/jquery/jquery.min.js',
                '/hafez/lib/twitter-bootstrap/js/bootstrap.min.js',
                '/hafez/lib/vue/vue.min.js',
                '/hafez/hafez.json',
                '/hafez/lib/vue-animate/vue2-animate.css',
                '/hafez/button.png',
                '/hafez/button-noshadow.png',
                '/'
            ]);
        })
    );
});


self.addEventListener('fetch', function (event) {
    console.log('[Service Worker] Fetching something ....', event);
    event.respondWith(
        fetch(event.request).catch(function () {
            return caches.match(event.request);
        })
    );
});

self.addEventListener('activate', function (event) {
    console.log('[Service Worker] Activating Service Worker ...', event);
    return self.clients.claim();
});