
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolioIman/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-SUN77FE3.js"
    ],
    "route": "/portfolioIman"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MFN573ZS.js"
    ],
    "route": "/portfolioIman/skills"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3TIPMD3P.js"
    ],
    "route": "/portfolioIman/projects"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HBCV7ILX.js"
    ],
    "route": "/portfolioIman/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NKTQWT7P.js"
    ],
    "route": "/portfolioIman/header"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZEMCBY4O.js"
    ],
    "route": "/portfolioIman/hero"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SUN77FE3.js"
    ],
    "route": "/portfolioIman/about"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 657, hash: '2c6d8fe473f81e8e686b15a36947330b735dbb04adf8eb5e1d267cda7ebae778', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1170, hash: 'ed2e7f55352009eaa3220c6d3c4e258440b7b2c99656c833e93982e3d6e51e37', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 57654, hash: '2ad1e46ef75e66f971acf311a760f36055dbf342386ba9a4e62f1a3aab22441f', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'header/index.html': {size: 37105, hash: '07e3295c3808dc4586aca65fd55a3380dc85e5754eafff28597c04e3e7fbc0e1', text: () => import('./assets-chunks/header_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63010, hash: '9dd2871d8726e63d939adbabf47066615e9c094d041ad1f8e7cb7c5dd1144c17', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 56024, hash: '82b71b10d6c9d751779ffacad0809125bf4e664285a3791fc6522603d304cd15', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'hero/index.html': {size: 42385, hash: 'ece53c3b7458289a6616534bd67d76ffc56d5370e329c7c627a00e17e18b7e08', text: () => import('./assets-chunks/hero_index_html.mjs').then(m => m.default)},
    'index.html': {size: 57638, hash: 'f741f4d4f6ae31108facbb59e50b80f0a9b7c8e8f4ce589ede0a3ba21cf8419a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 66519, hash: 'f6652b6fd378ade59166118377a96bd6362fc17a99d3f180cb9cd91800daff7d', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
