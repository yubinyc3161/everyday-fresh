module.exports = {
    css: {
      loaderOptions: {
        less: {
          lessOptions: {
            // If you are using less-loader@5 please spread the lessOptions to options directly
            modifyVars: {
              'primary-color': '#36cfc9',
              'link-color': '#36cfc9',
              'border-radius-base': '2px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  };