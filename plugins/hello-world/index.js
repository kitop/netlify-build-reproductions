module.exports = {
  onPreBuild: ({
    netlifyConfig: {
      build: { environment },
    },
  }) => {
    console.log('BUILD_ID: ', process.env.BUILD_ID);
    console.log('DEPLOY_ID: ', process.env.DEPLOY_ID);
    console.log('DEPLOY_PRIME_URL: ', process.env.DEPLOY_PRIME_URL);
    console.log('DEPLOY_URL: ', process.env.DEPLOY_URL);

    console.log(environment);
  },
};
