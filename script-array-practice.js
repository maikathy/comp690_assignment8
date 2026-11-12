//STEP 1: CREATE AN ARRAY OF 5 FAVORITE MOVIES
let favMovies = ["Finding Nemo", "Shrek", "Mulan", "The Iron Giant", "Grave of the Fireflies"];

// DISPLAY THE 2nd MOVIE
console.log(favMovies[1]);

//STEP 2: CREATE AN ARRAY USING THE CONSTRUCTOR METHOD
let movies = new Array(5);

movies[0] = "Finding Nemo";
movies[1] = "Shrek";
movies[2] = "Mulan";
movies[3] = "The Iron Giant";
movies[4] = "Grave of the Fireflies";

// DISPLAY THE FIRST MOVIE
console.log(movies[0]);

//STEP 3: ADD MOVIE INTO THE 3rd POSITION
movies.splice(2, 0, "Coco");

// DISPLAY THE ARRAY LENGTH
console.log(movies.length);

//STEP 4: DELETE THE 1st MOVIE
let deleteMovies = ["Finding Nemo", "Shrek", "Mulan", "The Iron Giant", "Grave of the Fireflies"];
delete deleteMovies[0];

console.log(deleteMovies);

//STEP 5: USE A FOR/IN LOOP
let moviesForIn = ["Finding Nemo", "Shrek", "Mulan", "The Iron Giant", "Grave of the Fireflies", "Coco", "Up"];

for (let index in moviesForIn) {
    consol.log(moviesForIn[index]);
}

//STEP 6: USE A FOR/OF LOOP
let moviesForOf = ["Finding Nemo", "Shrek", "Mulan", "The Iron Giant", "Grave of the Fireflies", "Coco", "Up"];

for (let movie of moviesForOf) {
    console.log(movie);
}

//STEP 7: DISPLAY MOVIES ALPHABETICALLY
let sortedMovies = ["Finding Nemo", "Shrek", "Mulan", "The Iron Giant", "Grave of the Fireflies", "Coco", "Up"];

for (let movie of sortedMovies.sort()) {
    console.log(movie);
}

//STEP 8: CREATE FAV AND LEAST FAV ARRAYS
let favoriteMovies = ["Finding Nemo", "Shrek", "Mulan", "The Iron Giant", "Grave of the Fireflies", "Coco", "Up"];

let leastFavMovies = ["Twilight", "The Notebook", "The Last Airbender (2010)"];

console.log("Movies I like:\n");

for (let movie of favoriteMovies) {
    console.log(movie);
}

console.log("\nMovies I regret watching:\n");

for (let movie of leastFavMovies) {
    console.log(movie);
}

//STEP 9: COMBINE BOTH ARRAYS
let combinedMovies = favoriteMovies.concat(leastFavMovies);

console.log(combinedMovies.sort().reverse());

//STEP 10: DISPLAY THE LAST MOVIE
console.log(combinedMovies.pop());

//STEP 11: DISPLAY THE 1st MOVIE
console.log(combinedMovies.shift());

//STEP 12: FIND LEAST FAV MOVIES AND REPLACE THEM
let replacementMovies = favoriteMovies.concat(leastFavMovies);

let dislikeIndexes = [];

for (let i = 0; i < replacementMovies.length; i++) {
    if (leastFavMovies.includes(replacementMovies[i])) {
        dislikeIndexes.push(i);
    }
}

console.log("Indexes of movies I dislike:", dislikeIndexes);

replacementMovies[dislikeIndexes[0]] = "Toy Story";
replacementMovies[dislikeIndexes[1]] = "Moana";
replacementMovies[dislikeIndexes[0]] = "Frozen";

console.log("Updated movies:", replacementMovies)

//STEP 13: CREATE A MULTIDIMENSIONAL ARRAY
let rankedMovies = [
    ["Finding Nemo, 1"]
    ["Shrek, 2"]
    ["Mulan, 3"]
    ["The Iron Giant, 4"]
    ["Grave of the Fireflies, 5"]
];

for (let movie of rankedMovies) {
    let movieName = movie.filter(item => typeof item === "string");
    console.log(movieName[0]);
}

//STEP 14: DISPLAY EMPLOYEE NAMES
let employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"];

let showEmployee = function(employeeList) {
    console.log("Employees:\n");

    for(let employee of employeeList) {
        console.log(employee.toUpperClass());
    }
};

showEmployee(employees);

//STEP 15: FILTER FALSE, NULL, 0, BLANK VALUES
function filterValues(arr) {
    return arr.filter(item => item !== false && iten !== null && item !== 0 && item !== "");
}
console.log(filterValues([58, "", 'abcd', true, null, false, o]));

//STEP 16: GET RANDOM ITEM FROM ARRAY
function randomItem(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

let numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(randomItem(numbers));

//STEP 17: FIND THE LARGEST NUM IN ARRAY
function largestNum(arr) {
    return Math.max(...arr);
}

let numbers2 = [34, 45, 2, 15, 78, 60, 49, 99];
console.log(largestNum(numbers2));