/**
 * Stack!
 */

// functions: push, pop, peek, length

/*var letters = [];   // this is our stack

var word = "racecar";

var rword = "";

// put letters of word into stack
for (var i = 0; i < word.length; i++){
    letters.push(word[i]);
}

// pop off the stack in reverse order
for (var i = 0; i < word.length; i++){
    rword += letters.pop();
}

if (rword === word){
    console.log(word + " is a palindrome.");
} else {
    console.log(word + " is not a palindrome.");
}*/

// creat a stack

/*var Stack = function(){
    this.count = 0;
    this.storage = {};

    // add a value onto the end of the stack
    this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
    };

    // remove and returns the value at the end of the stack
    this.pop = function () {
        if (this.count === 0){
            return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    };

    this.size = function () {
        return this.count;
    };

    // returns the value at the end of the stack
    this.peek = function () {
        return this.storage[this.count - 1];
    }
};

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("ThandoTec");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
*/

/**
 * Set
 */

function mySet() {
    // the var collection will hold the set
    var collection = [];

    // this method will check for the presence of an element and return true or false
    this.has = function (element) {
        return (collection.indexOf(element) !== -1)
    };

    // this method will return all the values in the set
    this.values = function () {
        return collection;
    };

    // this method will add an element to the set
    this.add = function (element) {
        if (!this.has(element)){
            collection.push(element);
            return true
        }
        return false;
    };

    // this method will remove an element from a set
    this.remove = function(element) {
        if (this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    };

    this.size = function() {
        return collection.length;
    };

    // this method will return the size of the collection
    this.union = function() {
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values;
        firstSet.forEach(function (event) {
            unionSet.add(event);
        });
        secondSet.forEach(function (event) {
            unionSet.add(event);
        });
        return unionSet;
    };

    // method to return the intersection of two sets as a new set
    this.intersection = function (otherSet) {
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function (event) {
            if (otherSet.has(event)){
                intersectionSet.add(event);
            }
        });
        return intersectionSet;
    };

    // method will return the difference of two sets as a new set
    this.difference  = function (otherSet) {
        var differenceSet = new Set();
        var firstSet = this.values();
        firstSet.forEach(function (event) {
            if (!otherSet.has(event)){
                differenceSet.add(event);
            }
        });
        return differenceSet;
    };

    // this method will test if the set is a subset of a different set
    this.subset = function (otherSet) {
        var firstSet = this.values();
        return firstSet.every(function (value) {
            return otherSet.has(value);
        });
    };
}

var setA = new mySet();
var setB = new mySet();

setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
