//complete this code
class Rectangle {
    constructor(width, height){
        this._width = width;
        this._height = height;
    }

    get width(){
        return this._width;
    }

    get height(){
        return this._height
    }

    getArea(){
        return (this.width * this.height);
    }
  }

class Square extends Rectangle {
    
    constructor(height){
        super(height, height);
    }
        
    getPerimeter(){
        return (4 * this.height)
    }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
