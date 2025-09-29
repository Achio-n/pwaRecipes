const CACHE_NAME = "savorly-v1";

const ASSETS_TO_CACHE = [
  "/",
  "./index.html",
  "./pages/about.html",
  "./pages/contact.html",
  "./css/materialize.min.css",
  "./js/materialize.min.js",
  "./js/ui.js",
  "./img/recipe.png",
  "./img/favicon.ico",
  "./img/food.png",
  "./img/logoFull.png",
  "./img/logoSmall.png",
  "./img/android-chrome-192x192.png",
  "./img/android-chrome-512x512.png",
  "./img/apple-touch-icon.png",
  "./img/favicon-16x16.png",
  "./img/favicon-32x32.png"
];

self.addEventListener("install", (event) => {
  console.log("Service Worker: Installing...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Service Worker: Caching files");
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activating...");
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Service worker: Deleting old cache");
            return cache.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  console.log("Service Worker: Fetching...", event.request.url);
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});