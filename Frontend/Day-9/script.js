let bookedSeatsCounter = document.querySelector(".booked_seats")
let remainingSeatsCounter = document.querySelector(".remaining_seats")
let seats = document.querySelectorAll(".seat")

let numBooked = 0
let numRemaining = seats.length

bookedSeatsCounter.innerHTML = numBooked
remainingSeatsCounter.innerHTML = numRemaining


seats.forEach((seat) => {
    seat.addEventListener("click", (event) => {
        event.target.classList.toggle("booked")
        seat.classList.contains(`booked`) ? counter(1) : counter(-1);
    })
})

let counter = (s) => {
    numBooked += s;
    numRemaining -= s;

    bookedSeatsCounter.innerHTML = numBooked
    remainingSeatsCounter.innerHTML = numRemaining
}