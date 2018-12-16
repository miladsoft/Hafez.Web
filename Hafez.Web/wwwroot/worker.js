self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('v1').then(function (cache) {
            return cache.addAll([
                '/lib/twitter-bootstrap/css/bootstrap.min.css',
                '/lib/jquery/jquery.min.js',
                '/lib/twitter-bootstrap/js/bootstrap.min.js',
                '/lib/vue/vue.min.js',
                '/hafez.json',
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