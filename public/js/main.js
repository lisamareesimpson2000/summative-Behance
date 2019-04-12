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


