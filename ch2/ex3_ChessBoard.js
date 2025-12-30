/* 
8x8 grid
newline characters to separate lines
all in single string
where _ is space, format like:
_#_#_#_#\n#_#_#_#_
1 line - it's space first
2 line - it's # first
    for the number of size
    => produce as many characters
    => in as many rows (iterations)
    LOOP IN LOOP!
    outer loop defines which row (rowNumber)
    inner loop defined each row content  (colNumber)

    // rowNumber decides the pattern based on index
        // if row is odd, columns:
        // space - odd
        // hash - even
        // OTHERWISE
        // if row is even, columns:
        // hash - odd
        // space - even
*/

let grid = '';
let size = 15; 
for (let rowNumber = 1; rowNumber <= size; rowNumber++) {
    // if row is odd - start with space
    // if row is even - start with hash
    if (rowNumber % 2 !== 0) { // if it's odd
        for (let colNumber = 0; colNumber < size; colNumber++) {
            if (colNumber % 2 !== 0)  { // here will definitely give space first
                grid += ' ';
            } else {
                grid += '#';
            }
        }
    } else { // vice-versa
        for (let colNumber = 0; colNumber < size; colNumber++) {
            if (colNumber % 2 !== 0)  {
                grid += '#';
            } else {
                grid += ' ';
            }
        }
    }
    // Finishing with newline
    grid += '\n';
}
console.log(grid);

let board = "";

// both (together) row and col - odd? Give space
// both even? Give hash
// Becose row decides - can simply merge them together
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);
