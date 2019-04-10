$(document).ready(function() {

var container = $("#BehanceProject");

  function success(data) {

    console.log(data)
     for (var i = 0; i < 3; i++) {
    console.log(data.projects[i]);
       // for (var j = 0; j < 3; j++) {
         var project = data.projects[i];
          console.log(project)
          // insertProject(project);
          if (i==1) {
            container.append('<div id="project1" style="height: 300px; width: 300px; background:red;">'+'test'+'</div>')
            var projContainer = $("#project1")
            //  insertProject();
          } else if (i==1){
            container.append('<div id="project2" style="height: 300px; width: 300px; background:red;">'+'test'+'</div>')
            var projContainer = $("#project2")
            //  insertProject();
          } else if (i==1){
            container.append('<div id="project3" style="height: 300px; width: 300px; background:red;">'+'test'+'</div>')
            var projContainer = $("#project3")
            //  insertProject();
          }


        }
       // }

    // if (i>1){
    //   $("#BehanceProject").hide();
    //   $("#more").click(function(){
    //     $("#BehanceProject").show().
    //   })
    //       }

}
  }

  function insertProject(projectData) {
  //  var counter = 1;

<<<<<<< HEAD
//    if (counter <= 3) {
    projContainer.innerHTML=('<div class="project__item">'+projectData.username+'</div>')
    projContainer.innerHTML=('<div class="project__item">'+projectData.name+'</div>');
    projContainer.innerHTML=('<div class="project__item">' + '<img src= '+ projectData.covers[404] +' >''</div>')
    //counter += 1
    //}
    //else{
//  container.append('<br/>'+'<br/>')
//}
=======
    if (counter <= 3) {
    container.append('<div class="project__item">'+projectData.owners[0].username+'</div>')
    // container.append('<div class="project__item">'+projectData.name+'</div>');
    container.append('<div class="project__item">' + '<img src= "' + projectData.covers[404] + '">')
    counter += 1
    }
    else{
  container.append('<br/>'+'<br/>')
}
>>>>>>> 764b8d2224bd0dc4172bd27069aeb1224cb80acf
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
