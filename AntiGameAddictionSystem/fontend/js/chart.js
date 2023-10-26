
var now_data=[
  { value: 7, name: 'Monday' },
  { value: 12, name: 'Tuesday' },
  { value: 5, name: 'Wednesday' },
  { value: 4, name: 'Thursday' },
  { value: 13, name: 'Friday' },
  { value: 8, name: 'Saturday' },
  { value: 9, name: 'Sunday' }
];
$(function(){

    var now_user=window.localStorage.getItem("now_user");
    var user=JSON.parse(now_user);
    $.ajax({
        method:"post",
        url:"http://localhost:3001/user/time",
        data:{
            uid:user.id,
        },
        success:function(data){
            //console.log(data);
            var now_time=[data.now_time.week1_sum,data.now_time.week2_sum,data.now_time.week3_sum,data.now_time.week4_sum,
                data.now_time.week5_sum,data.now_time.week6_sum,data.now_time.week7_sum,data.now_time.week8_sum,data.now_time.week9_sum,
                data.now_time.week10_sum];
            var sum_time=[data.result_sum.week1_sum,data.result_sum.week2_sum,data.result_sum.week3_sum,data.result_sum.week4_sum,
                data.result_sum.week5_sum,data.result_sum.week6_sum,data.result_sum.week7_sum,data.result_sum.week8_sum,data.result_sum.week9_sum,
                data.result_sum.week10_sum];
            createNum(data.now_time);
            createChart(now_time,sum_time);
            createChart2();
        },
        error:function(err){
            alert(err.responseJSON.message);
        }  
    });
});

function createNum(now_time){
    $("#total1").val(now_time.week1_sum);
    $("#duration1").val(now_time.week1_unhealthy);
    $("#total2").val(now_time.week2_sum);
    $("#duration2").val(now_time.week2_unhealthy);
    $("#total3").val(now_time.week3_sum);
    $("#duration3").val(now_time.week3_unhealthy);
    $("#total4").val(now_time.week4_sum);
    $("#duration4").val(now_time.week4_unhealthy);
    $("#total5").val(now_time.week5_sum);
    $("#duration5").val(now_time.week5_unhealthy);
    $("#total6").val(now_time.week6_sum);
    $("#duration6").val(now_time.week6_unhealthy);
    $("#total7").val(now_time.week7_sum);
    $("#duration7").val(now_time.week7_unhealthy);
    $("#total8").val(now_time.week8_sum);
    $("#duration8").val(now_time.week8_unhealthy);
    $("#total9").val(now_time.week9_sum);
    $("#duration9").val(now_time.week9_unhealthy);
    $("#total10").val(now_time.week10_sum);
    $("#duration10").val(now_time.week10_unhealthy);
}

function createChart(now_time,sum_time){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));

    // 指定图表的配置项和数据
    var option = {
        title: {
          text: 'Count game duration'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Average duration', 'Current user duration']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ["first week", "second week", "third week", "fourth week", "fifth week", "sixth week", "seventh week", "eighth week", "ninth week", "tenth week"]
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Average duration',
            type: 'line',
            stack: 'Total',
            data: sum_time
          },
          {
            name: 'Current user duration',
            type: 'line',
            stack: 'Total',
            data: now_time
          }
       
        ]
      };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function createChart2(){
  // 基于准备好的dom，初始化echarts实例
  var myChart2 = echarts.init(document.getElementById('simple'));

  // 指定图表的配置项和数据
  var option = {
    title: {
      text: 'Daily play time',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Game duration',
        type: 'pie',
        radius: '50%',
        data: now_data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart2.setOption(option);
}

function save(){
    var total1=$("#total1").val();
    var duration1=$("#duration1").val();
    var total2=$("#total2").val();
    var duration2=$("#duration2").val();
    var total3=$("#total3").val();
    var duration3=$("#duration3").val();
    var total4=$("#total4").val();
    var duration4=$("#duration4").val();
    var total5=$("#total5").val();
    var duration5=$("#duration5").val();
    var total6=$("#total6").val();
    var duration6=$("#duration6").val();
    var total7=$("#total7").val();
    var duration7=$("#duration7").val();
    var total8=$("#total8").val();
    var duration8=$("#duration8").val();
    var total9=$("#total9").val();
    var duration9=$("#duration9").val();
    var total10=$("#total10").val();
    var duration10=$("#duration10").val();
    var now_user=window.localStorage.getItem("now_user");
    var user=JSON.parse(now_user);
    if(total1 && duration1 && total2 && duration2 && total3 && duration3
        && total4 && duration4 && total5 && duration5 && total6 && duration6
        && total7 && duration7 && total8 && duration8 && total9 && duration9
        && total10 && duration10){
        $.ajax({
            method:"post",
            url:"http://localhost:3001/user/updateTime",
            data:{
                "total1":total1,
                "duration1":duration1,
                "total2":total2,
                "duration2":duration2,
                "total3":total3,
                "duration3":duration3,
                "total4":total4,
                "duration4":duration4,
                "total5":total5,
                "duration5":duration5,
                "total6":total6,
                "duration6":duration6,
                "total7":total7,
                "duration7":duration7,
                "total8":total8,
                "duration8":duration8,
                "total9":total9,
                "duration9":duration9,
                "total10":total10,
                "duration10":duration10,
                "uid":user.id,
            },
            success:function(data){
                alert(data.message);
                window.location.reload();
            },
            error:function(err){
                alert(err.responseJSON.message);
            }  
        });
        $("#staticBackdrop").modal("hide");      
    }else{
        alert("Play time cannot be empty!");
    }
}
