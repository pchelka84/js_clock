const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const hands = document.querySelectorAll('.hand');

function setDate() {
  const now = new Date(); 

  const seconds = now.getSeconds();
  const secondDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const minutes = now.getMinutes();
  const minuteDegrees = ((minutes / 60 ) * 360) + 90;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`; 

  const hours = now.getHours();
  const hourDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  // remove glitch at 12 o'clock 
  if (secondDegrees === 90) {
    hands.forEach(hand => hand.style.transition = 'none')
  } else {
    // reset the inline style to return to the external styles
    hands.forEach(hand => hand.style.transition = "" )
  }

}

setInterval(setDate, 1000);