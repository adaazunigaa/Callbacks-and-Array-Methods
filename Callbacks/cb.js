// SET TIME OUT ***********************************
setTimeout(()=> {
    console.log("Hello");
}, 3000);



//SET INTERVAL 
const id = setInterval(()=> {
    console.log(Math.random());
}, 2000);
//clearInterval(id); will stop the interval