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
        async: false,
        success: function (apiData) {
            // console.log(apiData);
            // console.log(apiData.user.first_name);
            // console.log(apiData.user.stats.followers);
            // // followers.push(apiData.user.stats.followers);
            // // console.log(followers);
            stats[i].name = apiData.user.first_name;
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
var userContainer1 = $("#userContainer1");
var userContainer2 = $("#userContainer2");
var userContainer3 = $("#userContainer3");

//user 1 matiascorea
  $.ajax({
    url: 'https://api.behance.net/v2/users/matiascorea/projects?client_id=dSoSYYcQQTsMHJ9O5hWkN6gns4aV5gOM',
    dataType: "jsonp",
    type: "GET",
    success: function(data){

    console.log(data);
       for (var j= 0; j < 3; j++) {

            var project = data.projects[j];
             console.log(project);




             if (j==0) {
              userContainer1.append('<div id="project1"></div>');

              var  projContainer1 = document.getElementById('project1')
                   projContainer1.innerHTML +=('<div class="project__item">'+project.owners[0].first_name + " " + project.owners[0].last_name+'</div>')
                   projContainer1.innerHTML +=('<div class="project__item">'+project.name+'</div>')
                   projContainer1.innerHTML +=('<div class="img__item">' + '<img class="shadow-float" src= '+ project.covers[404] +' >'+'</div>')
                   projContainer1.innerHTML +=('<button type="button" id="more1" class="load__button"> Load More </button>');

              console.log(projContainer1);


             } else if (j==1){

            userContainer1.append('<div id="project2"></div>')
              var projContainer2 = document.getElementById('project2')
                  projContainer2.innerHTML +=('<div class="project__item">'+project.owners[0].first_name + " " + project.owners[0].last_name+'</div>')
                  projContainer2.innerHTML +=('<div class="project__item">'+project.name+'</div>')
                  projContainer2.innerHTML +=('<div class="img__item">' + '<img class="shadow-float" src= '+ project.covers[404] +' >'+'</div>')

              console.log(projContainer2);

            } else if (j==2){
              userContainer1.append('<div id="project3"></div>')
              var projContainer3 = document.getElementById('project3')
                  projContainer3.innerHTML +=('<div class="project__item">'+project.owners[0].first_name + " " + project.owners[0].last_name+'</div>')
                  projContainer3.innerHTML +=('<div class="project__item">'+project.name+'</div>')
                  projContainer3.innerHTML +=('<div class="img__item">' + '<img class="shadow-float" src= '+ project.covers[404] +' >'+'</div>')

              console.log(projContainer3);
            }


}//for

if (j>0){
    $('#project2, #project3').hide();
    $('#more1').click(function(){
    $('#project2, #project3').toggle();
  });
      }

}, //success
    error:function(error){
      console.log('error');
    }
  });

  //user 2 lucaviola
    $.ajax({
      url: 'https://api.behance.net/v2/users/lucaviola/projects?client_id=dSoSYYcQQTsMHJ9O5hWkN6gns4aV5gOM',
      dataType: "jsonp",
      type: "GET",
      success: function(data){

      console.log(data);
         for (var k= 0; k < 3; k++) {

              var project = data.projects[k];
               console.log(project);




               if (k==0) {
                userContainer2.append('<div id="project4"></div>');

                var  projContainer4 = document.getElementById('project4')
                     projContainer4.innerHTML +=('<div class="project__item">'+project.owners[0].first_name + " " + project.owners[0].last_name+'</div>')
                     projContainer4.innerHTML +=('<div class="project__item">'+project.name+'</div>')
                     projContainer4.innerHTML +=('<div class="img__item">' + '<img class="shadow-float" src= '+ project.covers[404] +' >'+'</div>')
                     projContainer4.innerHTML +=('<button type="button" id="more2" class="load__button"> Load More </button>');

                console.log(projContainer4);


              } else if (k==1){

              userContainer2.append('<div id="project5"></div>')
                var projContainer5 = document.getElementById('project5')
                    projContainer5.innerHTML +=('<div class="project__item">'+project.owners[0].first_name + " " + project.owners[0].last_name+'</div>')
                    projContainer5.innerHTML +=('<div class="project__item">'+project.name+'</div>')
                    projContainer5.innerHTML +=('<div class="img__item">' + '<img class="shadow-float" src= '+ project.covers[404] +' >'+'</div>')

                console.log(projContainer5);

              } else if (k==2){
                userContainer2.append('<div id="project6"></div>')
                var projContainer6 = document.getElementById('project6')
                    projContainer6.innerHTML +=('<div class="project__item">'+project.owners[0].first_name + " " + project.owners[0].last_name+'</div>')
                    projContainer6.innerHTML +=('<div class="project__item">'+project.name+'</div>')
                    projContainer6.innerHTML +=('<div class="img__item">' + '<img class="shadow-float" src= '+ project.covers[404] +' >'+'</div>')

                console.log(projContainer6);
              }


  }//for

  if (k>0){
      $('#project5, #project6').hide();
      $('#more2').click(function(){
      $('#project5, #project6').toggle();
    });
        }

  }, //success
      error:function(error){
        console.log('error');
      }
    });

    //user 3 raewynbrandon
      $.ajax({
        url: 'https://api.behance.net/v2/users/raewynbrandon/projects?client_id=dSoSYYcQQTsMHJ9O5hWkN6gns4aV5gOM',
        dataType: "jsonp",
        type: "GET",
        success: function(data){

        console.log(data);
           for (var l= 0; l < 3; l++) {

                var project = data.projects[l];
                 console.log(project);




                 if (l==0) {
                  userContainer3.append('<div id="project7"></div>');

                  var  projContainer7 = document.getElementById('project7')
                       projContainer7.innerHTML +=('<div class="project__item">'+project.owners[0].first_name + " " + project.owners[0].last_name+'</div>')
                       projContainer7.innerHTML +=('<div class="project__item">'+project.name+'</div>')
                       projContainer7.innerHTML +=('<div class="img__item">' + '<img class="shadow-float" src= '+ project.covers[404] +' >'+'</div>')
                       projContainer7.innerHTML +=('<button type="button" id="more3" class="load__button"> Load More </button>');


                  console.log(projContainer7);


                } else if (l==1){

                userContainer3.append('<div id="project8"></div>')
                  var projContainer8 = document.getElementById('project8')
                      projContainer8.innerHTML +=('<div class="project__item">'+project.owners[0].first_name + " " + project.owners[0].last_name+'</div>')
                      projContainer8.innerHTML +=('<div class="project__item">'+project.name+'</div>')
                      projContainer8.innerHTML +=('<div class="img__item">' + '<img class="shadow-float" src= '+ project.covers[404] +' >'+'</div>')

                  console.log(projContainer8);

                } else if (l==2){
                  userContainer3.append('<div id="project9"></div>')
                  var projContainer9 = document.getElementById('project9')
                      projContainer9.innerHTML +=('<div class="project__item">'+project.owners[0].first_name + " " + project.owners[0].last_name+'</div>')
                      projContainer9.innerHTML +=('<div class="project__item">'+project.name+'</div>')
                      projContainer9.innerHTML +=('<div class="img__item">' + '<img class="shadow-float" src= '+ project.covers[404] +' >'+'</div>')

                  console.log(projContainer9);
                }


    }//for

    if (l>0){
        $('#project8, #project9').hide();
        $('#more3').click(function(){
        $('#project8, #project9').toggle();
      });
          }

    }, //success
        error:function(error){
          console.log('error');
        }
      });
