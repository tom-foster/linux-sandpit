"use strict";
//using use strict to sign post global variables
//data munging example for js
//tf 14/04/17

var studentData = [
    {name: 'Bob', id:0, 'scores':[68, 75, 56, 81]},
    {name: 'Alice', id:1, 'scores': [75, 90, 64, 88]},
    {'name': 'Carol', 'id': 2, 'scores': [59, 74, 71, 68]},
    {'name': 'Dan', 'id': 3, 'scores': [64, 58, 53, 62]},

];

function processStudentData(data, passThreshold, meritThreshold) {
    // ternarys to assign values if undefined.
    console.log(passThreshold);
    passThreshold = typeof passThreshold !== 'undefined' ? passThreshold: 60;
    console.log(passThreshold);

    meritThreshold = typeof meritThreshold !== 'undefined' ? meritThreshold: 75;

    data.forEach(function(sdata) {
        var avg = sdata.scores.reduce(function(prev,current) {
            return prev+current;
        }, 0) / sdata.scores.length;

        sdata.average = avg;

        if(avg > meritThreshold) {
            sdata.assessment = 'passed with merit';
        }
        else if (avg > passThreshold) {
            sdata.assessment = 'passed';
        }
        else {
            sdata.assessment = 'failed';
        }

        console.log(sdata.name + "'s (id: " + sdata.id + ") final assessment is: " +
                    sdata.assessment.toUpperCase());
    });
}

processStudentData(studentData);