describe("List data structure", function() {
  var ListClass = require('../src/list.js');

  it("should have a constructor function", function() {
    var list = new ListClass;
    expect(list).toBeDefined();
  });

  describe("append method", function() {
    var list;

    beforeEach(function() {
      list = new ListClass;
    });

    it("should be defined", function() {
      expect(list.append).toBeDefined();
    });

    it("should append items to the data store", function() {
      list.append(3);
      list.append('hello');
      expect(list.dataStore.length).toEqual(2);
      expect(list.listSize).toEqual(2);
    });

    it("should append items to the end of the data store", function() {
      list.append(2).append(5).append('hello');
      expect(list.dataStore[2]).toEqual('hello');
    });

  });

  describe("find method", function() {
    var list;

    beforeEach(function() {
      list = new ListClass;
      list.append('first').append('second').append('third');
    });

    it("should be defined", function() {
      expect(list.find).toBeDefined();
    });

    it("should return the position of the desired element", function() {
      expect(list.find('second')).toEqual(1);
    });

    it("should return -1 if the element is not found", function() {
      expect(list.find('not here')).toEqual(-1);
    });

  });

});
