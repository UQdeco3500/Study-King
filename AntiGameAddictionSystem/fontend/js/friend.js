var user={};
var result_list=[];
var firend_data_list=[];
$(function(){
    onload();
});

function onload(){
    var now_user=window.localStorage.getItem("now_user");
    now_user=JSON.parse(now_user);
    $.ajax({
        method:"get",
        url:"http://localhost:3001/user/"+now_user.id,
        success:function(res){
            //console.log(res.result);
            user=res.result;
            $("#city").val(user.message.city);
            $.ajax({
                method:"get",
                url:"http://localhost:3001/user/firend/"+now_user.id,
                success:function(data){
                   // console.log(data);
                    result_list=data.result_list;
                    create_firend_list();
                },
                error:function(err){
                    alert(err.responseJSON.message);
                }  
            });
        }
    });
}

function create_firend_list(){
    var firend_list=$("#firend_list");
    var my_friend=$("#my_friend");
    var str="";
    var now_result_list=[];
    result_list.forEach(item=>{
        if(item.message.city==user.message.city){
            now_result_list.push(item);
        }
    });
    result_list.forEach(item=>{
        if(item.message.city!=user.message.city){
            now_result_list.push(item);
        }
    });
    now_result_list.forEach(item=>{
        //console.log(item);
        str+=`
        <li class="list-group-item friend_li" aria-current="true">
              <span class="left_box">
                <img src="./bg.png" class="avg_crend"/>
                ${item.userName}
                <span class="badge bg-secondary">${item.message.city}</span>
                `;
                if(item.message.city==user.message.city){
                    str+=`<span class="badge text-bg-primary">city-wide</span>`;
                }
               str+= `
               </span>
               <span class="right_box">
               `;
               if(item.bl){
                str+=`
                <button type="button" class="btn btn-danger" onclick="delete_frind('${item.fid}')">Delete friend</button>
                `;
               }else{
                str+=`
                    <button type="button" class="btn btn-primary" onclick="add_frind('${item.id}')">Add friend</button>
                `;
               }
                  
        str+=` </span>
        </li>
        `;
    });
    var firend_str="";
    now_result_list.forEach(item=>{
        if(item.bl){
            firend_str+=`
            <li>
                <img src="./bg.png" class="avg_crend"/>
                <a href="#" onclick="openChat('${item.id}')">${item.userName}</a>
                `;
                if(item.message.city==user.message.city){
                    firend_str+=` <span class="badge text-bg-primary">city-wide</span>`;
                }
            firend_str+=`
            </li>
            `;
        }
    });
    firend_data_list=now_result_list;
    my_friend.html(firend_str);
    firend_list.html(str);
}

function add_frind(uid){
    $.ajax({
        method:"post",
        url:"http://localhost:3001/user/firend",
        data:{
            "uid1":user.id,
            "uid2":uid
        },
        success:function(data){
            alert(data.message);
            onload();
        },
        error:function(err){
            alert(err.responseJSON.message);
        }  
    });
}

function delete_frind(fid){
    $.ajax({
        method:"delete",
        url:"http://localhost:3001/user/firend",
        data:{
            "fid":fid
        },
        success:function(data){
            alert(data.message);
            onload();
        },
        error:function(err){
            alert(err.responseJSON.message);
        }  
    });
}

function openChat(uid){
    var now_friend={};
    firend_data_list.forEach(item=>{
        if(item.id==uid){
            now_friend=item;
        }
    });
    window.localStorage.setItem("now_friend",JSON.stringify(now_friend));
    window.location.href="./chat.html";
}

function saveCity(){
   var city=$("#city").val();
   if(city){
    $.ajax({
        method:"put",
        url:"http://localhost:3001/user/updateCity",
        data:{
            "uid":user.id,
            "city":city
        },
        success:function(data){
            alert(data.message);
            onload();
            $("#staticBackdrop").modal("hide");  
        },
        error:function(err){
            alert(err.responseJSON.message);
        }  
    });

   }else{
    alert("The city name cannt to empty.");
   }
}