//Get DOM Elements
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat');
 const count = document.getElementById('count');
 const total = document.getElementById('total');
 const selectMovie = document.getElementById('movie');

//Get the ticket price from the selectMovie Dropdown
let ticketPrice = +selectMovie.value;

 //call the update UI Function - get data from local storage and update UI
 //updateUI();

 //Function to update count
 function updateCount() {
     //calculate how many seats are selected
     const selectedSeats = document.querySelectorAll('.row .seat.selected');
     //create an array using the node list
     const seatIndex = [...selectedSeats].map( seat => [...seats].indexOf(seat) );
     //Get the number of seats from the node list
     const selectedSeatsCount = selectedSeats.length;
     //update DOM with the count
     count.innerText = selectedSeatsCount;
     //update DOM with total Price
     total.innerText = selectedSeatsCount * ticketPrice;
     //save data to local storage
     localStorage.setItem('selectedSeats',JSON.stringify(seatIndex));
    }

//Function to save the selected movie data in local storage
    function saveMovieData(movieIndex, moviePrice) {
        localStorage.setItem('movieIndex', movieIndex);
        localStorage.setItem('moviePrice', moviePrice);
    };

//Function to get data from local storage and update the UI
function updateUI() {
    //get the selected seats data from localstorage
    const selectedSeats = JASON.parse(localStorage.getItem('selectedSeats'));
    //check if there are any selected seats
    if (selectedSeats !== null && selectedSeats.length > 0) {
        //loop over all the seats in the theater
        seats.forEach ( (seat, index) => {
            //if the index of seat is contained inside selected  seats array
            if (selectedSeats.indexOf(index) > -1 ) {
                //add the selected class to the seats
                seat.classList.add('selected');
            }
        })
    }
    //Get the selectedbmovie from local storage
    const movieIndex = localStorage.getItem('movieIndex');
    //check if there is a movie index
    if (movieIndex !== null) {
        //use the movieIndex from local storage to update the movie from drop down
        selectMovie.selectedIndex = movieIndex;
    }
    //update the count
    updateCount();

};

//Event Listners
//1. Listen for click on container
container.addEventListener('click', e => {
    //Check if target has a class od seat and also is not occupied
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied') )  {
        //Add or remove the selected class on click
        e.target.classList.toggle('selected');
        //update the count of selected seats
        updateCount();
    }
});

//2. Listen for change in movie selection
selectMovie.addEventListener('change', e => {
    //update ticket price to the selected movie
    ticketPrice = +e.target.value;
    //update the counts in DOM
    updateCount();
    //save the movie data to local storage
    saveMovieData(e.target.selectedIndex, e.target.value);
})
