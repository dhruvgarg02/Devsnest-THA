let bookedSeatsCounter = document.querySelector(".booked_seats")
let remainingSeatsCounter = document.querySelector(".remaining_seats")
let totalSeats = 48
let bookedCounter = 0
let theatre = document.querySelector(".theatre")

function seatbooker(event) {
    event.target.classList.toggle("booked")
    event.target.classList.contains("booked") ? bookedCounter++ : bookedCounter--;
    bookedSeatsCounter.innerHTML = bookedCounter
    remainingSeatsCounter.innerHTML = totalSeats - bookedCounter
}

bookedSeatsCounter.innerHTML = bookedCounter
remainingSeatsCounter.innerHTML = totalSeats - bookedCounter

for (let i = 0; i < totalSeats; i++) {
    let seat = document.createElement("div")
    theatre.append(seat)
    seat.className = "seat"
    seat.addEventListener("click", seatbooker)
}