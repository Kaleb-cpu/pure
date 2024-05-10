// next.config.js

module.exports = {
    async headers() {
      return [
        {
          source: '/favicon.ico',
          headers: [
            {
              key: 'Link',
              value: '/favicon.ico; rel="icon"',
            },
          ],
        },
      ];
    },
  };
  