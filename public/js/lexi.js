console.log("hey lexi");

function ShowStats(){
    $.ajax({
        
        dataType: 'jsonp',
        url: 'http://behance.net/v2/users?api_key=JoI9j5mk8tEfLB81PQeEMKhDSTjVNewT',
        type: 'GET',
        success: function (users) {
            console.log(users);
            console.log(users.users.length);
            for (var i = 0; i < 3; i++){
                console.log(users.users[i].first_name);
            }
            console.log('i am working');
        },
        error: function (error) {
            console.log(error);
            console.log('something has gone wrong');
        }
    });
}

ShowStats();