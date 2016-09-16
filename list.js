"use strict"

var List = function List() {
  // Number of elements in list
  this.listSize = 0;

  // Current position in list
  this.pos = 0;

  // initializes an empty array to store list elements.
  this.dataStore = [];
};

List.prototype = {
  // Clears all elements from list
  clear: function() {},
  // Finds the position of a specific element
  find: function(element) {
    var self = this,
        position = -1;

    this.dataStore.forEach(function(item, i){
      if(self.dataStore[i] == element) {
        position = i;
      }
    });

    return position;
  },
  // Returns the string representation of list
  toString: function() {},
  // Inserts new element after existing element
  insert: function() {},
  // Adds new element to end of list
  append: function(element) {
    this.dataStore[this.listSize] = element;
    this.listSize += 1;
    return this;
  },
  // Removes element from list
  remove: function() {},
  // Sets current position to the first element of list
  front: function() {},
  // Sets current position to last element of list
  end: function() {},
  // Moves current position back one element
  prev: function() {},
  // Moves current position forward one element
  next: function() {},
  // Number of elements in list
  length: function() {},
  // Returns the current position in list
  currPos: function() {},
  // Moves the current position in list
  moveTo: function() {},
  // Returns element at current position
  getElement: function() {},
  // Returns true if the list contains an element
  contains: function() {}
};

module.exports = List;
