importScripts('/cache-polyfill.js');
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('lewis\'s page').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/works/index.html'
            ])
        })
    )
})