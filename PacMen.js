let pos = 0;
const pacArray = [
  ['./imagesPacman1.png', './imagesPacman2.png'],
  ['./imagesPacman3.png', './imagesPacman4.png'],
];
let direction = 0;
const pacMen = []; // This array holds all the pacmen

// Returns an object with random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
  let velocity = setToRandom(10);
  let position = setToRandom(200);
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = './imagesPacman1.png';
  newimg.width = 100;
  newimg.style.left = position.x;
  newimg.style.top = position.y;

  game.appendChild(newimg);

  return {
    position,
    velocity,
    newimg,
  };
}

  // loops over pacmen array and moves each one and moves image in DOM
function update() {
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
  setTimeout(update, 20);
}

  // Detects collision with all walls and makes pacman bounce
function checkCollisions(item) {
  if (
    item.position.x + item.velocity.x + item.newimg.width > window.innerWidth || item.position.x + item.velocity.x < 0
  )
    item.velocity.x = -item.velocity.x;
  if (
    item.position.y + item.velocity.y + item.newimg.height > window.innerHeight || item.position.y + item.velocity.y < 0
  )
    item.velocity.y = -item.velocity.y;
}

 // adds a new PacMan
function makeOne() {
  pacMen.push(makePac());
};
