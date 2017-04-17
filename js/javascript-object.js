//creating an object and extending it in javascript
'use strict';

var Citizen = function(name, country) {
    this.name = name;
    this.country = country;
};

//defines a method of the object this will also change the inheritance (if Citizen had an earlier version, and any that inherit from Citizen will take it on)
Citizen.prototype = {
    printDetails: function() {
        console.log('Citizen ' + this.name + ' from ' + this.country);
    }
};

var c = new Citizen('Trevor Turky', 'Scotland');

c.printDetails(); //new method 

typeof(c) //object