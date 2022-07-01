module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  cron: { enabled: true},
  url: env('URL', `http://localhost${port !== '80' ? ':'+port : ''}`),
 admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '065436df64af4a6840a9bb99fc26d145'),
    },
  },
});
