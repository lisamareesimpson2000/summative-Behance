var Desname = ["matiascorea" , "lucaviola" , "raewynbrandon"];
var stats = [
    {
        "first_name": "" ,
        "followers": 653 ,
        "following": 7554,
        "appreciations": 13644,
        "views": 4509,
        "comments": 100
    },
    {
        "first_name": "" ,
        "followers": 755 ,
        "following": "",
        "appreciations": "",
        "views": "",
        "comments": ""
    },
    {
        "first_name": "" ,
        "followers": 554 ,
        "following": "",
        "appreciations": "",
        "views": "",
        "comments": ""
    }
];

var jlexi = 0;
for ( var ilexi = 0 ; ilexi < Desname.length; ilexi++) {
    
//const j=i;

$.ajax({
        
        dataType: 'jsonp',
        url: 'http://behance.net/v2/users/' + Desname[ilexi] + '?api_key=JoI9j5mk8tEfLB81PQeEMKhDSTjVNewT',
        type: 'GET',
        async: false,
        success: function (apiData) {
            console.log(apiData);
            console.log(apiData.user.first_name);
            console.log(apiData.user.stats.followers);
            // followers.push(apiData.user.stats.followers);
            // console.log(followers);
            stats[jlexi].first_name = apiData.user.first_name;
            stats[jlexi].followers = apiData.user.stats.followers;
            stats[jlexi].following = apiData.user.stats.following;
            stats[jlexi].appreciations = apiData.user.stats.appreciations;
            stats[jlexi].views = apiData.user.stats.views;
            stats[jlexi].comments = apiData.user.stats.comments;
            // return(apiData.user.stats.followers);
            // console.log(stats[j].first_name,stats[j].followers, stats[j].following, stats[j].appreciations, stats[j].views, stats[j].comments);
            // console.log(j);
    jlexi+=1;


        
            


        },
        error: function (error) {
            console.log(error);
            console.log('something has gone wrong');
        }
    });
}
google.charts.load('current', {'packages':['corechart', 'controls']
}).then (function(){
  $("#myModal").on('shown.bs.modal',function(){
    var data = new google.visualization.DataTable();
      data.addColumn('string','Name');
       data.addColumn('number','Followers');
       for (var ilexi = 0; ilexi < stats.length; ilexi++) {
          data.addRow([
                    stats[ilexi].first_name,
                    stats[ilexi].followers
                    ]);
          } //arraytodatatable
var options = {
title: 'behance followers',
chartArea:{
  left:80,
  'width': 500,
  'height': 300
},
pieSliceBorderColor:  '#b5d3dd',
};//options

var chart = new google.visualization.PieChart(document.getElementById('piechart'));

chart.draw(data, options);
singleDesigner();
})

})





function singleDesigner() {

    var data = google.visualization.arrayToDataTable([
        ['stats', 'number', { role: 'style' }],
        ['followers', stats[0].followers , '#b87333'],            // RGB value
        ['following', stats[0].following, 'silver'],            // English color name
        ['appreciations', stats[0].appreciations, 'gold'],
        ['comments', stats[0].comments, 'color: #e5e4e2' ], // CSS-style declaration
        ['views', stats[0].views, 'color: #000000']
     ]);


     var dashboard = new google.visualization.Dashboard(
        document.getElementById('dashboard_div'));

     // Create a range slider, passing some options
     var donutRangeSlider = new google.visualization.ControlWrapper({
        'controlType': 'NumberRangeFilter',
        'containerId': 'filter_div',
        'options': {
          'filterColumnLabel': 'number'
        }
      });

      var barChart = new google.visualization.ChartWrapper({
        'chartType': 'BarChart',
        'containerId': 'barchart',
        'options': {
          'width': 500,
          'height': 300,
          'barText': 'value',
          'legend': 'right'
        }
      });


// var chart = new google.visualization.BarChart(document.getElementById('barchart'));

dashboard.bind(donutRangeSlider, barChart);

dashboard.draw(data);
}

// var modal = document.getElementById("myModal");

// var btn= document.getElementById("infobtn");

// var span = document.getElementsByClassName("close")[0];

// btn.onclick=function(){
//   modal.style.display="block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }

$(document).ready(function(){
  $('#infobtn').click(function(){
    $('#myModal').show();
    $('#dashboard_div').show();
  });
  $('.close').click(function(){
    $('#myModal').hide();
    $('#dashboard_div').hide();
  });
});
/*$('#infobtn').on('click', function() {
  $("#myModal").css({
    'z-index': 1050
  }).modal('show');
});
*/