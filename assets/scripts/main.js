let airplane=document.querySelector('.airplane');
let airplaneScrollTimeline=document.querySelector('.airplane-scroll-timeline');


airplane.animate([
    {offsetDistance:"100%"},
    {offsetDistance:"0%"}
],{
    fill: 'both',
    timeline: new ScrollTimeline({
        scrollOffsets: [
           {target:airplaneScrollTimeline,edge:"start",threshold:1},
           {target:airplaneScrollTimeline,edge:"end",threshold:1}
        ]
    })
})


let preScollY=0;

window.addEventListener('scroll',function(){
    if(pageYOffset >=preScollY){
        airplane.classList.remove('up','down')
        airplane.classList.add('down')
    }else{
        airplane.classList.remove('up','down')
        airplane.classList.add('up') 
    }
    preScollY=pageYOffset;
})