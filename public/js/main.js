// console.log("working");
var desName = ['matiascorea', 'lucaviola', 'raewynbrandon'];
var j = desName[0];
console.log(j);
var len = desName.length;
var firstDes = ['matiascorea'];

for (var i = 0; i < desName.length; i++){
console.log(desName);


$.ajax({
    dataType: 'jsonp',
    url: 'https://api.behance.net/v2/users/'+ desName[i] +'?client_id=n8cdQnwhaNoOOeV04JAR1P3Uhz7PQ8p7',
    // url: 'http://behance.net/v2/users?api_key=n8cdQnwhaNoOOeV04JAR1P3Uhz7PQ8p7',
    type: 'GET',
    async: false,
    success: function (behance_data) {
        console.log(behance_data);
        // console.log(behance_data.users.length);
        console.log(behance_data.user.first_name);
        console.log(behance_data.user.last_name);
        console.log(behance_data.user.occupation);
        console.log(behance_data.user.fields);
        console.log(behance_data.user.images[138]);

        // if (behance_data.user.first_name < 10) {
        //     des1 = "Matias Corea";
        //   } else if (behance_data.user.first_name < 8) {
        //     des2 = "Luka Viola";
        //   }
        //   else {
        //     des3 = "Raewyn Brandon";
        //   }
        // console.log(des1)
        // console.log(des2)
        // console.log(des3)

        //TRYING TO GET FIRST NAME INDIVIDUALLY FOR STYLING - COLUMNS to sit right

        // var desObj, x;
        // desObj = {"name":"John", "age":30, "car":null};
        // x = desObj.name;
        // document.getElementById("demo").innerHTML = x;


        document.getElementById("des__details").innerHTML+= '<div class="user-row"><div class="text-row"><p class="designer__h2--f">' + behance_data.user.first_name + ' ' + behance_data.user.last_name +'</p>' + 
        '<br>'+'<p class="designer__h2--f">' + behance_data.user.occupation + '</p></div>'
        +
        '<div class="img-row"><img class="img-thumbnail img__shadow" src = "' + behance_data.user.images[138] + '" alt="profile photo"></div></div>';
       
    //    document.getElementById("des__details--img").innerHTML += '<div class="cont__des--image"><img class="img-thumbnail img__shadow col" src = "' + behance_data.user.images[138] + '" alt="profile photo"</div>';
       //document.getElementById("des__details--img").innerHTML += '<img class="img-thumbnail img__shadow" src = "' + behance_data.user.images[138] + '" alt="profile photo" style="width:200px; height:200px;">';
    
    
    
    
    },
    error: function (error) {

        console.log(error);
    }
});



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
        "followers": 5755 ,
        "following": "",
        "appreciations": "",
        "views": "",
        "comments": ""
    },
    {
        "first_name": "" ,
        "followers": 4554 ,
        "following": "",
        "appreciations": "",
        "views": "",
        "comments": ""
    }
];

var j = 0;
for ( var i = 0 ; i < Desname.length; i++) {
    


$.ajax({
        
        dataType: 'jsonp',
        url: 'http://behance.net/v2/users/' + Desname[i] + '?api_key=JoI9j5mk8tEfLB81PQeEMKhDSTjVNewT',
        type: 'GET',
        async: false,
        success: function (apiData) {
            console.log(apiData);
            console.log(apiData.user.first_name);
            console.log(apiData.user.stats.followers);
            // followers.push(apiData.user.stats.followers);
            // console.log(followers);
            stats[j].first_name = apiData.user.first_name;
            stats[j].followers = apiData.user.stats.followers;
            stats[j].following = apiData.user.stats.following;
            stats[j].appreciations = apiData.user.stats.appreciations;
            stats[j].views = apiData.user.stats.views;
            stats[j].comments = apiData.user.stats.comments;
            // return(apiData.user.stats.followers);
            console.log(stats[j].first_name,stats[j].followers, stats[j].following, stats[j].appreciations, stats[j].views, stats[j].comments);
            console.log(j);
    j += 1;
            


        
            


        },
        error: function (error) {
            console.log(error);
            console.log('something has gone wrong');
        }
    });
}
google.charts.load('current', {'packages':['corechart', 'controls']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

var data = new google.visualization.DataTable();
data.addColumn('string','Name');
       data.addColumn('number','Followers');
       for (var i = 0; i < stats.length; i++) {
          data.addRow([
                    stats[i].first_name,
                    stats[i].followers
                    ]);
          } //arraytodatatable

var options = {
title: 'behance followers',
chartArea:{
  left:80,
  top:5,
  width:'70%',
  height:'90%'
},
is3D: true, 
pieSliceBorderColor:  '#b5d3dd',
backgroundColor: {
  fill: 'blue'
}
};

var chart = new google.visualization.PieChart(document.getElementById('piechart'));

chart.draw(data, options);
singleDesigner();
}


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


console.log("hey Joon it's monday");
}
//loop is closed


