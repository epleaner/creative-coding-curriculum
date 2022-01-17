module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/lessons',
        permanent: true
      }
    ];
  }
};
