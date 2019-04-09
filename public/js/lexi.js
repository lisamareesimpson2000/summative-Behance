var Desname = ["matiascorea" , "lucaviola" , "raewynbrandon"];
var stats = [
    {
        name : "bob" ,
        followers : 637 ,
        following : "",
        appreciations : "",
        views : "",
        comments : ""
    },
    {
        name : "steve" ,
        followers : 456 ,
        following : "",
        appreciations : "",
        views : "",
        comments : ""
    },
    {
        name : "angie" ,
        followers : 732 ,
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
        success: function (apiData) {
            console.log(apiData);
            console.log(apiData.user.first_name);
            console.log(apiData.user.stats.followers);
            // followers.push(apiData.user.stats.followers);
            // console.log(followers);
            return(apiData.user.stats.followers);
            


        
            


        },
        error: function (error) {
            console.log(error);
            console.log('something has gone wrong');
        }
    });
    console.log(stats[j].name);
            console.log(j);
   // stats[j].name = apiData.user.first_name;
            // stats[j].followers = apiData.user.stats.followers;
      //      stats[j].following = apiData.user.stats.following;
     //       stats[j].appreciations = apiData.user.stats.appreciations;
      //      stats[j].views = apiData.user.stats.views;
       //     stats[j].comments = apiData.user.stats.comments;
    j += 1;
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