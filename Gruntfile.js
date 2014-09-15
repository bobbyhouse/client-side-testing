module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        clean: ['_SpecRunner.html'],

        jasmine: {
            taskName: {
                options: {
                    outfile: '_SpecRunner.html',
                    keepRunner: true,
                    specs: 'spec/**/*.js',
                    template: require('grunt-template-jasmine-requirejs')
                }
            }
        },

        watch: {
            scripts: {
                files: ['js/**/*.js', 'spec/**/*.js'],
                tasks: ['test']
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('test', ['jasmine']);
};
