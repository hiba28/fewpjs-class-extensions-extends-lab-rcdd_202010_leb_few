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
    if(this.countSides !== 4) return
    return
      this.sides[0] === this.sides[1] &&
      this.sides[0] === this.sides[2] &&
      this.sides[0] === this.sides[3] &&if ( !Array.isArray( this.sides ) ) return;
    if ( this.count !== 4 ) return;
    let side1 = this.sides[ 0 ]
    let side2 = this.sides[ 1 ]
    let side3 = this.sides[ 2 ]
    let side4 = this.sides[ 3 ]
    return ( ( side1 === side2 ) && ( side1 === side3 ) && ( side1 === side4 ) )

  }
  get area(){
    return this.sides[0] ** 2
  }
}
