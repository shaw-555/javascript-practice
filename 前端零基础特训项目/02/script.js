const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = Number(movieSelect.value);
// const ticketPrice = + movieSelect.value;

// 更新座位数及总票价
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  
  const seatsIndex = [...selectedSeats].map( seat => {
    return [...seats].indexOf(seat);
  });

  localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));
  
  const selectedSeatsCount = selectedSeats.length;
  console.log(selectedSeatsCount);
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// 保存电影的索引值和票价
function setMovieData(movieIndex, moviePrice){
  localStorage.setItem('selectedMovieIndex',movieIndex);
  localStorage.setItem('selectedMoviePrcie'. moviePrice);
}
// 电影下拉框事件监听
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.seatsIndex,e.target.value);
  console.log(ticketPrice);
})

// 座位点击事件
container.addEventListener('click', e => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
      e.target.classList.toggle("selected");

      updateSelectedCount();
    }
});
