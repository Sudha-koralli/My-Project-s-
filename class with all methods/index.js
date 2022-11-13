
const _sides = new WeakMap();
const _draw = new WeakMap();
class Rect{    // parent class       
    constructor(w,h,s) {
        this.w =w;  
        this.h = h;
        _sides.set(this, s);
        _draw.set(this, function () {
            console.log("sides are:" + _sides.get(this));
        });
        

    }
    showDraw() {
       console.log("sides are:" + _sides.get(this));
    }
    moveBy() {
        console.log(_draw.get(this)(_sides.get(this)));
    }
    Area() {  //instance method
        console.log(`${this.w}*${this.h}`);
    }
    ShapeOfRectangle() {
        console.log("this is rectangle");
    }
    get area() {  //getter method to read values
        return this.w * this.h;
    }
    set area(area) {  //setter method to set values
        this.w = Math.sqrt(area);
        this.h = Math.sqrt(area);
    }
    static equals(a, b) {  //static method 
        return a.w * a.h === b.w * b.h;
    }
    static print(w, h) {  //static method
        return w === h;
    }
}
//Inheritence 
class Square extends Rect{  // child class;
    constructor(w, h,color) {
        super(w, h);
        this.color = color;
    }
    Shape() {
        super.Shape();
        console.log("this is square");
    }

}
let Square1 = new Square(20, 10, "Green");
const myRect1 = new Rect(2, 2, 6);
const myRect2 = new Rect(2, 5, 4);
console.log(myRect1.ShapeOfRectangle());
console.log(Square1.ShapeOfRectangle());
console.log(myRect1);
console.log(Square1);
console.log(Rect.equals(myRect1, myRect2));
console.log(Rect.print(6,6))
myRect1.area=25;
console.log(myRect1.area);
myRect1.Area();