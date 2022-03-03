module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '18fe01a73a739e6ebf533fbc9d0c093b'),
  },
});
