const { getDefaultConfig } = require("metro-config");
const exclusionList = require('metro-config/src/defaults/exclusionList');
module.exports = (async () => {
  const {
    resolver: {
      sourceExts,
    },

  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-css-transformer"),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
    resolver: {
      sourceExts: [...sourceExts, "css"],
      blacklistRE: exclusionList([/#current-cloud-backend\/.*/]),
    },
  };
})();