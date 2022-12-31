jQuery(document).ready(function( $ ) {

	// Menu settings
  var initgnMenu = new gnMenu(document.getElementById('gn-menu'));

  // Carousel
  $('.carousel').carousel({
    interval: 5500
  })

	// Smooth scroll for the menu and links with .scrollto classes
  $('.smoothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 30
        }, 1500, 'easeInOutExpo');
        initgnMenu._closeMenu();
      }
    }
  });

  // Charts
  if($('#canvas').length) {

		var doughnutData = [{
        value: 60,
        color: "#3bc492"
      },
      {
        value: 40,
        color: "#ecf0f1"
      }
    ];
    var myDoughnut = new Chart(document.getElementById("canvas").getContext("2d")).Doughnut(doughnutData);
	};

	if($('#canvas1').length) {
		var doughnutData = [{
				value: 75,
				color: "#3bc492"
			},
			{
				value: 25,
				color: "#ecf0f1"
			}
		];
		var myDoughnut = new Chart(document.getElementById("canvas1").getContext("2d")).Doughnut(doughnutData);
	}

	if($('#canvas2').length) {
		var doughnutData = [{
				value: 80,
				color: "#3bc492"
			},
			{
				value: 20,
				color: "#ecf0f1"
			}
		];
		var myDoughnut = new Chart(document.getElementById("canvas2").getContext("2d")).Doughnut(doughnutData);
  }
  
  if ($('#canvas4').length) {
    var doughnutData = [{
      value: 85,
      color: "#3bc492"
    },
    {
      value: 15,
      color: "#ecf0f1"
    }
    ];
    var myDoughnut = new Chart(document.getElementById("canvas4").getContext("2d")).Doughnut(doughnutData);
  }

  if ($('#canvas5').length) {
    var doughnutData = [{
      value: 80,
      color: "#3bc492"
    },
    {
      value: 20,
      color: "#ecf0f1"
    }
    ];
    var myDoughnut = new Chart(document.getElementById("canvas5").getContext("2d")).Doughnut(doughnutData);
  }

  if ($('#canvas6').length) {
    var doughnutData = [{
      value: 60,
      color: "#3bc492"
    },
    {
      value: 40,
      color: "#ecf0f1"
    }
    ];
    var myDoughnut = new Chart(document.getElementById("canvas6").getContext("2d")).Doughnut(doughnutData);
  } 

  if ($('#canvas7').length) {
    var doughnutData = [{
      value: 80,
      color: "#3bc492"
    },
    {
      value: 20,
      color: "#ecf0f1"
    }
    ];
    var myDoughnut = new Chart(document.getElementById("canvas7").getContext("2d")).Doughnut(doughnutData);
  }

  if ($('#canvas8').length) {
    var doughnutData = [{
      value: 90,
      color: "#3bc492"
    },
    {
      value: 10,
      color: "#ecf0f1"
    }
    ];
    var myDoughnut = new Chart(document.getElementById("canvas8").getContext("2d")).Doughnut(doughnutData);
  }

  if ($('#canvas9').length) {
    var doughnutData = [{
      value: 50,
      color: "#3bc492"
    },
    {
      value: 50,
      color: "#ecf0f1"
    }
    ];
    var myDoughnut = new Chart(document.getElementById("canvas9").getContext("2d")).Doughnut(doughnutData);
  }
});
