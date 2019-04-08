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
console.log("hey lexi");
console.log("hey Joon");