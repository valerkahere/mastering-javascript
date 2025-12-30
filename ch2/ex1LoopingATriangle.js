/*
Desired output:
#
##
###
####
#####
######
####### 
*/

/* 
1) Need 7 console.log to output this drawing
2) Need a  for loop to run 7 times
3) each time, a counter increases, and based off the counter amount - that amount of # is output
4) In C# it was write/writeline, in js just use console.log? => Yes
don't even need to count hashes, just add one with each iteration
*/
let hashes = '#';
for (let count = 0; count < 7; count++) {

    console.log(hashes);
    hashes += '#';
    
}