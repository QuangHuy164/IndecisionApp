
module.exports = (api) => {
    api.cache(true);

    const presets = [ {
        "presets": [
            "@babel/preset-env",
            "@babel/preset-react",
        ]
    } ];
    const plugins = [ ];
  
    return {
      presets,
      plugins
    };
}