
//LISA JS

//show__modal--info()
$(document).ready(function(){
    $("#homepage").show();
    $("#joon").hide();
    $("#lisa").hide();
    $("#lexi").hide();
    $("#footer--lisa").hide();
    $("#modal_info").hide();

    $("#show__section--lisa").click(function(){
        $("#lisa").show();
        $("#joon").hide();
        $("#lexi").hide();
        $("#footer--lisa").show();
        $('html, body').animate({
            scrollTop: $("#lisa").offset().top
        }, 1000);
    });

    $("#show__section--joon").click(function(){
        $("#joon").show();
        $("#lisa").hide();
        $("#lexi").hide();
        $("#footer--lisa").show();
        $('html, body').animate({
            scrollTop: $("#joon").offset().top
        }, 1000);
    });
//shows lexi stats once id is given eslint
    // $("#").click(function(){
    //     $("#lexi").show();
    //     $("#joon").hide();
    //     $("#lisa").hide();
    //     $("#footer--lisa").show();
    //     $('html, body').animate({
    //         scrollTop: $("#lexi").offset().top
    //     }, 1000);
    // });

});
//MODAL HOMEPAGE - INFO

var iconInfo = document.getElementById("i__info");
var i_modal;
function modal_info() {
    i_modal = document.getElementById('modal_info');
  console.log(i_modal);
  i_modal.style.display = "block";
}
function info_close() {
  i_modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
//window.onclick = function infoClose_outSide(event) {
//     window.onclick = function (event) {
//     if (event.target == i_modal) {
//         i_modal.style.display = "none";
//     }
// };

var desName = ['matiascorea', 'lucaviola', 'raewynbrandon'];
var j = desName[0];
console.log(j);
var len = desName.length;
var firstDes = ['matiascorea'];

for (var i = 0; i < desName.length; i++){
console.log(desName);
//const j=i;
$.ajax({
    dataType: 'jsonp',
    url: 'https://api.behance.net/v2/users/'+ desName[i] +'?client_id=',
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
        '<h2 class="designer__h2--f">' + behance_data.user.occupation + '</h2>' + '<h2 class="designer__h2--f">' + behance_data.user.location + '</h2>' + '<h2 class="designer__h2--f">' + "Twitter: " + behance_data.user.twitter + '</h2></div>' + 
        '<div class="row__img"><img class="rounded-circle ridge img__shadow clearfix" src = "' + behance_data.user.images[138] + '" alt="profile photo"></div></div>'+'<br>';
    },
    error: function (error) {
        console.log(error);
    }
});

}
//loop is closed
