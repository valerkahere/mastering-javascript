export function tagSumLottery(communications, lotteryNumber) {
  const winners = [];
  for (let i = 0; i < communications.length; i++) {
    for (let j = i + 1; j < communications.length; j++) {
      if (
        communications[i].tag + communications[j].tag ===
        lotteryNumber
      ) {
        winners.push(
          [communications[i].name, communications[j].name].toSorted()
        );
      }
    }
  }
  if (winners.length > 0) {
    return winners;
  }
  return 'No winners';
}

// check if backward checking works
// if it doesn't - i know it's not required
// oh i realised you don't need it... cause
// each number checked against each other anyway.
// starting from first one. dammit.
const communications2 = [
  [10, 'Tim the T-Rex'],
  [26, 'Vince the Veloci'],
  [40, 'Sue the Bellu'],
  [47, 'Dean the Edmon'],
  [15, 'Sam the Seismo'],
  [24, 'Karen the Cryol'],
];
const lotteryNumber = 50;
// const winners = [
//   ["Sue the Bellu", "Tim the T-Rex"],
//   ["Karen the Cryol", "Vince the Veloci"]
// ]

//console.log(tagSumLottery(communications, lotteryNumber));

const communications = [
  { tag: 10, name: 'Tim the T-Rex' },
  { tag: 10, name: 'Tim the T-Rex' },
  { tag: 26, name: 'Vince the Veloci' },
  { tag: 40, name: 'Sue the Bellu' },
  { tag: 47, name: 'Dean the Edmon' },
];

console.log(tagSumLotteryImproved(communications, lotteryNumber));

const mapOfCommunications1 = new Map();
communications.forEach((element) => {
  mapOfCommunications1.set(element.tag, element.name);
});
for (const [key, value] of mapOfCommunications1) {
  //console.log(`loop: ${key}: ${value}`);
}

const mapOfCommunications = new Map(communications2);
//console.log(mapOfCommunications.get(10));
// wrong loop, returns undefinjed
// for (const element of mapOfCommunications) {
//   console.log(`${element.tag}: ${element.name}`);
// }

for (const [key, value] of mapOfCommunications) {
  //console.log(`${key}: ${value}`);
}

/* notes

  // now works
  // for (const [ key, value ] of stored) {
  //   console.log(`loop: ${key}: ${value}`);
  // }

  // for (let i = 0; i < communications.length; i++) {
  //   // match a condition where
  //   // this number ADDS UP TO 50 with a different number
  //   if (stored[i]. + stored[i + 1].tag === lotteryNumber) {
  //   } else {
  //     stored.set(communications[i].tag, communications[i].name);
  //   }
  // }

  // for (const { tag, name } of communications) {
  //   if (
  //     stored.get(tag)
  //      ===
  //     lotteryNumber
  //   ) {
  //   }
  // }
*/

/*
Algorithm:  Tag Sum Lottery Improved
Input: array of communications, with objects containing tag and name
Output: array of arrays with winners
Paradigm: Map speeds up O(n^2) to O(n)


Steps:
  // Init winners array,
  // create stored map
  // Loop through each object in communications
  // assign the object's key and value to a map's pair
  // for each object in map
  // target = lotteryNumber - tag 
  // communications.has(target)
  // yes: add both old tag and new tag names to winners, and sort them alphabetically
  // no: do nothing
  // delete tag only? cause it was checked for every num. but need keep target cause IT WASN'T checked for every num as it will come next in loop  - ideally would need a test case to check for that
  // if winners non zero, return them
  // return no winners otherwise

*/

// Time Complexity: O(n) - for loop
// Space Complexity: O(n) - because of stored Map

/* Feedback:
You've done a great job optimizing the algorithm to O(n) time complexity! Just a small heads-up: your current approach might miss some valid pairs because you are deleting both the current tag and the target tag from the map immediately, which can prevent subsequent iterations from finding their matches. Keep up the great work! 🦖

You've made a great leap in efficiency by moving to an O(n) approach! However, your current logic might return duplicate pairs or include the same person twice if the lottery number is exactly double their tag. Try to ensure you only count each pair once and verify that the two names are distinct. You're doing great! 🦖

You've made a great start with the Map approach! However, your current implementation iterates over the map while modifying it, which can lead to unexpected behavior. Try building the map as you iterate through the communications array instead of pre-filling it—this will help you find pairs more reliably. You're doing a dino-mite job! 🦖



*/

export function tagSumLotteryImproved(communications, lotteryNumber) {
  const winners = [];

  const stored = new Map();

  // has an array of object, so need to map them onto map key value pairs
  communications.forEach((element) => {
    stored.set(element.tag, element.name);
  });

  for (const [tag, name] of stored) {
    // delete straight away so don't match itself if lottery
    // is exactly double the tag

    stored.delete(tag);
    console.log('map after tag deleted:');
    for (const [tag, name] of stored) {
      console.log(tag, name);
    }

    const target = lotteryNumber - tag;
    // how do if find tag of 40
    // I DON'T NEED TO FIND IT
    // just CHECK IF IT'S THERE
    const secondNameMatchesFifty = stored.get(target);
    if (secondNameMatchesFifty !== undefined && name !== secondNameMatchesFifty) {
      winners.push([name, secondNameMatchesFifty].toSorted());
    }
  }

  if (winners.length > 0) {
    return winners;
  }
  return 'No winners';
}
