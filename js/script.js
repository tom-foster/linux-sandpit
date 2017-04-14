//example warming up on linux
//tf 10/04/17

var data = [3, 7, 2, 9, 1, 11, 100];

var sum = 0;

//another way of writing a for loop
data.forEach(function(d) {
    sum += d;
})

console.log('Sum equals ' + sum);