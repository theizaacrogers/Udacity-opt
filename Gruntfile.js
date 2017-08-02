module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-responsive-images');

	grunt.initConfig({
	  responsive_images: {
	    myTask: {
	      options: {
	      	//engine:'im',

	        sizes: [{
	          name: "small",
	          width: 320,
	          height: 240
	        },{
	          name: 'med',
	          width: 640
	        },{
	          name: "large",
	          width: 1024,
	          //suffix: "_x2",
	          //quality: 60
	        }]
	      },
	      files: [{
	        expand: true,
	        src: ['img/**.{jpg,gif,png}'],
	        //cwd: 'opt/',
	        dest: 'tmp'
	      }]
	    }
	  },
	})

	grunt.registerTask('default', ['responsive-images']);
};

