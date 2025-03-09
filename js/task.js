let div1=document.getElementById("main");
let div2=document.getElementById("main2");
let div3=document.getElementById("main3");
let lable=document.getElementById("lab");
let select=document.getElementById("select");
let svg=document.getElementById("svg1");
let icon1=document.getElementById("icon1");
let icon2=document.getElementById("icon2");
let icon3=document.getElementById("icon3");
let icon4=document.getElementById("icon4");
let icon5=document.getElementById("icon5");
let icon6=document.getElementById("icon6");
let head1=document.getElementById("head1");
let head2=document.getElementById("head2");
let content=document.getElementById("con");
let area=document.getElementById("area")
let p1=document.getElementById("para1");
let p4=document.getElementById("para4");
let p2=document.getElementById("para2");
let p5=document.getElementById("para5");
let p3=document.getElementById("para3");
let p6=document.getElementById("para6");
let p7=document.getElementById("para7");
let humidity=document.getElementById("hum");
let pressure=document.getElementById("pre");
let wind=document.getElementById("wind");
let data=new Date();
// p1.textContent=`${data.getDate()}:`
// p2.textContent=`${data.getMonth()+1}:`
p2.textContent=`${data.toDateString()}`
// p3.textContent=`${data.getFullYear()}`
// p3.textContent=data.toLocaleDateString()
let k=data.getHours()
if(k>12){
    k=k-12
}
else{
    k=k
}
setInterval(()=>{
    let data2=new Date()
    p4.textContent=`${k}:`
    p5.textContent=`${data2.getMinutes()}:`
    p6.textContent=data2.getSeconds()
},1000)
function div()
{
    div1.style.height="300px"
    div1.style.borderBottomLeftRadius="0px"
    div1.style.borderBottomRightRadius="0px"
    div2.style.display="flex";
    div3.style.display="flex";
    select.style.marginTop="50px"
}
function old()
{
    div1.style.height="550px"
    div1.style.borderBottomLeftRadius="30px"
    div1.style.borderBottomRightRadius="30px"
    div2.style.display="none";
    div3.style.display="none";
    select.style.marginTop="250px"

}
select.addEventListener("change",()=>{
    
    let a=select.value
  if(a!="eyl"){
   switch (a) {
    case "chennai":
        weather(a)
        area.textContent=a
        console.log(a);
        break;
    case "coimbatore":
        weather(a)
        area.textContent=a
        console.log(a);
        break;
    case "madurai":
        weather(a)
        console.log(a);
        area.textContent=a
        break;
    case "tirunelveli":
        weather(a)
        console.log(a);
        area.textContent=a
        break;
    default:
        break;
   }
}
else{

    old()
}
})
function weather(loc){
    let place=loc;
    let key="b1939fbd213d7dc856184610b94a9d09"
    let promese=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`)
    promese.then((response)=>{
        return response.json()
    
    }).then((dark)=>{
        console.log(dark);
        div()
        let temp=Math.round((Number(dark.main.temp))-273.15)
         humidity.textContent=dark.main.humidity
         pressure.textContent=dark.main.pressure
         wind.textContent=dark.wind.speed 
        head2.textContent=`${temp}°C` 
        console.log(temp);
      if(temp<10){
        icon1.style.display="block"
        head1.textContent="very Cold"
        content.textContent="very Cold"
        console.log(temp);
      }
      else if(temp>10 && temp<20){
        icon6.style.display="block"
       head1.textContent="Cold"
       content.textContent="Cold"
      }
      else if(temp>=20 && temp<=30){
          icon2.style.display="block"
          head1.textContent="Warm"
          content.textContent="Warm"
      }
      else if(temp>30 && temp<=35){
          icon4.style.display="block"
          head1.textContent="Hot"
          content.textContent="Hot"
      }
      else if(temp>35 && temp<=40){
          icon5.style.display="block"
          head1.textContent="very Hot"
          content.textContent="very Hot"
      }
      else if(temp>40){
          icon3.style.display="block"
          head1.textContent="extremely Hot"
          content.textContent="extremely Hot"
      }
      
    }).catch(()=>{
    head1.textContent="please check the internet connection"
})
}
