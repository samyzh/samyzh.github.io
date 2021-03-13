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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7456c85f388193214592e0baef57a7fb"
  },
  {
    "url": "assets/css/0.styles.d296e5f9.css",
    "revision": "eceeea14d11f9ede652bb13ea7ecf125"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6c844850.js",
    "revision": "3db51c8f2205e255bd9431b1d5a46f35"
  },
  {
    "url": "assets/js/11.42fa65f2.js",
    "revision": "2f7546ecc9bd661d26c3acaff75fa174"
  },
  {
    "url": "assets/js/12.b7dde088.js",
    "revision": "4294848565d81da927d6998651d83195"
  },
  {
    "url": "assets/js/2.5125f932.js",
    "revision": "315f027d0272a58301aaa01719a7edc3"
  },
  {
    "url": "assets/js/3.effe7eb6.js",
    "revision": "5e36951c06c601ec93e0bdacdc4fb774"
  },
  {
    "url": "assets/js/4.b612b857.js",
    "revision": "eefb7e8e743aa278a0a148ee025dc474"
  },
  {
    "url": "assets/js/5.a04fdbc7.js",
    "revision": "d36092c681906774b1064179867cea62"
  },
  {
    "url": "assets/js/6.5c3ce1e3.js",
    "revision": "5486119066e289144871c861c9ad30e8"
  },
  {
    "url": "assets/js/7.1ec3116e.js",
    "revision": "bfdd017419229bc9163cc24576ed4f75"
  },
  {
    "url": "assets/js/8.9a79073d.js",
    "revision": "676a6a1c2a522e0acf7dcfde4eac15d9"
  },
  {
    "url": "assets/js/9.fbafffa0.js",
    "revision": "8f8e82e53cef5dff8e2283ddba27768c"
  },
  {
    "url": "assets/js/app.3e9979a0.js",
    "revision": "55fc9cd6857ae50968cf27afaf38d698"
  },
  {
    "url": "icons/128.png",
    "revision": "f19ba5804780ac3664bdd6ce9c50724f"
  },
  {
    "url": "icons/144.png",
    "revision": "583406f92a52b907016ba5e4b715b9b4"
  },
  {
    "url": "icons/192.png",
    "revision": "840c0142f4181b55f5e83a290b7e8f92"
  },
  {
    "url": "icons/256.png",
    "revision": "7e5069117ce620824246c393bdb7b2c3"
  },
  {
    "url": "icons/512.png",
    "revision": "c8dcc00abb209dfef10c0d04b7af53e1"
  },
  {
    "url": "img/bg.jpg",
    "revision": "eeb52a7402b93340c8370fedd1e9e745"
  },
  {
    "url": "img/devops.png",
    "revision": "fe90fdbe27069d08f99b61722748ade5"
  },
  {
    "url": "img/logo.png",
    "revision": "afbe38be16ddbe51c2b78cf42a7c4be3"
  },
  {
    "url": "img/more.png",
    "revision": "20bc993bdaa9538405f85ac5fcefdf1d"
  },
  {
    "url": "img/other.png",
    "revision": "cd4a5ecbd9cc330e7fdcb9bdc3e92796"
  },
  {
    "url": "img/python.png",
    "revision": "fd961de471b586d9049547322f8b1744"
  },
  {
    "url": "img/ui.png",
    "revision": "1c26d51f2ef9a17b8b36f55cb04be642"
  },
  {
    "url": "img/web.png",
    "revision": "c1718a647a4b41978bc8af6b0a3f41da"
  },
  {
    "url": "img/wechat-qr.png",
    "revision": "f13102667ce7ea55904c3035d2ef90de"
  },
  {
    "url": "index.html",
    "revision": "3714d001435cf97028bc913d900c9625"
  },
  {
    "url": "invest/index.html",
    "revision": "f862eaf060be116adf0086299ecd71ca"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "044cbfce5b311dd2f595d20b4a1cfd76"
  },
  {
    "url": "js/readmore.js",
    "revision": "5bdb40d4a540b98857dd7bf6c8d3ca76"
  },
  {
    "url": "skill/index.html",
    "revision": "3002b97816a225e57bf406b81620a91d"
  },
  {
    "url": "summ/index.html",
    "revision": "85bede0e708030697db7d4df1420581a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
