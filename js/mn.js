// 手风琴
$(function () {
    //需求1:给每一个li添加img(内容图片).
    //需求2:给每一个li设置鼠标移入事件:当前li的宽度变成800,其他兄弟li宽度变成100
    //需求3:鼠标移出大盒子,所有的li的宽度都变成默认的240


    //获取到所有的li标签
    var $lis = $('#box li');
    //需求1: 
    $lis.each(function (index, ele) {
        $(this).html('<img src="./imgags/1' + (index + 1) + '.jpg" alt="">'); //jQuery中的html()方法和原生js中的innerHTML一样的
    });

    //需求2: 
    $lis.mouseenter(function () {
        $(this).stop(true, false).animate({
            width: 800
        }, 500).siblings('li').animate({
            width: 100
        }, 500);
    });

    //需求3:
    $('#box').mouseleave(function () {
        $(this).find('li').stop(true, false).animate({
            width: 240
        }, 200);
    });



});

// 呼吸轮播图
$(function () {


    // 创建小圆点
    let $ullis = $('.slider  li');
    for (let i = 0; i < $ullis.length; i++) {
        let $oli = $('<li></li>');
        // 将新建的li添加的ol中
        $('#dy').append($oli);
    }
    // 给第一个li添加类
    $('#dy li').eq(0).addClass('active');

    $('#dy li').mouseenter(function () {

        //获取当前鼠标移入的li标签的索引
        let idx = $(this).index();
        //把当前的li添加类,并移除其它兄弟的类
        $(this).addClass('active').siblings('li').removeClass('active');
        picIndex = idx;
        //把索引对应的这张图片动画显示 (fadeIn), 其他的图片动画隐藏(fadeOut)
        $('.slider  li').eq(idx).fadeIn(500).siblings('li').fadeOut(500);
    });

    //声明一个变量,用来记录显示图片的索引
    let picIndex = 0;

    //给右边焦点设置一个点击事件. 
    $('.arrow-right').click(function () {
        picIndex++;
        //判断
        if (picIndex == 8) {
            picIndex = 0;
        }
        console.log(picIndex);
        //把索引对应的这张图片动画显示(fadeIn),其他的图片动画隐藏(fadeOut)
        $('.slider  li').eq(picIndex).fadeIn(500).siblings('li').fadeOut(500);
        idx = picIndex;
        //把当前的li添加类,并移除其它兄弟的类
        $('#dy li').eq(idx).addClass('active').siblings('li').removeClass('active');
    });

    //左边焦点设置一个点击事件
    $('.arrow-left').click(function () {
        picIndex--;
        //判断
        if (picIndex < 0) {
            picIndex = 7;
        }
        console.log(picIndex);
        //把索引对应的这张图片动画显示(fadeIn),其他的图片动画隐藏(fadeOut)
        $('.slider  li').eq(picIndex).fadeIn(500).siblings('li').fadeOut(500);
        idx = picIndex;
        //把当前的li添加类,并移除其它兄弟的类
        $('#dy li').eq(idx).addClass('active').siblings('li').removeClass('active');

    });







});