var now_friend={};
var chat_list=[];
$(function(){
    now_friend=window.localStorage.getItem("now_friend");
    now_friend=JSON.parse(now_friend);
    $("#username").html(now_friend.userName);
});

function create_chat(){
    var str="";
    chat_list.forEach(item=>{
        str+=`
        <li>
            <span>${item}</span>
            <img src="./bg.png">
        </li>
        `;
    });
    $("#chat").html(str);
}

function send(){
    var message=$("#message-input").val();
    chat_list.push(message);
    create_chat();
    $("#message-input").val("");
}

function clickNormal(){
    var now_user=window.localStorage.getItem("now_user");
    now_user=JSON.parse(now_user);
    $.ajax({
        method:"put",
        url:"http://localhost:3001/user/achieving_rate_bl",
        data:{
            "uid":now_user.id,
            "bl":0
        },
        success:function(data){
            alert("Cleared abnormal chat successfully!");
        },
        error:function(err){
            alert(err.responseJSON.message);
        }  
    });
}

function clickAbnormal(){
    var now_user=window.localStorage.getItem("now_user");
    now_user=JSON.parse(now_user);
    $.ajax({
        method:"put",
        url:"http://localhost:3001/user/achieving_rate_bl",
        data:{
            "uid":now_user.id,
            "bl":1
        },
        success:function(data){
            alert("Please normal chat!");
        },
        error:function(err){
            alert(err.responseJSON.message);
        }  
    });
}