

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getPG = function (arr) {
        return arr.filter((m) => {
            return m.rating === "PG";
        });
    }
}
let movie1 = new Movie("Singam", "evergreen studio")

console.log(movie1) //Output: Movie { getPG: [Function: getPG],title: 'Singam',studio: 'evergreen studio',rating: 'PG'}

let movie2 = new Movie("Casino Royale", "Eon Productions", "PG13")
console.log(movie2)  //Output:Movie {getPG: [Function: getPG],title: 'Casino Royale',studio: 'Eon Productions',rating: 'PG13'}

let movie3 = new Movie("LEO", "Seven screen studio", "PG15");
let movie4 = new Movie("12th Fail", "Vinod Chopra films", "PG18");
let movie5 = new Movie("TheEqualizer", "Disney");
let movie6 = new Movie("Lion King", "Disney");

const arr1 =[movie3,movie4,movie5,movie6]

console.log(arr1)


// OUTPUT:

// Movie {
//     getPG: [Function: getPG],
//     title: 'Singam',
//     studio: 'evergreen studio',
//     rating: 'PG'
//   }
//   Movie {
//     getPG: [Function: getPG],
//     title: 'Casino Royale',
//     studio: 'Eon Productions',
//     rating: 'PG13'
//   }
//   [
//     Movie {
//       getPG: [Function: getPG],
//       title: 'LEO',
//       studio: 'Seven screen studio',
//       rating: 'PG15'
//     },
//     Movie {
//       getPG: [Function: getPG],
//       title: '12th Fail',
//       studio: 'Vinod Chopra films',
//       rating: 'PG18'
//     },
//     Movie {
//       getPG: [Function: getPG],
//       title: 'TheEqualizer',
//       studio: 'Disney',
//       rating: 'PG'
//     },
//     Movie {
//       getPG: [Function: getPG],
//       title: 'Lion King',
//       studio: 'Disney',
//       rating: 'PG'
//     }
//   ]
  