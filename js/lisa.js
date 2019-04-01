
    $.ajax({
        
        dataType: 'jsonp',
        url: 'http://behance.net/v2/users?api_key=',
        type: 'GET',
        success: function (users) {
            console.log(users);
            console.log(users.users.length)
            for (var i = 0; i < 3; i++){
                console.log(users.users[i].first_name);
            }
        },
        error: function (error) {

            console.log(error);
        }
    });