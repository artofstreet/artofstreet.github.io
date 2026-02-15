const CACHE_NAME = 'safezone-sender-v7'; // [중요] v6를 v7으로 바꿨습니다!
const urlsToCache = [
  'index.html',
  'manifest-sender.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
