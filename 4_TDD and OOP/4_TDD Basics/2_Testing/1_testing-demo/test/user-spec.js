const {expect} = require('chai')
const User = require('../class/user')

describe("Person", () => {
    let alex;
  
    beforeEach(() => {
      alex = new Person("Alex");
    });
  
    afterEach(() => {
      alex = null;
    })
  
    describe("constructor", () => {
      it("should set the name property to the given name argument", () => {
        expect(alex.name).to.eq("Alex");
      });
    });
  });