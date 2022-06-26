module.exports = ({ env }) => (
    {
        email: {
            provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY'),
        },
         settings: {
      defaultFrom: 'drilonsl305@gmail.com',
      defaultReplyTo: 'navycrack1@gmail.com',
         },
    },
    })