// SideNav Initialization
$(".button-collapse").sideNav();
// SideNav Scrollbar Initialization
var sideNavScrollbar = document.querySelector('.custom-scrollbar');
var ps = new PerfectScrollbar(sideNavScrollbar);

$(document).ready(function () {
    $('.stepper').mdbStepper();
})

// Data Picker Initialization
$('.datepicker').pickadate({ selectYears: 100 });

