const test = require("jest")
const {Shape, Triangle, Square, Circle} = require('./shapes')

describe('triangle', () => {
    it("should create a triangle shape", () => {
        const shape = new Triangle('fff', "fff", "fff")
        expect(shape.render()).toEqual(`<svg width="300" height="200">
      <g>
      <polygon points="80,0 0,200 250,370" fill="fff"/>
      <text x="35" y="170" font-size="65" fill="fff">fff</text>
      </g>
      </svg>`)
    })
})

describe('square', () => {
    it("should create a square shape", () => {
        const shape = new Square('fff', "fff", "fff")
        expect(shape.render()).toEqual(`<svg width="300" height="200">
      <g>
       <rect x="0" y="0" width="200" height="200" fill="fff"/>
       <text x="5" y="130" font-size="100" fill="fff">fff</text>
      </g>
    </svg>`)
    })
})


describe('circle', () => {
    it("should create a circle shape", () => {
        const shape = new Circle('fff', "fff", "fff")
        expect(shape.render()).toEqual(`
      <svg width="300" height="200">
          <g>
              <circle cx="100" cy="100" r="100" fill="fff"/>
              <text x="5" y="130" font-size="100" fill="fff">fff</text>
          </g> 
      </svg>`)
    })
})