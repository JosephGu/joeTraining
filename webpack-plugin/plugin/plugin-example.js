module.exports = class HelloWorldPlugin {
    apply(compiler) {
        compiler.hooks.emit.tapAsync(
            'HelloWorldPlugin',
            (compilation, callback) => {
                console.log('Thanks for using this plugin'),
                    callback();
            }

        )
    }
}

