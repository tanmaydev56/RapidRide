// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = {
    resolver: {
      blacklistRE: /createBundleReleaseJsAndAssets\/index\.android\.bundle/,
    },
  };