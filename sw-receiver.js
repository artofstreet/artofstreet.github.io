const CACHE_NAME = 'safezone-receiver-v7';
const urlsToCache = [
  '/',
  '/receiver.html',
  '/manifest-receiver.json',
  '/icons/receiver-192.png',
  '/icons/receiver-512.png'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
