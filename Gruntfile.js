module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        protractor: {
            options: {
                configFile: 'protractor.conf.js',
                keepAlive: true,
                args: {
                    // Arguments passed to the command
                }
            },
            run: {}
        },
        devserver: {
            run: {
                options: {
                    port: 9010,
                    base: './app/.'
                }
            }
        }
    });

    grunt.registerTask('test', ['protractor:run']);
    grunt.registerTask('run', ['devserver:run']);
};
