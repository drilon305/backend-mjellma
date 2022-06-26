module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  cron: { enabled: true},
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '065436df64af4a6840a9bb99fc26d145'),
    },
  },
});
