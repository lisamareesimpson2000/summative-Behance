

var container = $("#BehanceProject");//black

var x=[];

var user= ["matiascorea","lucaviola","raewynbrandon"];
console.log(user[0],user[1],user[2])
var i;
for (i=0; i<3; i++){



  var url='https://api.behance.net/v2/users/'+user[i]+'/projects?client_id=dSoSYYcQQTsMHJ9O5hWkN6gns4aV5gOM';
  console.log(url);
  $.ajax({
    url: url,
    dataType: "jsonp",
    type: "GET",
    success: function(data){

      console.log(data);
      var k=0;
if (k==0){

       for (var j= 0; j < 3; j++) {



         console.log(data.projects[j]);

            var project = data.projects[j];
             console.log(project);

             // if (j>0){
             //   $('#project2, #project3').hide();
             //  $('#more').click(function(){
             //    $('#project2, #project3').show();
             //  })
             //      }


             if (j==0) {
              userContainer1.append('<div align="center" id="project1" style="height: 48em; width: 100%; background: blue;"></div>')


            var  projContainer1 = document.getElementById('project1')
                 projContainer1.innerHTML +=('<div style="height: 1.825em; width: 300px;" class="project__item">'+project.owners[0].display_name+'</div>')
                 projContainer1.innerHTML +=('<div style="height: 1.825em; width: 400px;" class="project__item">'+project.name+'</div>')
                  projContainer1.innerHTML +=('<div style="height: 12.5em; width: 250px;" class="project__item">' + '<img src= '+ project.covers[404] +' >'+'</div>')
                    projContainer1.innerHTML +=('<button type="button" id="more"> Load More </button>');
              console.log(projContainer1);


             } else if (j==1){

            userContainer1.append('<div align="center" id="project2" style="height: 48em; width: 100%; background: green;"></div>')
              var projContainer2 = document.getElementById('project2')
              projContainer2.innerHTML +=('<div style="height: 1.825em; width: 300px;" class="project__item">'+project.owners[0].display_name+'</div>')
                projContainer2.innerHTML +=('<div style="height: 1.825em; width: 300px;" class="project__item">'+project.name+'</div>')
                 projContainer2.innerHTML +=('<div style="height: 12.5em; width: 250px;" class="project__item">' + '<img src= '+ project.covers[404] +' >'+'</div>')
                  console.log(projContainer2);

            } else if (j==2){
              userContainer1.append('<div align="center" id="project3" style="height: 48em; width: 100%; background: red;"></div>')
              var projContainer3 = document.getElementById('project3')

              projContainer3.innerHTML +=('<div style="height: 1.825em; width: 300px;" class="project__item">'+project.owners[0].display_name+'</div>')
                projContainer3.innerHTML +=('<div style="height: 1.825em; width: 300px;" class="project__item">'+project.name+'</div>')
                 projContainer3.innerHTML +=('<div style="height: 12.5em; width: 250px;" class="project__item">' + '<img src= '+ project.covers[404] +' >'+'</div>')

            console.log(projContainer3);
            }


}//for
}//if k
k+=1;

}, //success
    error:function(error){
      console.log('error');
    }
  });
}
