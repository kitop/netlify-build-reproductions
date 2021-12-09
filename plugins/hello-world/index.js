module.exports = {
  onPreBuild: (config) => {
    console.log(process.env.BUILD_ID);
    console.log(process.env.DEPLOY_ID);
    console.log(process.env.DEPLOY_PRIME_URL);
    console.log(process.env.DEPLOY_URL);

    console.log(config);
  },
};
