!function(){
  var duration = 50
  $('.actions').on('click', 'button', function(e){
    let $button = $(e.currentTarget) // button
    let speed = $button.attr('data-speed')
    $button.addClass('active')
      .siblings('.active').removeClass('active')
    switch(speed){
      case 'slow':
        duration = 100
        break
      case 'normal':
        duration = 50
        break
      case 'fast':
        duration = 10
        break
    }
  })
  function writeCode(prefix, code, fn){
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let id
    id = setTimeout(function run(){
      n+=1
      container.innerHTML = code.substring(0,n)
      styleTag.innerHTML = code.substring(0,n)
      container.scrollTop = container.scrollHeight
      if(n < code.length){
        id = setTimeout(run, duration)
      }else{
        fn && fn.call()
      }
    }, duration)
  }
  let code = `
*,*::after,*::before{
box-sizing: border-box;
margin: 0;
padding: 0;
}
html{
  background: #f9ece8;
}
.fox{
  width: 215px;
  height: 275px;
  position: relative;
}
.fox .head{
  width: 184px;
  height: 184px;
  background: #ff7373;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  overflow: hidden;
}
.fox .head::before,.fox .head::after{
  content: '';
  width: 184px;
  height: 184px;
  background: #fff;
  border-radius: 50%;
  display: block;
  position: absolute;
  bottom: -92px;
  z-index: 1;
}
.fox .head::before{
  left: -92px;
}
.fox .head::after{
  right: -92px;
}
.fox .head .eye{
  width: 18px;
  height: 9px;
  display: block;
  background: #000;
  z-index: 2;
  position: absolute;
  bottom: 40px;
  border-radius: 18px 18px 0 0 ;
}
.fox .head .eye:nth-child(1){
  left: 37px;
  transform: rotate(-45deg)
}
.fox .head .eye:nth-child(2){
  right: 37px;
  transform: rotate(45deg)
}
.fox .ear{
  width: 93px;
  height: 93px;
  display: block;
  background:  #ff9090;
  position: absolute;
  top: 0px;
}
.fox .ear:nth-child(even){
  right: 0px;
  border-radius:93px 0 0 0;
}
.fox .ear:nth-child(odd){
  left:31px;
  border-radius:0 93px 0 0;
}
.fox .nose{
  width: 27px;
  height: 27px;
  border-radius: 50%;
  background: #000;
  position: absolute;
  z-index: 3;
  top: 169px;
  right: 78px;
}
.fox .body{
  width: 107px;
  height: 214px;
  background: #ff7373;
  border-radius: 0 214px 214px 0;
  position: absolute;
  z-index: 1;
  bottom: 0px;
  right: 0;
}
.fox .tail{
  width: 215px;
  height: 107px;
  background: #ff7373;
  border-radius: 0 0 215px 215px;
  position: absolute;
  z-index: 1;
  bottom: 0px;
  right: 0px;
  overflow: hidden;
}
.fox .tail::before{
  content: '';
  width: 57px;
  height: 57px;
  display: block;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: -30px;
  left: -30px;
}
`
  writeCode('',code)
}.call()