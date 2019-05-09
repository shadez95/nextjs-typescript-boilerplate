module.exports = api => {
  api.cache(true);
  return {
    presets: ["next/babel", "@zeit/next-typescript/babel"],
    plugins: [
      "@babel/proposal-class-properties",
      "@babel/prop",
      "@babel/propoosal-object-rest-spread",
      [
        "transform-define",
        {
          "process.env.NODE_ENV": process.env.NODE_ENV
        }
      ]
    ]
  };
};
