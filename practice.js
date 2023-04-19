document.getElementById('purple').onclick = partyPurple;
document.getElementById('green').onclick = partyGreen;
document.getElementById('blue').onclick = partyBlue;
document.getElementById('orange').onclick = partyOrange;

function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'grey'
  document.querySelector('body').style.color = '#fff'
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'green'
  document.querySelector('body').style.color = '#fff'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'blue'
  document.querySelector('body').style.color = '#fff'
}

function partyOrange() {
  document.querySelector('body').style.backgroundColor = 'orange'
  document.querySelector('body').style.color = '#fff'
}
