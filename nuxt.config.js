module.exports = {
  head: {
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1,maximum-scale=1.0, user-scalable=no',
      },
    ],
  },
  modules: ['@nuxtjs/style-resources', '@nuxtjs/svg'],
  plugins: ['~/plugins/lazyload.client.js', '~/plugins/in-view.client.js'],
  css: ['~/assets/scss/main.scss'],
  styleResources: {
    scss: ['~/assets/scss/vars.scss'],
  },
};
