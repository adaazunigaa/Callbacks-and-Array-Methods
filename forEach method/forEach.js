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

