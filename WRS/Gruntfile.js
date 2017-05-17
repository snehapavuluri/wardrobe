module.exports = function (grunt) {

    var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    keepalive: true,
                    open: true,
                    middleware: function (connect, options, defaultMiddleware) {
                        return [proxySnippet].concat(defaultMiddleware);
                    }
                    
                },
                proxies: [{
                    context: '/wrs/services',
                    host: 'localhost',
                    port: 8080,
                    changeOrigin:true
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-connect-proxy');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', [
        'configureProxies:server',
        'connect:server']);

};