require.config({
    paths: {
        'jquery': '../../bower_components/jquery/dist/jquery.min',
        'underscore': '../../bower_components/underscore/underscore-min',
        'backbone': '../../bower_components/backbone/backbone',
        'text': '../../bower_components/text/text',
        'requirejs': '../../bower_components/requirejs/require'
    },

    shim: {
        'backbone': {
            deps: ['jquery', 'underscore']
        },
        'text': {
            deps: ['requirejs']
        }
    }
});

require(['app'], function (app){
    app.start();
});