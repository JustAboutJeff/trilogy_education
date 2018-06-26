import uid from "./uid"

describe("uid", function() {
  it("exports a function", function() {
    expect(typeof uid).toEqual("function")
  })

  it("returns a unique string for each invocation", function() {
    const first = uid()
    const second = uid()
    expect(typeof first).toEqual("string")
    expect(typeof second).toEqual("string")
    expect(first).not.toEqual(second)
  })
})
