var cacheName = "modifypwa-v2"
var filesToCache = [] //["./", "./index.html", "./obamify.js", "./obamify_bg.wasm"]

/* Start the service worker and cache all of the app's content */
self.addEventListener("install", function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache)
        })
    )
})

/* Serve cached content when offline */
self.addEventListener("fetch", function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request)
        })
    )
})

/* Remove old caches on activate */
self.addEventListener("activate", function (e) {
    e.waitUntil(
        caches.keys().then(function (keys) {
            return Promise.all(
                keys
                    .filter(function (k) {
                        return k !== cacheName
                    })
                    .map(function (k) {
                        return caches.delete(k)
                    })
            )
        })
    )
})