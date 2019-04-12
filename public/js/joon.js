

var container = $("#BehanceProject");//pink



var user= ["matiascorea","lucaviola","raewynbrandon"];
console.log(user[0],user[1],user[2])
var i;
for (i=0; i<3; i++){
  console.log(i);

  var url='https://api.behance.net/v2/users/'+user[i]+'/projects?client_id=dSoSYYcQQTsMHJ9O5hWkN6gns4aV5gOM';
  console.log(url);
  $.ajax({
    url: url,
    dataType: "jsonp",
    type: "GET",
    success: function(data){

      console.log(data);
       for (var j= 0; j < 3; j++) {
         console.log(j);
         console.log(data.projects[j]);

            var project = data.projects[j];
             console.log(project);
             if (j>0){
               $('#project2, #project3').hide();
              $('#more').click(function(){
                $('#project2, #project3').show();
              })
                  }


             if (j==0) {
              container.append('<div align="center" id="project1" style="height: 48em; width: 100%; border: blue 1px solid;"></div>')


            var   projContainer1 = document.getElementById('project1')
                 projContainer1.innerHTML +=('<div style="height: 1.825em; width: 300px;" class="project__item">'+project.owners[0].display_name+'</div>')
                 projContainer1.innerHTML +=('<div style="height: 1.825em; width: 400px;" class="project__item">'+project.name+'</div>')
                  projContainer1.innerHTML +=('<div style="height: 12.5em; width: 250px;" class="project__item">' + '<img src= '+ project.covers[404] +' >'+'</div>')

              console.log(projContainer1);


             } else if (j==1){

              container.append('<div align="center" id="project2" style="height: 48em; width: 100%; border: red 1px solid;"></div>')
              var projContainer2 = document.getElementById('project2')
              projContainer2.innerHTML +=('<div style="height: 1.825em; width: 300px;" class="project__item">'+project.owners[0].display_name+'</div>')
                projContainer2.innerHTML +=('<div style="height: 1.825em; width: 300px;" class="project__item">'+project.name+'</div>')
                 projContainer2.innerHTML +=('<div style="height: 12.5em; width: 250px;" class="project__item">' + '<img src= '+ project.covers[404] +' >'+'</div>')
                  console.log(projContainer2);

            } else if (j==2){
              container.append('<div align="center" id="project3" style="height: 48em; width: 100%; border: green 1px solid; "></div>')
              var projContainer3 = document.getElementById('project3')

              projContainer3.innerHTML +=('<div style="height: 1.825em; width: 300px;" class="project__item">'+project.owners[0].display_name+'</div>')
                projContainer3.innerHTML +=('<div style="height: 1.825em; width: 300px;" class="project__item">'+project.name+'</div>')
                 projContainer3.innerHTML +=('<div style="height: 12.5em; width: 250px;" class="project__item">' + '<img src= '+ project.covers[404] +' >'+'</div>')

            console.log(projContainer3);
            }


}//for

}, //success
    error:function(error){
      console.log('error');
    }
  });
}
