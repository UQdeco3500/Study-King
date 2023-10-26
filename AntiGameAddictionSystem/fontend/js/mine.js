var user={};
$(function(){
    var now_user=window.localStorage.getItem("now_user");
    user=JSON.parse(now_user);
});

function saveWeek(){
    var week1=$("#week1").val();
    var week2=$("#week2").val();
    var week3=$("#week3").val();
    var week4=$("#week4").val();
    if(week1 && week2 && week3 && week4){
        var friend=`${week1},${week2},${week3},${week4}`;
        $.ajax({
            method:"put",
            url:"http://localhost:3001/user/updateFriendFrequency",
            data:{
                "uid":user.id,
                "friend":friend
            },
            success:function(data){
                alert(data.message);
                $("#staticBackdrop1").modal("hide");  
            },
            error:function(err){
                alert(err.responseJSON.message);
            }  
        });
    }else{
        alert("The frequency of adding friends each week cannot be empty.");
    }
}

function Generate(){
    $.ajax({
        method:"post",
        url:"http://localhost:3001/user/getAddiction",
        data:{
            "uid":user.id,
        },
        success:function(data){
            console.log(data);
            $("#addiction").html(data.Anumber);
        },
        error:function(err){
            alert(err.responseJSON.message);
        }  
    });
}

function saveReports(){
    var reports=$("#reports").val();
    if(reports){
        $.ajax({
            method:"put",
            url:"http://localhost:3001/user/updateReports",
            data:{
                "uid":user.id,
                "report":reports
            },
            success:function(data){
                alert(data.message);
                $("#staticBackdrop2").modal("hide");  
            },
            error:function(err){
                alert(err.responseJSON.message);
            }  
        });
    }else{
        alert("The report number cannt to empty.");
    }
}

function saveAchievement(){
    var rate=$("#rate").val();
    if(rate){
        $.ajax({
            method:"put",
            url:"http://localhost:3001/user/updateRate",
            data:{
                "uid":user.id,
                "rate":rate
            },
            success:function(data){
                alert(data.message);
                $("#staticBackdrop3").modal("hide");  
            },
            error:function(err){
                alert(err.responseJSON.message);
            }  
        });
    }else{
        alert("The rate cannt to empty.");
    }
}