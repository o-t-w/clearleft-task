module.exports = function (config) {

    // Copy the `assets` directory to the compiled site folder
    config.addPassthroughCopy('./src/assets');

    return {
        markdownTemplateEngine: 'hbs',
        dataTemplateEngine: 'hbs',
        htmlTemplateEngine: 'hbs',
        dir: {
            input: "src",
            output: "dist"
        },
        passthroughFileCopy: true
    };
}