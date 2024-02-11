importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

const { registerRoute } = workbox.routing;
const { CacheFirst } = workbox.strategies;
const { precacheAndRoute } = workbox.precaching;
const cacheFirstRoutes = [
  'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
  'https://storage.hectorolea.dev/hector-olea.jpg',
  'https://storage.hectorolea.dev/hector-olea-resume.pdf',
  'https://fonts.googleapis.com',
];

precacheAndRoute(self.__WB_MANIFEST);

cacheFirstRoutes.forEach((route) => {
  registerRoute(new RegExp(route), new CacheFirst());
});
