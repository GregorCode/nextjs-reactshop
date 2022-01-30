const withPWA = require('next-pwa');
/* import runtimeCaching from 'next-pwa/cache'; */

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    mode: 'production',
    disable: false,
    /* runtimeCaching,
    buildExcludes: [/middleware-manifest\.json$/], */
  },
  reactStrictMode: true,
  images: {
    domains: ['placeimg.com'],
  },
});
