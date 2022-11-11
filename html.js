async function getWeather () {
    let weatherInfo = document.getElementById ('typeCity').value;
    const result = await fetch (`https://api.api-ninjas.com/v1/weather?city=${weatherInfo}`, {
        headers : {
            'X-Api-Key': 'FEJFktV3Wll+yK8l3miPJw==dvC4MzxaWPeQKUF3' 
        },
        method: 'GET'

    }); 

    const data = await result.json ();
    console.log(data);

    let timeInfo = document.getElementById ('typeCity').value;
    const timeResult = await fetch (`https://api.api-ninjas.com/v1/worldtime?city=${timeInfo}`, {
        headers : {
            'X-Api-Key': 'FEJFktV3Wll+yK8l3miPJw==dvC4MzxaWPeQKUF3' 
        },
        method: 'GET'

    }); 

    const timeData = await timeResult.json ();
    console.log(timeData);
  
   document.getElementById('weathetDetailsInfo').innerHTML =data.temp;
   document.getElementById('weatherdetailsInfo1').innerHTML = data.humidity;
   document.getElementById('timeResultDetails').innerHTML = timeData.datetime;

   var tempInfo = data.temp;
   var rainInfo = data.humidity;
   
   if (tempInfo>10) {

    document.body.classList.replace("body1","body2")


   

   }
   if (tempInfo<10) {
    document.body.classList.replace("body2","body1")

   }
   















}


/* function myFunction(){

var temp1 = data.feels_like ;
   var snowflake = document.getElementById ('snowflake');
   var sun = document.getElementById ('sun');
     if (temp1 > 0) {
    snowflake.style.display = "none";
      } else {
    snowflake.style.display = "block";
}
    if (temp1 < 0) {
   sun.style.display = "none";
    } else {
    sun.style.display = "block";
}
} */

/* function myFunction(){

var humidity1 = data.humidity ;
var humidity1=document.getElementById("url('./cloud.gif')");
   var sun = document.getElementById ('');
     if (humidity1 > 0) {
        cloud.body.style.backgroundImage = "url('./cloud.gif')";
      } else {
        loud.body.style.backgroundImage = "block";
}
}   */

/* function myFunction() {
    var humidity=document.getElementById('./cloud.gif');
    if (humidity> 60) {
        cloud.body.style.backgroundImage = "('./cloud.gif')";   
    } else {
        cloud.body.style.backgroundImage = "block"
    }

  }  */
 /*   document.body.style.backgroundImage = "url('./cloud.gif')";  */
/* function myFunction(){
   var humidity1=data.humidity;
    var humidity1=document.getElementById("bd").style.backgroundImage = "url(./cloud.gif)";
    if (humidity1 >60) {

        humidity1.style.backgroundImage("bd") = "none";
    } else {
        humidity1.style.backgroundImage("bd") = "block";

    }
 }  */
/* 
 function myFunction() {
    var sun=document
 } */