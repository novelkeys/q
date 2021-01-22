window.onload=function () {
    //判断设备类型返回不同的点击链接
    function dove_systemType(item){
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            let dov_u = navigator.userAgent;
            let dove_isAndroid = dov_u.indexOf('Android') > -1 || dov_u.indexOf('Adr') > -1; //android终端
            let dove_isiOS = !!dov_u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            return dove_isAndroid&&item?item.android_link:dove_isiOS?item.ios_link:item.default_link;
         }else{
           return item?item.default_link:'';
         }
    }
    /**
     * imageurl:图片地址,
     * default_link:点击跳转默认链接,
     * ios_link:苹果手机点击跳转链接,
     * android_link:安卓手机点击跳转链接
     */
    let dove_arrays_data = [{
        imageurl:'https://aiyuout.oss-cn-shenzhen.aliyuncs.com/share/other/11.jpg',
        default_link:'http://www.aiyu333.com/aiyu.apk',
        ios_link:'https://apps.apple.com/cn/app/%E7%88%B1%E9%B1%BC/id1490385063',
        android_link:'http://www.aiyu333.com/aiyu.apk',
    },{
        imageurl:'https://aiyuout.oss-cn-shenzhen.aliyuncs.com/share/other/22.jpg',
        default_link:'http://www.aiyu333.com/aiyu.apk',
        ios_link:'https://apps.apple.com/cn/app/%E7%88%B1%E9%B1%BC/id1490385063',
        android_link:'http://www.aiyu333.com/aiyu.apk',
    },{
        imageurl:'https://aiyuout.oss-cn-shenzhen.aliyuncs.com/share/other/33.jpg',
        default_link:'http://www.aiyu333.com/aiyu.apk',
        ios_link:'https://apps.apple.com/cn/app/%E7%88%B1%E9%B1%BC/id1490385063',
        android_link:'http://www.aiyu333.com/aiyu.apk',
    },{
        imageurl:'https://aiyuout.oss-cn-shenzhen.aliyuncs.com/share/other/44.jpg',
        default_link:'http://www.aiyu333.com/aiyu.apk',
        ios_link:'https://apps.apple.com/cn/app/%E7%88%B1%E9%B1%BC/id1490385063',
        android_link:'http://www.aiyu333.com/aiyu.apk',
    },{
        imageurl:'https://aiyuout.oss-cn-shenzhen.aliyuncs.com/share/other/55.jpg',
        default_link:'http://www.aiyu333.com/aiyu.apk',
        ios_link:'https://apps.apple.com/cn/app/%E7%88%B1%E9%B1%BC/id1490385063',
        android_link:'http://www.aiyu333.com/aiyu.apk',
    }]
    let dove_div=document.createElement('div');
    dove_div.style.width=document.body.clientWidth+'px';
    dove_div.style.overflow='hidden';
    // dove_div.style.height='200px';//限制图片容器的高度,如不限电高度自适应
    let dove_banner=document.createElement("div");
    dove_banner.style.width=dove_arrays_data.length*document.body.clientWidth+'px';
    dove_div.appendChild(dove_banner);
    dove_arrays_data.forEach((item)=>{
        let dove_image=new Image();
        dove_image.style.width=document.body.clientWidth+'px';
        dove_image.style.height='auto';
        dove_image.style.float="left";
        dove_image.src=item.imageurl
        dove_image.addEventListener('click',function(){
            window.location.href=dove_systemType(item);
        })
        dove_banner.appendChild(dove_image);
    })
    document.body.insertBefore(dove_div,document.body.firstChild);
    let dove_count=dove_arrays_data.length;
    //设置轮播
    setInterval(function(){
        let dove_arrays_dom=dove_banner.children;
        console.log(dove_arrays_dom);
        for(let i=0;i<dove_arrays_dom.length;i++){
            let dove_show=dove_arrays_dom[i];
            console.log(dove_show);
            if(dove_count-1===i){
                dove_show.style.display='block';
            }else{
                dove_show.style.display='none'; 
            }
        }
        dove_count-=1;
        if(dove_count==0){
            dove_count=dove_arrays_data.length;
        }
    },5000);//此处设置轮播时长5000ms等于5秒
}