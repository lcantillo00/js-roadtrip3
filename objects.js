var square={
  width:3,
  height:4
};
console.log('heigth: '+square.height);
square.area= function (){
  return square.width* square.height};
console.log('area: '+square.area());
