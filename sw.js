if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let c={};const d=e=>a(e,n),o={module:{uri:n},exports:c,require:d};i[n]=Promise.all(s.map((e=>o[e]||d(e)))).then((e=>(r(...e),c)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"b12fafc53d58a94d56e167856baf4b28"},{url:"assets/index-D1lKxuvo.css",revision:null},{url:"assets/learning-CDm28C9D.png",revision:null},{url:"assets/menu-BjSK5MIX.png",revision:null},{url:"assets/PrionerExpressBGR-CR8owmQH.png",revision:null},{url:"assets/settings-DM8KHxky.png",revision:null},{url:"favicon.ico",revision:"438de21f96b33692edceecba699ee4a4"},{url:"icons/home_icon.png",revision:"d5a6809733e1d4c37855fcc40c268c44"},{url:"icons/info_icon.png",revision:"08bde93b86ddd285e55e908953a7b698"},{url:"icons/mag_glass_icon.png",revision:"e73bce0cb37bb5bf8127f1348b0a26bb"},{url:"images/appdesign.png",revision:"86aacfe6b6a01c40bc86b7833197f4a4"},{url:"images/art-images/art1.png",revision:"fca3ea63f9e4e764498707c2e7a6eefb"},{url:"images/art-images/art3.png",revision:"d780c3d24bb66e2a2cafd5907abebf85"},{url:"images/art-images/art5.png",revision:"bfe88ef4e486cb037ffa38b508186b05"},{url:"images/art-images/art7.png",revision:"b722c5d6a957307b605997c3cf16db82"},{url:"images/art-images/art8.png",revision:"4134b446fad2075d479ef9ed917b5a34"},{url:"images/art.png",revision:"1cff3f1b054db006b8fdeee4abbb36be"},{url:"images/biology.png",revision:"4b55d2543eadedbf0b0cf4d6cb1c587a"},{url:"images/bookmark.png",revision:"7cdc6497302a40218ff5d0beae969b02"},{url:"images/chess.png",revision:"cb8b071e87eed7107c6b95cb039cfee3"},{url:"images/computerscience.png",revision:"527b52a6e1f27971d5e3606ad347288f"},{url:"images/contract.png",revision:"2d07acb91dfe40c3d87a06f9365a1c39"},{url:"images/cooking.png",revision:"588da7a4f99c81c8f7d6053790378c58"},{url:"images/explore-images/arts.png",revision:"0f5b4446414d8718bea93db0e245a2e6"},{url:"images/explore-images/essays.png",revision:"67820fb0033284a00bac2d0d4cf73c58"},{url:"images/explore-images/journals.png",revision:"8da1e91d1fe4aee5eda0ec80f207a0e4"},{url:"images/explore-images/poetry.png",revision:"b9fd5c48cc85ae9523bcc257a53fa5ec"},{url:"images/film.png",revision:"290571217083562c1cbbfbd7293649f5"},{url:"images/journal-images/j1.png",revision:"2b28aa6c07dd8aacf364ebdef87862e7"},{url:"images/journal-images/j10.png",revision:"f1068585ba13848ca1558b5ec2a71647"},{url:"images/journal-images/j2.png",revision:"302e30b0cd17f6f90cb26b75ef3be173"},{url:"images/journal-images/j3.png",revision:"4899e2dd884846343dffa9743e9c9e93"},{url:"images/journal-images/j4.png",revision:"43870b976fcc80c7c9dc1d80f7e50f80"},{url:"images/journal-images/j5.png",revision:"535a27e61db0866c5557ff33e4562b4e"},{url:"images/journal-images/j6.png",revision:"c34249d0dadd10dfe6f8c83a98dde67e"},{url:"images/journal-images/j7.png",revision:"78948efac17362a095f4c5d899aed398"},{url:"images/journal-images/j8.png",revision:"8c8e45926c45536240bbf4f370ddfd8a"},{url:"images/journal-images/j9.png",revision:"e11eadbcd36748a37223080080813def"},{url:"images/journal.png",revision:"7780e535ea1949f66cc4f5ad6e5f1bf2"},{url:"images/manuscript.png",revision:"3f37622ff8b6147e9687c45740b32225"},{url:"images/meditation.png",revision:"1d6887a67a8e51605575665b222b1e66"},{url:"images/menu-dots.png",revision:"bd65891e1d8b0bf66245dd830f446519"},{url:"images/menu.png",revision:"021e3663ca5016e75b8f79fffec474f4"},{url:"images/newspaper.png",revision:"5c54e0466ca7c0f367446458d831e59e"},{url:"images/ocean.png",revision:"6aec0ac4e38df4686c35c58ed30b8ad9"},{url:"images/philosophy.png",revision:"466a1a4906668180f119d624a8314550"},{url:"images/poetry-images/poetry21.png",revision:"826084a95b2cd1b1926f4117f8a55b4c"},{url:"images/poetry-images/poetry23.png",revision:"537ec168377de5aa9bde298ed405b5ab"},{url:"images/poetry-images/poetry24.png",revision:"801bffadb6d982ce1288241f5e0ffd21"},{url:"images/poetry-images/poetry25.png",revision:"7b1cd8b9ad5d170d959e46bc646673d7"},{url:"images/poetry-images/poetry26.png",revision:"690ef448f0131e0941a14595ba494a48"},{url:"images/poetry-images/poetry27.png",revision:"3a0cccf761161df70a53d5247c203d2e"},{url:"images/poetry-images/poetry28.png",revision:"68fe6e720dd8e869773b3ecf47c61086"},{url:"images/PrionerExpressBGR.png",revision:"c7da95fce541853237c4e228969a3b41"},{url:"images/puzzle.png",revision:"6a028ffd6e779fddb3977e9c4dac10f3"},{url:"images/saved-images/learning.png",revision:"446d6ff0f7b96af5536f62ed8bd12ff2"},{url:"images/saved-images/saved2_active.png",revision:"48e39e7e0844b88ecde98eb8f9088c6d"},{url:"images/saved-images/saved2.png",revision:"602b0ddea09ea9c857731bcaac49c4bd"},{url:"images/settings.png",revision:"d38da8d4a502b8cfd6c99d7cab739fac"},{url:"images/songwriting.png",revision:"c7d14672307025dcc4b1804c6e7917f8"},{url:"images/spanish.png",revision:"b68b4a513aad826ea7e2262069aba0eb"},{url:"images/trauma.png",revision:"90f4089f6d89cf0a42593b3f06a9a20f"},{url:"index.html",revision:"806d0283a8b3b7cc444617c336c0ae83"},{url:"masked-icon.svg",revision:"4405957b66e587ff182de6dc027505c6"},{url:"pwa-192x192.png",revision:"cce4d0d9e89153f5f1ed020e02bc0065"},{url:"pwa-512x512.png",revision:"671ddb2aec03f97443c0f8e549407646"},{url:"registerSW.js",revision:"e857f6399cbdfd1b749d90d92e2a94e8"},{url:"favicon.ico",revision:"438de21f96b33692edceecba699ee4a4"},{url:"apple-touch-icon.png",revision:"b12fafc53d58a94d56e167856baf4b28"},{url:"masked-icon.svg",revision:"4405957b66e587ff182de6dc027505c6"},{url:"pwa-192x192.png",revision:"cce4d0d9e89153f5f1ed020e02bc0065"},{url:"pwa-512x512.png",revision:"671ddb2aec03f97443c0f8e549407646"},{url:"manifest.webmanifest",revision:"33ac923565918814d9d825acb179a2ab"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
