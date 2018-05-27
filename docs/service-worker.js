/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

importScripts(
  "./precache-manifest.42c5a89e0f08148b96e0755119e3bf84.js"
);

workbox.core.setCacheNameDetails({prefix: "easy-wallet"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "f1c7a1ff780e8ddc62898c8c4710d47c"
  },
  {
    "url": "precache-manifest.8a9d87b8dd1e5829f36d8def525fd5f8.js",
    "revision": "8a9d87b8dd1e5829f36d8def525fd5f8"
  },
  {
    "url": "precache-manifest.c118db7515edb059248d1ba46d1daada.js",
    "revision": "c118db7515edb059248d1ba46d1daada"
  },
  {
    "url": "service-worker.js",
    "revision": "e5d3762469ce17caae3e71cc0dd70bff"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
