const utils = require('../../src')

describe('omitKeys function is ok',() => {
  test("普通对象: {a:'a',b:[],c:null}, ",() => {
    expect(utils.omitKeys({a:'a',b:[],c:null})).toEqual({
      a:'a',
      c:null
    })
  })
})
