
//LISA JS
$("#show__section--lisa").click(function(){
    $("#joon").hide();
    $("#lisa").show();
    $('html, body').animate({
        scrollTop: $("#lisa").offset().top
     }, 1000);
});
$("#show__section--joon").click(function(){
    $("#lisa").hide();
    $("#joon").show();
    $('html, body').animate({
        scrollTop: $("#joon").offset().top
     }, 1000);
});

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
    type: 'GET',
    async: false,
    success: function (behance_data) {
        console.log(behance_data);
        console.log(behance_data.user.first_name);
        console.log(behance_data.user.last_name);
        console.log(behance_data.user.occupation);
        console.log(behance_data.user.location);
        console.log(behance_data.user.fields);
        console.log(behance_data.user.twitter);
        console.log(behance_data.user.images[138]);
        document.getElementById("section__list--designer").innerHTML+= '<div class="row__user"><div class="row__text"><h2 class="designer__h2--f">' + behance_data.user.first_name + ' ' + behance_data.user.last_name +'</h2>' + 
        '<h2 class="designer__h2--f">' + behance_data.user.occupation + '</h2>' + '<h2 class="designer__h2--f">' + behance_data.user.location +'</h2></div>' + 
        '<div class="row__img"><img class="rounded-circle ridge img__shadow clearfix" src = "' + behance_data.user.images[138] + '" alt="profile photo"></div></div>'+'<br>';
    },
    error: function (error) {
        console.log(error);
    }
});

}
//loop is closed


