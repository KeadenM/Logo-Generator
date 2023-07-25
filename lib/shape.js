class Shape {
    constructor(fillColor, letters, textColor) {
        this.fillColor = fillColor;
        this.letters = letters;
        this.textColor = textColor;
    if (letters.lenth !=3) {
        this.letters = "ABC";
    } else {
        this.letters = letters;
        }
    }
}
class Triangle extends Shape {
    constructor(fillColor, letters, textColor) {
        super(fillColor, letters, textColor);
    }
    render() { 
        return `<sv width="300" height="300">
        <g>
        <polygon points="80,0 0, 200, 250, 370" fill="${this.fillColor}" />
        <text x="50" y="200" fill="${this.textColor}" font-size="100">${this.letters[0]}</text>
        </g>
        </svg>`;
    }
}
class Square extends Shape {
    constructor(fillColor, letters, textColor) {
      super(fillColor, letters, textColor);
    }
    render() {
      return `<svg width="300" height="200">
        <g>
         <rect x="0" y="0" width="200" height="200" fill="${this.fillColor}"/>
         <text x="5" y="130" font-size="100" fill="${this.textColor}">${this.letters}</text>
        </g>
      </svg>`;
    }
  }
  
  module.exports = { Shape, Triangle, Square, Circle };