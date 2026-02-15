const CACHE_NAME = 'safezone-sender-v7';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest-sender.json',
  '/icons/sender-192.png',
  '/icons/sender-512.png'
];

self.addEventListener('install', event => {
  self.skipWaiting(); // 즉시 활성화
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim()); // 기존 페이지 즉시 제어
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
