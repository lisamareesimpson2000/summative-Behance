console.log("working");
var desName = ['matiascorea', 'lucaviola', 'raewynbrandon'];

for (var i = 0; i < desName.length; i++){
console.log(desName);


$.ajax({
    dataType: 'jsonp',
    url: 'https://api.behance.net/v2/users/'+ desName[i] +'?client_id=n8cdQnwhaNoOOeV04JAR1P3Uhz7PQ8p7',
    // url: 'http://behance.net/v2/users?api_key=n8cdQnwhaNoOOeV04JAR1P3Uhz7PQ8p7',
    type: 'GET',
    success: function (behance_data) {
        console.log(behance_data);
        // console.log(behance_data.users.length);
        console.log(behance_data.user.first_name);
        console.log(behance_data.user.last_name);
        console.log(behance_data.user.occupation);
        console.log(behance_data.user.fields);
        console.log(behance_data.user.images[138]);

       document.getElementById("des__details").innerHTML += '<div class="cont__designer"><p class="designer__h2--f">' + behance_data.user.first_name + ' ' + behance_data.user.last_name +'</p><div>' + 
        '<p class="designer__h2--f">' + behance_data.user.occupation + '</p>' +
        '<img class="img-thumbnail img__shadow" src = "' + behance_data.user.images[138] + '" alt="profile photo">';
       
       //document.getElementById("des__details--img").innerHTML += '<img class="img-thumbnail img__shadow" src = "' + behance_data.user.images[138] + '" alt="profile photo" style="width:200px; height:200px;">';
    },
    error: function (error) {

        console.log(error);
    }
});

}
//loop is closed