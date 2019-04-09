$(document).ready(function() {

  function success(data) {

    console.log(data)
     for (var i = 0; i < 3; i++) {
    console.log(data.projects[i]);
       for (var j = 0; j < 3; j++) {
         var project = data.projects[i];
          console.log(project)
          insertProject(project);
       }

     }

  }

  function insertProject(projectData) {

    container.append('<div class="project__item">'+projectData.name+'</div>');
    container.append('<div class="project__item">'+projectData.fields+'</div>');
    container.append('<div class="project__item">' + '<img src= "' + projectData.covers[404] + '">')

  }
var user= ["matiascorea","lucaviola","raewynbrandon"];
console.log(user[0],user[1],user[2])
var i;
for (i=0; i<3; i++){
  console.log(i);
  console.log(user)
  console.log(user[i]);
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
