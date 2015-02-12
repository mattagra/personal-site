app.controller('ProjectsCtrl', function() {
	
    this.tagline = "Things I've created in my free time.";

    this.projectsList = [
    	{ 
    		name: "SPCN Pre-Party 2015 Video", 
    		category: "Video", 
    		dev_period: "Jun 2015 - Aug 2015", 
    		description: "Promo video for UCLA Samahang Pilipino Cultural Night's clubbing fundraiser" 
    	},
    	{ 
			name: "Workout App", 
			category: "Code", 
			dev_period: "Nov 2014 - Jan 2015", 
			description: "Built REST API using PHP and MySQL that interacts with AngularJS front-end to display workout progress & metrics" 
		},
    	{ 
    		name: "SPCN Basics Video", 
    		category: "Video", 
	    	dev_period: "Sep 2014", 
	    	description: "Promo video for UCLA Samahang Pilino Cultural Night's cultural dance workshop" 
	    },
    	{ 
    		name: "SPCN Pre-Party 2014 Video", 
    		category: "Video", 
    		dev_period: "Jan 2014 - Feb 2014", 
    		description: "Promo video for UCLA Samahang Pilipino Cultural Night's clubbing fundraiser" 
    	},
    	{ 
    		name: "Beat Synchronized LED Lights", 
	    	category: "Code", 
	    	dev_period: "Jan 2013 - Jun 2013", 
	    	description: "Programmed LED lights to illuminate when triggered by low frequency audio data from computer speakers" 
	    },
    	{ 
			name: "Personal Site", 
			category: "Code", 
			dev_period: "Jun 2009 - present", 
			description: "My playground for the latest web technologies" 
		},
    	{ 
    		name: "Emulated Maplestory Game Server & Promotional Website", 
	    	category: "Code", 
	    	dev_period: "Jun 2007 - Dec 2007", 
	    	description: "Hosted 24/7 private game server from family desktop computer for ~50 daily users" 
	    },
	];

	function chunk(arr, size) {
	  var newArr = [];
	  for (var i=0; i<arr.length; i+=size) {
	    newArr.push(arr.slice(i, i+size));
	  }
	  return newArr;
	}

	this.chunkedProjectsList = chunk(this.projectsList, 3);

});