/***********************
***** LINE CHARTS ******
***********************/
let hourlyTrafficGraph = $("#hourly-traffic")
let weeklyTrafficGraph = $("#weekly-traffic");
let dailyTrafficGraph = $("#daily-traffic")
let monthlyTrafficGraph = $("#monthly-traffic");

//Hourly
function showHourly() {
	graphHolders.hide();
	$(graphHolders[0]).show();
	let hourlyChart = new Chart(hourlyTrafficGraph, {
	    type: 'line',
	    data: {
	        labels: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
	        datasets: [{
	            label: 'Visitors',
	            data: [0, 0, 0, 0, 10, 50, 50, 70, 20, 100, 20, 24, 11, 50, 11, 15, 40, 120, 10, 111, 102, 40, 23, 25, 11, 0],
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(255, 206, 86, 0.2)',
	                'rgba(75, 192, 192, 0.2)',
	                'rgba(153, 102, 255, 0.2)',
	                'rgba(255, 159, 64, 0.2)'
	            ],
	            borderColor: [
	                'rgba(255,99,132,1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(255, 206, 86, 1)',
	                'rgba(75, 192, 192, 1)',
	                'rgba(153, 102, 255, 1)',
	                'rgba(255, 159, 64, 1)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:true
	                }
	            }]
	        }
	    }
	});
}
//Daily
function showDaily () {
	graphHolders.hide();
	$(graphHolders[1]).show();
	let dailyChart = new Chart(dailyTrafficGraph, {
	    type: 'line',
	    data: {
	        labels: ["M", "T", "W", "T", "F", "L", "S"],
	        datasets: [{
	            label: 'Visitors',
	            data: [0, 100, 150, 80, 300, 200, 20],
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(255, 206, 86, 0.2)',
	                'rgba(75, 192, 192, 0.2)',
	                'rgba(153, 102, 255, 0.2)',
	                'rgba(255, 159, 64, 0.2)'
	            ],
	            borderColor: [
	                'rgba(255,99,132,1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(255, 206, 86, 1)',
	                'rgba(75, 192, 192, 1)',
	                'rgba(153, 102, 255, 1)',
	                'rgba(255, 159, 64, 1)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:true
	                }
	            }]
	        }
	    }
	});
}
//weekly
function showWeekly () {
	graphHolders.hide();
	$(graphHolders[2]).show();
	let weeklyChart = new Chart(weeklyTrafficGraph, {
	    type: 'line',
	    data: {
	        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
	        datasets: [{
	            label: 'Visitors',
	            data: [0, 500, 1250, 800, 1800, 1900, 2000, 2500, 2600, 2400, 2500],
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(255, 206, 86, 0.2)',
	                'rgba(75, 192, 192, 0.2)',
	                'rgba(153, 102, 255, 0.2)',
	                'rgba(255, 159, 64, 0.2)'
	            ],
	            borderColor: [
	                'rgba(255,99,132,1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(255, 206, 86, 1)',
	                'rgba(75, 192, 192, 1)',
	                'rgba(153, 102, 255, 1)',
	                'rgba(255, 159, 64, 1)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:true
	                }
	            }]
	        }
	    }
	});
}
//monthly
function showMonthly () {
	graphHolders.hide();
	$(graphHolders[3]).show();
	let monthlyChart = new Chart(monthlyTrafficGraph, {
	    type: 'line',
	    data: {
	        labels: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
	        datasets: [{
	            label: 'Visitors',
	            data: [8000, 8330, 8440, 8320, 9490, 9944, 8300, 8500, 9340, 8284, 9944, 9934],
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(255, 206, 86, 0.2)',
	                'rgba(75, 192, 192, 0.2)',
	                'rgba(153, 102, 255, 0.2)',
	                'rgba(255, 159, 64, 0.2)'
	            ],
	            borderColor: [
	                'rgba(255,99,132,1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(255, 206, 86, 1)',
	                'rgba(75, 192, 192, 1)',
	                'rgba(153, 102, 255, 1)',
	                'rgba(255, 159, 64, 1)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:true
	                }
	            }]
	        }
	    }
	});
}

//get all the options
const allOptions = $('.graph-nav ul li');
//get the defualt option
let selectedOption = $('.graph-nav ul li.active');
//get the graph-holders
const graphHolders = $('.line-chart-holder');
//toggle the selected graph
function toggleGraphs(selectedOption) {
	if (selectedOption.text() === 'Hourly') {
		showHourly();
	} else if (selectedOption.text() === 'Daily') {
		showDaily();
	} else if (selectedOption.text() === 'Weekly') {
		showWeekly();
	} else if (selectedOption.text() === 'Monthly') {
		showMonthly();
	}
}
toggleGraphs(selectedOption);
//when one of the options is clicked do stuff
allOptions.on( "click", function() {
  SelectedOption = $(this);
  findGraph(SelectedOption);
});

function findGraph (SelectedOption) {
	//Get the li with the active class
	let selectedOption = $('.graph-nav ul li.active');
	//remove class from li
	selectedOption.removeClass('active');
	SelectedOption.addClass('active');
	//toggle the graph
	toggleGraphs(SelectedOption);
}

/***********************
****** BAR CHARTS ******
***********************/

 let dailyTrafficBarCanvas = $('#daily-traffic-bar');
 let dailyTrafficBar = new Chart(dailyTrafficBarCanvas, {
 	type: 'bar',
 	data: {
 		labels: ['M', 'T', 'W', 'T', 'F', 'L', 'S'],
 		datasets: [{
 			label: 'Visitors',
 			data: [100, 158, 302, 284, 192, 485, 103],
 			backgroundColor: [
 				'#7477bf',
 				'#7477bf',
 				'#7477bf',
 				'#7477bf',
 				'#7477bf',
 				'#7477bf',
 				'#7477bf'
 			],
 			options: {
 				scales: {
 					yAxes: [{
 						ticks: {
 							beginAtZero: 'true'
 						}
 					}]
 				}
 			}
 		}]
 	}
 });

 /**********************
 ***** DONUT CHART *****
 **********************/
let donutCanvas = $('#mobile-users-donut');
let mobileUsersDonutChart = new Chart(
	donutCanvas, {
 	type: 'doughnut',
 	data: {
 		labels: ['Phones', 'Tablets', 'Desktops', 'Other'],
 		datasets: [{
 			label: 'Mobile Users',
 			data: [2033, 304, 1404, 120],
 			backgroundColor: [
 				'#7477bf',
 				'tomato',
 				'green',
 				'orange'
 			],
 		}]
 	}
 });
