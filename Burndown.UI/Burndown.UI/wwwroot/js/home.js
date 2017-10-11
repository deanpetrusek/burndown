var lengthOfSprint = 10;

var data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    series: [
        {
            data: [1, 2, 3, 5, 8, 13]
        }
    ]
};

/* Set some base options (settings will override the default settings in Chartist.js *see default settings*). We are adding a basic label interpolation function for the xAxis labels. */
var options = {
    showPoint: false,
    axisX: {
        labelInterpolationFnc: function (value) {
            return 'Day of Sprint ' + value;
        }
    }
};

/* Initialize the chart with the above settings */
new Chartist.Line('#my-chart', data, options);