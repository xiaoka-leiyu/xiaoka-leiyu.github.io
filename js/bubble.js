//随机出现的话术数组
var toastText = [
    "哈哈，早安",
    "早上吃饭了吗？",
    "好好学习，天天向上",
    "闭上眼睛，用心祈祷，努力的人有回报",
    "记得早点睡觉",
]

//计时器变量
var fishAlert;
//弹出功能函数
function textShow(aniTime,spaceTime){
    //清空计时器
    clearInterval(fishAlert);
    //解绑事件
    $("#fish-click").off("tap");
    //设置显示的文本，随机生成0-4的整数
    var random = Math.floor(Math.random() * 5);
    //展示随机生成的文本
    $("#select-toast").html(toastText[random]).addClass("toastAni");
    //4000秒后去掉动画
    setTimeout(function(){
        //去掉动画样式
        $("#select-toast").removeClass("toastAni");
        //重新绑定事件
        $("#fish-click").off("tap").on("tap",function(){
            textShow(4000,8000);
        })
        //添加8秒计时器
        fishAlert = setInterval(function(){
            //随机生成0-4的整数
            var random = Math.floor(Math.random() * 5);
            //添加动画
            $("#select-toast").html(toastText[random]).addClass("toastAni");
            setTimeout(function(){
                //动画结束后移除动画
                $("#select-toast").removeClass("toastAni");
            },aniTime)
        },spaceTime);
    },aniTime);
}