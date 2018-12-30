
$(function(){
    $(window).on("resize",function(){ 
        //1.获取窗口宽度
        let clientW = $(window).width();

        //2.设置临界值
        let isShowBigImage = clientW>=800;

        //3.获取所有的item
        let $allItems = $("#wd_carousel .item");
        //4.遍历
        $allItems.each(
            function(index,item){
                //4.1取出图片路径
                let src = isShowBigImage ?　$(item).data("lg-img") : $(item).data("sm-img");            
                let imgUrl = 'url("'+ src +'")';    
                //4.2设置背景
                $(item).css({
                    backgroundImage: imgUrl
                });
                //4.3设置img标签
                if(!isShowBigImage){
                    let imgObj = '<img src="'+src+'"/>'; 
                    $(item).empty().append(imgObj);   
                }else{
                    $(item).empty();
                }
            }
        );
    });
    $(window).trigger('resize');
}

);



