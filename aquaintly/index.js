'use strict';

var connections = function (events, n) {
  let lesser = [];
  let higher = [];
  let response = [lesser, higher];

  let allUsers = [];

  // separate users based on popularity: more than n or less than n
  // track connect and disconnect for each user

  // dec:
  // if alice appears in array.
  // if the user next to is IS NOT REMEMBERED
  // then connect : count+1, disconnect : count-1

  // for each user
  // remember all users:
  // alice had bob

  events.forEach((event) => {
    console.log(event);
    //let current
    // count total users, MAKE AN ARRAY OF THEM - NEED CHECK UNIQUENESS
    // if out of two users, any of them appear in array - discard

    const [type, ...currentUsers] = event;

    console.log(currentUsers);

    currentUsers.forEach((currentUser) => {
        // allUsers is empty initially
        // if user is not listed in all users yet
        // then add it
        if (!allUsers.includes(currentUser))  {
            allUsers.push(currentUser);
        }

      
    });

    //users.push(event[1], event[2]);
  });

  console.log(`All users: ${allUsers}`);
  return response;
};

let events = [
  ['CONNECT', 'Alice', 'Bob'],
  ['DISCONNECT', 'Bob', 'Alice'],
  ['CONNECT', 'Alice', 'Charlie'],
  ['CONNECT', 'Dennis', 'Bob'],
  ['CONNECT', 'Pam', 'Dennis'],
  ['DISCONNECT', 'Pam', 'Dennis'],
  ['CONNECT', 'Pam', 'Dennis'],
  ['CONNECT', 'Edward', 'Bob'],
  ['CONNECT', 'Dennis', 'Charlie'],
  ['CONNECT', 'Alice', 'Nicole'],
  ['CONNECT', 'Pam', 'Edward'],
  ['DISCONNECT', 'Dennis', 'Charlie'],
  ['CONNECT', 'Dennis', 'Edward'],
  ['CONNECT', 'Charlie', 'Bob'],
];

let n = 3;

console.log(connections(events, n));
