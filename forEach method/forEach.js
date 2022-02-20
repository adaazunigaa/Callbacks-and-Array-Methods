/*-forEach ***************************************************************
    *Accepts a callback function 
    *Calls the function once per element in the array
*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(function (element) {
    console.log(element);
});

console.log("\nPrinting out even numbers in the array")

//prints out even numbers in the array
numbers.forEach(function (element) {
    if (element % 2 === 0) {
        console.log(element);
    }
});


//another sample of the forEach method wiht the movie array
const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`)
})








//MAP METHOD *******************************************************************
//*Creates a new array with the results of calling a callback on every element in the array
const doubles = numbers.map(function (num) {
    console.log(num*2);
    return num * 2;
})

//Creates a new array with the movies title on it
const titles = movies.map(function(movie){
    return movie.title.toLowerCase();
})










//INTRO TO ARROW FUNCTIONS ***********************************************
const add = (x,y)=>{
    return x + y;
}

//() are optional whenever there is only one parameter
const square = (x)=>{
    return x * x;
}

//arrow function wiht no parameters 
const rollDie = () =>{
    return Math.floor(Math.random() * 6) + 1;
}

const greet = (personName) => {
    return `Hey ${personName}!`
}