module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/img")
    eleventyConfig.addPassthroughCopy("./src/fonts");
    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};