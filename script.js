const tiles = Array.from(document.querySelectorAll('.tile'));

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
shuffle(numbers);

tiles.forEach((tile, index) => {
  tile.textContent = numbers[index];
});

let emptyTile = document.querySelector('.empty');

function swapTiles(tile1, tile2) {
  const temp = tile1.textContent;
  tile1.textContent = tile2.textContent;
  tile2.textContent = temp;
}

function isSolved() {
  return tiles.every((tile, index) => {
    return tile.textContent == index + 1;
  });
}

function handleTileClick(event) {
  const tile = event.target;
  const tileIndex = tiles.indexOf(tile);
  const emptyIndex = tiles.indexOf(emptyTile);
  const adjacentIndices = [
    tileIndex - 1, // izquierda
    tileIndex + 1, // derecha
    tileIndex - 3, // arriba
    tileIndex + 3, // abajo
  ];

  if (adjacentIndices.includes(emptyIndex)) {
    swapTiles(tile, emptyTile);
    emptyTile.classList.remove('empty');
    tile.classList.add('empty');
    emptyTile = tile;

    if (isSolved()) {
      alert('¡Felicidades! ¡Completaste el puzzle!');
    }
  }
}

tiles.forEach((tile) => {
  tile.addEventListener('click', handleTileClick);
});
