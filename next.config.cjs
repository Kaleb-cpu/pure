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

    env: {
      DB_USER: process.env.DB_USER,
      DB_PASSWORD: process.env.DB_PASSWORD,
      DB_SERVER: process.env.DB_SERVER,
      DB_DATABASE: process.env.DB_DATABASE,
  },
  };
  