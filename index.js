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
    return  e[i] === e[i+1] && this.countSides === 4
  }
  get area(){
    return this.sides[0] ** 2
  }
}
