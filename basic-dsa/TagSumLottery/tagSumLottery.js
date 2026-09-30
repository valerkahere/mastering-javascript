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
  { tag: 26, name: 'Vince the Veloci' },
  { tag: 40, name: 'Sue the Bellu' },
  { tag: 47, name: 'Dean the Edmon' },
  { tag: 15, name: 'Sam the Seismo' },
  { tag: 24, name: 'Karen the Cryol' },
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

/*
Algorithm:  Tag Sum Lottery Improved
Input: array of communications, with objects containing tag and name
Output: array of arrays with winners
Paradigm: Map speeds up O(n^2) to O(n)


Steps:


*/

// Time Complexity: O(n)
// Space Complexity: ?

export function tagSumLotteryImproved(communications, lotteryNumber) {
  // compare to target number
  // like lotteryNumber = 50
  // for each tag:
  // lotteryNumber - tag = target
  // communications.has(target)
  // yes: add both old tag and new tag names to winners
  // no: ...

  // if stored has something that adds up to 50?

  /*
  1. Init winners array,
  create stored map
  Loop through each object in communications
  if stored has that current tag: tag current + tag next === lotteryNumber
  add both names to winners array
  else
  add to stored: tag, name - current
  return winners array
  return "No winners"
 
  for each tag:
  lotteryNumber - tag = target
  communications.has(target)
  yes: add both old tag and new tag names to winners
  no: next iteration, skip
 */
  const winners = [];

  const stored = new Map();

  // has an array of object, so need to map them onto map key value pairs
  communications.forEach((element) => {
    stored.set(element.tag, element.name);
  });

  for (const [tag, name] of stored) {
    const target = lotteryNumber - tag;
    // how do if find tag of 40
    // I DON'T NEED TO FIND IT
    // just CHECK IF IT'S THERE
    const secondNameMatchesFifty = stored.get(target)
    if (secondNameMatchesFifty !== undefined) {
      winners.push([name, secondNameMatchesFifty].toSorted())
      
    }
      // in any case REMOVE both FROM MAP TO AVOID DUPLICATES - cause they're checked

    stored.delete(tag);
    stored.delete(target);
  }

  if (winners.length > 0) {
    return winners;
  }
  return 'No winners';

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
}
