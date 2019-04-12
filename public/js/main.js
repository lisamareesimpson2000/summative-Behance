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

}
//loop is closed


var options = {
title: 'behance followers'
};

var chart = new google.visualization.PieChart(document.getElementById('piechart'));

chart.draw(data, options);
$(document).ready(function() {

var container = $("#BehanceProject");

  function success(data) {

    console.log(data)
     for (var i = 0; i < 3; i++) {
    console.log(data.projects[i]);
       // for (var j = 0; j < 3; j++) {
         var project = data.projects[i];
          console.log(project)
          insertProject(project);
       // }

     }

  }

  function insertProject(projectData) {
    var counter = 1;

    if (counter <= 3) {
    container.append('<div class="project__item">'+projectData.owners[0].username+'</div>')
    // container.append('<div class="project__item">'+projectData.name+'</div>');
    container.append('<div class="project__item">' + '<img src= "' + projectData.covers[404] + '">')
    counter += 1
    }
    else{
  container.append('<br/>'+'<br/>')
}
  }
var user= ["matiascorea","lucaviola","raewynbrandon"];
console.log(user[0],user[1],user[2])
var i;
for (i=0; i<3; i++){
  // console.log(i);
  // console.log(user)
  // console.log(user[i]);
 var newuser=user[i];
  console.log(newuser);
  var url='https://api.behance.net/v2/users/'+newuser+'/projects?client_id=dSoSYYcQQTsMHJ9O5hWkN6gns4aV5gOM';
  console.log(url);
  $.ajax({
    url: url,
    dataType: "jsonp",
    type: "GET",
    success: success,
    error:function(){
      console.log('error');
    }
  });
}
});
