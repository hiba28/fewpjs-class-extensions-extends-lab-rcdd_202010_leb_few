// Your code here
class Polygon {
  constructor(sides){
    this.sides = sides
  }
  get countSides(){
    return this.sides.length
  }
  get perimeter(){
    return this.sides.reduce((acc,curr) => acc+curr)
  }
}
class Triangle extends Polygon{
  get isValid(){
    return this.countSides === 3
  }
}
class Square extends Polygon{
  get isValid(){
    return this.side[0] === this.side[1] && this.side[1] === this.side[2] && this.side[2] === this.side[3] && this.side[3] === this.side[4] && this.countSides === 4
  }
  get area(){
    return this.sides[0] ** 2
  }
}
