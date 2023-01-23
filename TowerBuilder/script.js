// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:
// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]

function towerBuilder(nFloor) {
    let tower = [];
    let firstLineSpace;
  
    const tempTower = ["*"];
    let stars = 1;
    let space;
    if (nFloor === 1) {
      return tempTower
    } else {
      for (let x = 1; x < nFloor; x++) {
        stars = stars + 2;
      }
      firstLineSpace = stars - 1;
      space = firstLineSpace / 2;
      for (let i = 0; i < nFloor; i++) {
        let line = tempTower[i] + "**"
        tempTower.push(line)
      }
    }
    for (let i = 0; i < nFloor; i++) {
      let levelStart = tempTower[i].padStart(((firstLineSpace / 2) + (i + 1)), " ")
      let levelEnd = levelStart.padEnd(stars, " ")
      tower.push(levelEnd)
      space = space - 1
    }
    return tower
  }
  
  
  function towerBuilder(nFloors) {
    let space = "";
    let star = "";
    let tower = [];
    for (let i = 1; i <= nFloors; i++) {
      space = (" ").repeat(nFloors - i);
      star = ("*").repeat((2 * i) - 1);
      tower.push(space + star + space);
    }
    return tower;
  }
  
  