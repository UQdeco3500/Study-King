function login(e){
    var username=$("#username").val();
    var password=$("#password").val();
    if(username && password){
        $.ajax({
            url:"http://127.0.0.1:3001/user/login",
            method:"post",
            data:{
                "username":username,
                "password":password,
            },
            success:function(data){
                window.localStorage.setItem("now_user",JSON.stringify(data.user));
                window.location.href="./index.html";
                alert(data.message);
            },
            error:function(err){
                alert(err.responseJSON.message);
            }  
        });
    }else{
        alert("The username or password cannot be empty!");
    }
}