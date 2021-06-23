module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
        @import "~@/assets/scss/colors"; 
        @import "~@/assets/scss/media"; 
        `,
      },
    },
  },
};
