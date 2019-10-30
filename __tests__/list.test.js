const { default: List } = require('../build/list.js');

describe("List", () => {
  it("should have a constructor function", () => {
    const list = new List();
    expect(list).toBeDefined();
  });

  describe("#append", () => {
    let list;

    beforeEach(() => {
      list = new List();
    });

    it("should be defined", () => {
      expect(list.append).toBeDefined();
      expect(list.length).toBeDefined();
    });

    it("should append items to the data store", () => {
      list.append(3);
      list.append('hello');
      expect(list.dataStore.length).toEqual(2);
      expect(list.listSize).toEqual(2);
    });

    it("should append items to the end of the data store", () => {
      list.append(2);
      list.append(5);
      list.append('hello');
      expect(list.dataStore[2]).toEqual('hello');
    });

  });

  describe("#find", () => {
    let list;

    beforeEach(() => {
      list = new List();
      list.append('first');
      list.append('second');
      list.append('third');;
    });

    it("should be defined", () => {
      expect(list.find).toBeDefined();
    });

    it("should return the position of the desired element", () => {
      expect(list.find('second')).toEqual(1);
    });

    it("should return -1 if the element is not found", () => {
      expect(list.find('not here')).toEqual(-1);
    });
  });


  describe("#remove", () => {
    let list;

    beforeEach(() => {
      list = new List();
      list.append('first');
      list.append('second');
      list.append('third');
    });

    it("should be defined", () => {
      expect(list.remove).toBeDefined();
    });

    it("should remove the element at the given position", () => {
      const result = list.remove('second');

      expect(result).toBe(true);
      expect(list.listSize).toEqual(2);
      expect(list.dataStore).toEqual(['first', 'third']);
    });

    it("should return false if the element is not removed", () => {
      const result = list.remove('something else');

      expect(result).toBe(false);
      expect(list.listSize).toEqual(3);
      expect(list.dataStore).toEqual(['first', 'second', 'third']);
    });
  });


  describe("#length", () => {
    let list;

    beforeEach(() => {
      list = new List();
      list.append('first');
      list.append('second');
      list.append('third');
    });

    it("should be defined", () => {
      expect(list.length).toBeDefined();
    });

    it("should return the number of elements in the list", () => {
      expect(list.length()).toEqual(3);
    });

    it("should update the list was modified", () => {
      list.append('fourth');
      expect(list.length()).toEqual(4);
    });
  });
});
