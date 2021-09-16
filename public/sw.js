if (!self.define) {
	const e = (e) => {
			'require' !== e && (e += '.js');
			let i = Promise.resolve();
			return (
				s[e] ||
					(i = new Promise(async (i) => {
						if ('document' in self) {
							const s = document.createElement('script');
							(s.src = e), document.head.appendChild(s), (s.onload = i);
						} else importScripts(e), i();
					})),
				i.then(() => {
					if (!s[e]) throw new Error(`Module ${e} didn’t register its module`);
					return s[e];
				})
			);
		},
		i = (i, s) => {
			Promise.all(i.map(e)).then((e) => s(1 === e.length ? e[0] : e));
		},
		s = { require: Promise.resolve(i) };
	self.define = (i, n, o) => {
		s[i] ||
			(s[i] = Promise.resolve().then(() => {
				let s = {};
				const a = { uri: location.origin + i.slice(1) };
				return Promise.all(
					n.map((i) => {
						switch (i) {
							case 'exports':
								return s;
							case 'module':
								return a;
							default:
								return e(i);
						}
					}),
				).then((e) => {
					const i = o(...e);
					return s.default || (s.default = i), s;
				});
			}));
	};
}
define('./sw.js', ['./workbox-21b21c9a'], function (e) {
	'use strict';
	importScripts(),
		self.skipWaiting(),
		e.clientsClaim(),
		e.precacheAndRoute(
			[
				{
					url: '/_next/static/-CGipOvw8UTWVD1Kfe6NH/_buildManifest.js',
					revision: '-CGipOvw8UTWVD1Kfe6NH',
				},
				{
					url: '/_next/static/-CGipOvw8UTWVD1Kfe6NH/_ssgManifest.js',
					revision: '-CGipOvw8UTWVD1Kfe6NH',
				},
				{
					url: '/_next/static/chunks/172-86520a72ae99b927fe20.js',
					revision: '-CGipOvw8UTWVD1Kfe6NH',
				},
				{
					url: '/_next/static/chunks/41-19002d58ce3ba5edaf57.js',
					revision: '-CGipOvw8UTWVD1Kfe6NH',
				},
				{
					url: '/_next/static/chunks/816.1ceffd53f675086c68ac.js',
					revision: '-CGipOvw8UTWVD1Kfe6NH',
				},
				{
					url: '/_next/static/chunks/framework-c93ed74a065331c4bd75.js',
					revision: '-CGipOvw8UTWVD1Kfe6NH',
				},
				{
					url: '/_next/static/chunks/main-93bb57c15cfb012a26dc.js',
					revision: '-CGipOvw8UTWVD1Kfe6NH',
				},
				{
					url: '/_next/static/chunks/pages/404-ddda943fe9ca3c22bb38.js',
					revision: '-CGipOvw8UTWVD1Kfe6NH',
				},
				{
					url: '/_next/static/chunks/pages/_app-f620141244401f60b90b.js',
					revision: '-CGipOvw8UTWVD1Kfe6NH',
				},
				{
					url: '/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js',
					revision: '-CGipOvw8UTWVD1Kfe6NH',
				},
				{
					url: '/_next/static/chunks/pages/about-d8666ac8fe6b33c598a3.js',
					revision: '-CGipOvw8UTWVD1Kfe6NH',
				},
				{
					url: '/_next/static/chunks/pages/index-b35a6770f9190def3276.js',
					revision: '-CGipOvw8UTWVD1Kfe6NH',
				},
				{
					url: '/_next/static/chunks/pages/portfolio-8cbc6e9d3dbff37618af.js',
					revision: '-CGipOvw8UTWVD1Kfe6NH',
				},
				{
					url: '/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js',
					revision: '-CGipOvw8UTWVD1Kfe6NH',
				},
				{
					url: '/_next/static/chunks/webpack-a11402cbfb0e6ceaa2b7.js',
					revision: '-CGipOvw8UTWVD1Kfe6NH',
				},
				{
					url: '/_next/static/css/3bb64badf9c37aa7ddbb.css',
					revision: '-CGipOvw8UTWVD1Kfe6NH',
				},
				{
					url: '/_next/static/image/assets/logos/Threejs.34faec932f70929fc2778eaf26de073c.svg',
					revision: '-CGipOvw8UTWVD1Kfe6NH',
				},
				{
					url: '/_next/static/image/assets/logos/antd.134e60e1a9ccebac18bd758ebd7dd2b1.svg',
					revision: '-CGipOvw8UTWVD1Kfe6NH',
				},
				{
					url: '/_next/static/image/assets/logos/gsap-greensock.dff87e2debbe5d37479732018b2a575a.svg',
					revision: '-CGipOvw8UTWVD1Kfe6NH',
				},
				{
					url: '/_next/static/image/assets/logos/nestjs.0e0db7ab36375122424d2ba212efbb67.svg',
					revision: '-CGipOvw8UTWVD1Kfe6NH',
				},
				{
					url: '/_next/static/image/assets/logos/recoil.431f0ae1f6c31cd5f4c2af38d83363b1.svg',
					revision: '-CGipOvw8UTWVD1Kfe6NH',
				},
				{
					url: '/_next/static/image/assets/logos/styled-components.4556583bbab4e6fd51c084e1f40b8e79.svg',
					revision: '-CGipOvw8UTWVD1Kfe6NH',
				},
				{
					url: '/_next/static/image/assets/logos/vercel.87cbc3ae54216d27604d464ebe78eb6f.svg',
					revision: '-CGipOvw8UTWVD1Kfe6NH',
				},
				{ url: '/favicon.png', revision: '4f7c809f9a038e185a396b7e263e9e54' },
				{ url: '/flags/de.png', revision: 'a6e7e74ef8a37e177e2081091079371b' },
				{ url: '/flags/en.png', revision: '0cb53e72ddebfd3b8997ae00b27b611b' },
				{ url: '/flags/he.png', revision: '07c16928da82d6d703d7d036b6710778' },
				{
					url: '/icons/android/android-launchericon-144-144.png',
					revision: '7d864c79f8cc077631eda6a5afb1569b',
				},
				{
					url: '/icons/android/android-launchericon-192-192.png',
					revision: '189b795fcf2407cf92566bf5ca942dfb',
				},
				{
					url: '/icons/android/android-launchericon-48-48.png',
					revision: '9edddaf591348967436fe19707ff4422',
				},
				{
					url: '/icons/android/android-launchericon-512-512.png',
					revision: 'a718ec770ab2fec35b264503473ebd92',
				},
				{
					url: '/icons/android/android-launchericon-72-72.png',
					revision: '991aedf72055d9c968bff020f67dc30f',
				},
				{
					url: '/icons/android/android-launchericon-96-96.png',
					revision: 'ef189ddf6bc51d2cd74d8abfdb9d5071',
				},
				{
					url: '/icons/apple/apple-touch-icon-180x180.png',
					revision: '0e2f503361d36cfdf4abc9eabd5dd029',
				},
				{
					url: '/icons/chrome/chrome-extensionmanagementpage-48-48.png',
					revision: '9edddaf591348967436fe19707ff4422',
				},
				{
					url: '/icons/chrome/chrome-favicon-16-16.png',
					revision: '163b3ed6d061b84d0861704c11166119',
				},
				{
					url: '/icons/chrome/chrome-installprocess-128-128.png',
					revision: '57ba7664f0eda884ab416b79e01acb7f',
				},
				{
					url: '/icons/firefox/firefox-general-128-128.png',
					revision: '57ba7664f0eda884ab416b79e01acb7f',
				},
				{
					url: '/icons/firefox/firefox-general-16-16.png',
					revision: '163b3ed6d061b84d0861704c11166119',
				},
				{
					url: '/icons/firefox/firefox-general-256-256.png',
					revision: '03af2d2a793bf56ae0bfce32f3f8227a',
				},
				{
					url: '/icons/firefox/firefox-general-32-32.png',
					revision: '927f730734a9503db51251d5eb19cb79',
				},
				{
					url: '/icons/firefox/firefox-general-48-48.png',
					revision: '9edddaf591348967436fe19707ff4422',
				},
				{
					url: '/icons/firefox/firefox-general-64-64.png',
					revision: '15e212d31549e0fd5d115c26c1a35a1c',
				},
				{
					url: '/icons/firefox/firefox-general-90-90.png',
					revision: '138243a989447562ecfda5c8b5073e14',
				},
				{
					url: '/icons/firefox/firefox-marketplace-128-128.png',
					revision: '57ba7664f0eda884ab416b79e01acb7f',
				},
				{
					url: '/icons/firefox/firefox-marketplace-512-512.png',
					revision: 'a718ec770ab2fec35b264503473ebd92',
				},
				{
					url: '/icons/msteams/msteams-192-192.png',
					revision: '189b795fcf2407cf92566bf5ca942dfb',
				},
				{
					url: '/icons/msteams/msteams-silhouette-32-32.png',
					revision: '927f730734a9503db51251d5eb19cb79',
				},
				{
					url: '/icons/windows10/LargeTile.scale-100.png',
					revision: '50f66fe9ed3313cdf9514bd5dd313a91',
				},
				{
					url: '/icons/windows10/LargeTile.scale-125.png',
					revision: '56a69c2d6d18e90897bdef401776ea72',
				},
				{
					url: '/icons/windows10/LargeTile.scale-150.png',
					revision: '62f95dccc37e91d21bbbe8ff137c4b07',
				},
				{
					url: '/icons/windows10/LargeTile.scale-200.png',
					revision: 'dd43e9eba955258eaee0da2e63c1a559',
				},
				{
					url: '/icons/windows10/LargeTile.scale-400.png',
					revision: '81fbded4615fb49c4005d03edcaed202',
				},
				{
					url: '/icons/windows10/SmallTile.scale-100.png',
					revision: '9fd3b873ca5cdc0f51ea5b960b94cdf7',
				},
				{
					url: '/icons/windows10/SmallTile.scale-125.png',
					revision: '02baa43c9f460f4f2af8bdb9c9181b79',
				},
				{
					url: '/icons/windows10/SmallTile.scale-150.png',
					revision: 'f39af91fdd9d77d68217d2b652da0171',
				},
				{
					url: '/icons/windows10/SmallTile.scale-200.png',
					revision: 'bb4694db71b4a2ec1b406db2c1be8027',
				},
				{
					url: '/icons/windows10/SmallTile.scale-400.png',
					revision: '4d90ac2e7767d9be52469f23658c51ca',
				},
				{
					url: '/icons/windows10/SplashScreen.scale-100.png',
					revision: '5318ace32041d3c66f2e4ebd4b09d669',
				},
				{
					url: '/icons/windows10/SplashScreen.scale-125.png',
					revision: 'beda9325517d791fdf7d7cad58784f69',
				},
				{
					url: '/icons/windows10/SplashScreen.scale-150.png',
					revision: '21d95878dbd1aaea6b775e1637ada208',
				},
				{
					url: '/icons/windows10/SplashScreen.scale-200.png',
					revision: '5b843111bdf850c5b6df056679978b7f',
				},
				{
					url: '/icons/windows10/SplashScreen.scale-400.png',
					revision: '9630f25270e760d0721a826e73150f5a',
				},
				{
					url: '/icons/windows10/Square150x150Logo.scale-100.png',
					revision: '4e39907866db995448a0e5ea84900020',
				},
				{
					url: '/icons/windows10/Square150x150Logo.scale-125.png',
					revision: '9edc3f326d9b1ee908805b04ff58d4c7',
				},
				{
					url: '/icons/windows10/Square150x150Logo.scale-150.png',
					revision: '0d95ef6f3597a1a4d64e5c02467d7598',
				},
				{
					url: '/icons/windows10/Square150x150Logo.scale-200.png',
					revision: 'edd7914b4bd1baa1206e6151dc745e49',
				},
				{
					url: '/icons/windows10/Square150x150Logo.scale-400.png',
					revision: '771495cd28f9a30d0c4887c7a88e2823',
				},
				{
					url: '/icons/windows10/Square44x44Logo.altform-lightunplated_targetsize-16.png',
					revision: '163b3ed6d061b84d0861704c11166119',
				},
				{
					url: '/icons/windows10/Square44x44Logo.altform-lightunplated_targetsize-20.png',
					revision: 'f5ae15c9527b8d036cdf83f63aaf850f',
				},
				{
					url: '/icons/windows10/Square44x44Logo.altform-lightunplated_targetsize-24.png',
					revision: 'd2b4cee475cc779623cf5b3f79a8bdf0',
				},
				{
					url: '/icons/windows10/Square44x44Logo.altform-lightunplated_targetsize-256.png',
					revision: '03af2d2a793bf56ae0bfce32f3f8227a',
				},
				{
					url: '/icons/windows10/Square44x44Logo.altform-lightunplated_targetsize-30.png',
					revision: '654a7fabb59f8a2f817b811fac06278a',
				},
				{
					url: '/icons/windows10/Square44x44Logo.altform-lightunplated_targetsize-32.png',
					revision: '927f730734a9503db51251d5eb19cb79',
				},
				{
					url: '/icons/windows10/Square44x44Logo.altform-lightunplated_targetsize-36.png',
					revision: '14bd81391dfad1bc09470758982002f9',
				},
				{
					url: '/icons/windows10/Square44x44Logo.altform-lightunplated_targetsize-40.png',
					revision: 'e4b97985f1a0d2b03b300567197a2e25',
				},
				{
					url: '/icons/windows10/Square44x44Logo.altform-lightunplated_targetsize-44.png',
					revision: '801a541c1662e19f19d2d7f839cc1d09',
				},
				{
					url: '/icons/windows10/Square44x44Logo.altform-lightunplated_targetsize-48.png',
					revision: '9edddaf591348967436fe19707ff4422',
				},
				{
					url: '/icons/windows10/Square44x44Logo.altform-lightunplated_targetsize-60.png',
					revision: 'd4e80847cb91d45ca36ef7b069cfbbe2',
				},
				{
					url: '/icons/windows10/Square44x44Logo.altform-lightunplated_targetsize-64.png',
					revision: '15e212d31549e0fd5d115c26c1a35a1c',
				},
				{
					url: '/icons/windows10/Square44x44Logo.altform-lightunplated_targetsize-72.png',
					revision: '991aedf72055d9c968bff020f67dc30f',
				},
				{
					url: '/icons/windows10/Square44x44Logo.altform-lightunplated_targetsize-80.png',
					revision: '035c15fe04f053fdaaee204a849322d1',
				},
				{
					url: '/icons/windows10/Square44x44Logo.altform-lightunplated_targetsize-96.png',
					revision: 'ef189ddf6bc51d2cd74d8abfdb9d5071',
				},
				{
					url: '/icons/windows10/Square44x44Logo.altform-unplated_targetsize-16.png',
					revision: '163b3ed6d061b84d0861704c11166119',
				},
				{
					url: '/icons/windows10/Square44x44Logo.altform-unplated_targetsize-20.png',
					revision: 'f5ae15c9527b8d036cdf83f63aaf850f',
				},
				{
					url: '/icons/windows10/Square44x44Logo.altform-unplated_targetsize-24.png',
					revision: 'd2b4cee475cc779623cf5b3f79a8bdf0',
				},
				{
					url: '/icons/windows10/Square44x44Logo.altform-unplated_targetsize-256.png',
					revision: '03af2d2a793bf56ae0bfce32f3f8227a',
				},
				{
					url: '/icons/windows10/Square44x44Logo.altform-unplated_targetsize-30.png',
					revision: '654a7fabb59f8a2f817b811fac06278a',
				},
				{
					url: '/icons/windows10/Square44x44Logo.altform-unplated_targetsize-32.png',
					revision: '927f730734a9503db51251d5eb19cb79',
				},
				{
					url: '/icons/windows10/Square44x44Logo.altform-unplated_targetsize-36.png',
					revision: '14bd81391dfad1bc09470758982002f9',
				},
				{
					url: '/icons/windows10/Square44x44Logo.altform-unplated_targetsize-40.png',
					revision: 'e4b97985f1a0d2b03b300567197a2e25',
				},
				{
					url: '/icons/windows10/Square44x44Logo.altform-unplated_targetsize-44.png',
					revision: '801a541c1662e19f19d2d7f839cc1d09',
				},
				{
					url: '/icons/windows10/Square44x44Logo.altform-unplated_targetsize-48.png',
					revision: '9edddaf591348967436fe19707ff4422',
				},
				{
					url: '/icons/windows10/Square44x44Logo.altform-unplated_targetsize-60.png',
					revision: 'd4e80847cb91d45ca36ef7b069cfbbe2',
				},
				{
					url: '/icons/windows10/Square44x44Logo.altform-unplated_targetsize-64.png',
					revision: '15e212d31549e0fd5d115c26c1a35a1c',
				},
				{
					url: '/icons/windows10/Square44x44Logo.altform-unplated_targetsize-72.png',
					revision: '991aedf72055d9c968bff020f67dc30f',
				},
				{
					url: '/icons/windows10/Square44x44Logo.altform-unplated_targetsize-80.png',
					revision: '035c15fe04f053fdaaee204a849322d1',
				},
				{
					url: '/icons/windows10/Square44x44Logo.altform-unplated_targetsize-96.png',
					revision: 'ef189ddf6bc51d2cd74d8abfdb9d5071',
				},
				{
					url: '/icons/windows10/Square44x44Logo.scale-100.png',
					revision: '801a541c1662e19f19d2d7f839cc1d09',
				},
				{
					url: '/icons/windows10/Square44x44Logo.scale-125.png',
					revision: 'ae2848637c1f4b9f43a392cc2effd789',
				},
				{
					url: '/icons/windows10/Square44x44Logo.scale-150.png',
					revision: '5bbd57ce6c7c5e32817e30e03d822cc8',
				},
				{
					url: '/icons/windows10/Square44x44Logo.scale-200.png',
					revision: 'dd2c98b9783dcb375987c3e4a8035ef3',
				},
				{
					url: '/icons/windows10/Square44x44Logo.scale-400.png',
					revision: 'c45bb4d73f3512d7c9150597822896e2',
				},
				{
					url: '/icons/windows10/Square44x44Logo.targetsize-16.png',
					revision: '163b3ed6d061b84d0861704c11166119',
				},
				{
					url: '/icons/windows10/Square44x44Logo.targetsize-20.png',
					revision: 'f5ae15c9527b8d036cdf83f63aaf850f',
				},
				{
					url: '/icons/windows10/Square44x44Logo.targetsize-24.png',
					revision: 'd2b4cee475cc779623cf5b3f79a8bdf0',
				},
				{
					url: '/icons/windows10/Square44x44Logo.targetsize-256.png',
					revision: '03af2d2a793bf56ae0bfce32f3f8227a',
				},
				{
					url: '/icons/windows10/Square44x44Logo.targetsize-30.png',
					revision: '654a7fabb59f8a2f817b811fac06278a',
				},
				{
					url: '/icons/windows10/Square44x44Logo.targetsize-32.png',
					revision: '927f730734a9503db51251d5eb19cb79',
				},
				{
					url: '/icons/windows10/Square44x44Logo.targetsize-36.png',
					revision: '14bd81391dfad1bc09470758982002f9',
				},
				{
					url: '/icons/windows10/Square44x44Logo.targetsize-40.png',
					revision: 'e4b97985f1a0d2b03b300567197a2e25',
				},
				{
					url: '/icons/windows10/Square44x44Logo.targetsize-44.png',
					revision: '801a541c1662e19f19d2d7f839cc1d09',
				},
				{
					url: '/icons/windows10/Square44x44Logo.targetsize-48.png',
					revision: '9edddaf591348967436fe19707ff4422',
				},
				{
					url: '/icons/windows10/Square44x44Logo.targetsize-60.png',
					revision: 'd4e80847cb91d45ca36ef7b069cfbbe2',
				},
				{
					url: '/icons/windows10/Square44x44Logo.targetsize-64.png',
					revision: '15e212d31549e0fd5d115c26c1a35a1c',
				},
				{
					url: '/icons/windows10/Square44x44Logo.targetsize-72.png',
					revision: '991aedf72055d9c968bff020f67dc30f',
				},
				{
					url: '/icons/windows10/Square44x44Logo.targetsize-80.png',
					revision: '035c15fe04f053fdaaee204a849322d1',
				},
				{
					url: '/icons/windows10/Square44x44Logo.targetsize-96.png',
					revision: 'ef189ddf6bc51d2cd74d8abfdb9d5071',
				},
				{
					url: '/icons/windows10/StoreLogo.scale-100.png',
					revision: 'e4056b752ee091b422709a2bfd1dfaf3',
				},
				{
					url: '/icons/windows10/StoreLogo.scale-125.png',
					revision: '895f0d76490671513a1fb6a590a1b2a6',
				},
				{
					url: '/icons/windows10/StoreLogo.scale-150.png',
					revision: '2e768596153ce9d6f5e844d029a37b7e',
				},
				{
					url: '/icons/windows10/StoreLogo.scale-200.png',
					revision: '9629a50851fe5ffd8bc646390755c8b3',
				},
				{
					url: '/icons/windows10/StoreLogo.scale-400.png',
					revision: '962e73d1f123431431f3a5ad8cbad77d',
				},
				{
					url: '/icons/windows10/Wide310x150Logo.scale-100.png',
					revision: '6f824d73e29be3016b282b9d17346a6d',
				},
				{
					url: '/icons/windows10/Wide310x150Logo.scale-125.png',
					revision: 'd726f1f5f67f6c0690f4af4ea915ded2',
				},
				{
					url: '/icons/windows10/Wide310x150Logo.scale-150.png',
					revision: 'bbaae0f750705d2bc9e4f493b7095169',
				},
				{
					url: '/icons/windows10/Wide310x150Logo.scale-200.png',
					revision: '5318ace32041d3c66f2e4ebd4b09d669',
				},
				{
					url: '/icons/windows10/Wide310x150Logo.scale-400.png',
					revision: '5b843111bdf850c5b6df056679978b7f',
				},
				{
					url: '/locales/de/about.json',
					revision: 'ca5beb701c66fab4139ef5585f5eb227',
				},
				{
					url: '/locales/de/blog.json',
					revision: 'c46b079eadfa30254a279782f5742fea',
				},
				{
					url: '/locales/de/common.json',
					revision: '427f71a705b7532af13aae1b41d9f133',
				},
				{
					url: '/locales/de/footer.json',
					revision: '576d9ce332f922eec0098c445a6a7251',
				},
				{
					url: '/locales/de/fourZeroFour.json',
					revision: '2be1755425e339851480e93535b25e48',
				},
				{
					url: '/locales/de/navigation.json',
					revision: '4adf7b5c25effeec61feaffe6e771e99',
				},
				{
					url: '/locales/de/portfolio.json',
					revision: '3a63523f1281f61503526054b405cfc6',
				},
				{
					url: '/locales/en/about.json',
					revision: '659bcaaa307cfcb2ca21bc82f25e3bb3',
				},
				{
					url: '/locales/en/blog.json',
					revision: 'c46b079eadfa30254a279782f5742fea',
				},
				{
					url: '/locales/en/common.json',
					revision: '5f0db0a5329f98a52a1f3257778a1568',
				},
				{
					url: '/locales/en/footer.json',
					revision: '7ddd1f0ec961666c2d347867e1c71378',
				},
				{
					url: '/locales/en/fourZeroFour.json',
					revision: '1cdbe7d1c95eedc355e308299a304cd2',
				},
				{
					url: '/locales/en/navigation.json',
					revision: '277a4127faec3ec230251151afa24648',
				},
				{
					url: '/locales/en/portfolio.json',
					revision: '6debfef1ea5e1664bc559982679a0c5e',
				},
				{ url: '/logo.png', revision: '5843db6bccaf675c1363a8626722877e' },
				{ url: '/manifest.json', revision: '24e46a8bd9ea8df5cadc9ab574438d90' },
				{ url: '/vercel.svg', revision: '4b4f1876502eb6721764637fe5c41702' },
			],
			{ ignoreURLParametersMatching: [] },
		),
		e.cleanupOutdatedCaches(),
		e.registerRoute(
			'/',
			new e.NetworkFirst({
				cacheName: 'start-url',
				plugins: [
					{
						cacheWillUpdate: async ({
							request: e,
							response: i,
							event: s,
							state: n,
						}) =>
							i && 'opaqueredirect' === i.type
								? new Response(i.body, {
										status: 200,
										statusText: 'OK',
										headers: i.headers,
								  })
								: i,
					},
				],
			}),
			'GET',
		),
		e.registerRoute(
			/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
			new e.CacheFirst({
				cacheName: 'google-fonts-webfonts',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
				],
			}),
			'GET',
		),
		e.registerRoute(
			/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
			new e.StaleWhileRevalidate({
				cacheName: 'google-fonts-stylesheets',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
				],
			}),
			'GET',
		),
		e.registerRoute(
			/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-font-assets',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
				],
			}),
			'GET',
		),
		e.registerRoute(
			/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-image-assets',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
				],
			}),
			'GET',
		),
		e.registerRoute(
			/\/_next\/image\?url=.+$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'next-image',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
				],
			}),
			'GET',
		),
		e.registerRoute(
			/\.(?:mp3|wav|ogg)$/i,
			new e.CacheFirst({
				cacheName: 'static-audio-assets',
				plugins: [
					new e.RangeRequestsPlugin(),
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			'GET',
		),
		e.registerRoute(
			/\.(?:mp4)$/i,
			new e.CacheFirst({
				cacheName: 'static-video-assets',
				plugins: [
					new e.RangeRequestsPlugin(),
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			'GET',
		),
		e.registerRoute(
			/\.(?:js)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-js-assets',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			'GET',
		),
		e.registerRoute(
			/\.(?:css|less)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-style-assets',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			'GET',
		),
		e.registerRoute(
			/\/_next\/data\/.+\/.+\.json$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'next-data',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			'GET',
		),
		e.registerRoute(
			/\.(?:json|xml|csv)$/i,
			new e.NetworkFirst({
				cacheName: 'static-data-assets',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			'GET',
		),
		e.registerRoute(
			({ url: e }) => {
				if (!(self.origin === e.origin)) return !1;
				const i = e.pathname;
				return !i.startsWith('/api/auth/') && !!i.startsWith('/api/');
			},
			new e.NetworkFirst({
				cacheName: 'apis',
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
				],
			}),
			'GET',
		),
		e.registerRoute(
			({ url: e }) => {
				if (!(self.origin === e.origin)) return !1;
				return !e.pathname.startsWith('/api/');
			},
			new e.NetworkFirst({
				cacheName: 'others',
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			'GET',
		),
		e.registerRoute(
			({ url: e }) => !(self.origin === e.origin),
			new e.NetworkFirst({
				cacheName: 'cross-origin',
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
				],
			}),
			'GET',
		);
});
