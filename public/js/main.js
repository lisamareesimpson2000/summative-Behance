console.log("working");
$.ajax({
    dataType: 'jsonp',
    url: 'https://api.behance.net/v2/users//matiascorea/projects?client_id=n8cdQnwhaNoOOeV04JAR1P3Uhz7PQ8p7',
    // url: 'http://behance.net/v2/users?api_key=n8cdQnwhaNoOOeV04JAR1P3Uhz7PQ8p7',
    type: 'GET',
    success: function (behance__data) {
        console.log(behance__data);
        // console.log(behance__data.users.length);
        //console.log(behance__data.users.matiascorea);

        for (var i = 0; i < 3; i++){
            console.log(behance__data.users[i].first_name);
        }
    },
    error: function (error) {

        console.log(error);
    }
});



var Desname = ["matiascorea" , "lucaviola" , "raewynbrandon"];
var stats = [
    {
        first_name : "bob" ,
        followers : "" ,
        following : "",
        appreciations : "",
        views : "",
        comments : ""
    },
    {
        first_name : "" ,
        followers : "" ,
        following : "",
        appreciations : "",
        views : "",
        comments : ""
    },
    {
        first_name : "" ,
        followers : "" ,
        following : "",
        appreciations : "",
        views : "",
        comments : ""
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
            stats[i].first_name = user.user.first_name;
            stats[i].followers = apiData.user.stats.followers;
            stats[i].following = apiData.user.stats.following;
            stats[i].appreciations = apiData.user.stats.appreciations;
            stats[i].views = apiData.user.stats.views;
            stats[i].comments = apiData.user.stats.comments;
            // return(apiData.user.stats.followers);
            console.log(stats[0].name);
            console.log(j);
    j += 1;
            


        
            


        },
        error: function (error) {
            console.log(error);
            console.log('something has gone wrong');
        }
    });
}
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

var data = new google.visualization.DataTable();
data.addColumn('string','Name');
       data.addColumn('number','Followers');
       for (var i = 0; i < stats.length; i++) {
          data.addRow([
                    stats[i].name,
                    stats[i].followers
                    ]);
          } //arraytodatatable

var options = {
title: 'behance followers'
};

var chart = new google.visualization.PieChart(document.getElementById('piechart'));

chart.draw(data, options);
}
console.log("hey Joon it's monday");