var rect = {
    x:2,
    y:3,
    endX:4,
    endY:6
};
console.log(rect["x"])
console.log(rect["endX"])
function showMessage (x, endX ){
    shiri = endX - x
    console.log("Ширина прямоугольника равна:" + shiri);
       
};
showMessage(rect.x,rect.endX)

console.log(rect["y"])
console.log(rect["endY"])
function showMessage (y, endY ){
    visot = endY - y
    console.log("Высота прямоугольника равна:" + visot);     
};
showMessage(rect.x,rect.y)

console.log(rect["x"])
console.log(rect["y"])
function showMessage (x, y ){
    S = x * y
    console.log("Площадь прямоугольника равна:" + S);     
};
showMessage(rect.x,rect.y)

console.log(rect["x"])
console.log(rect["y"])
function showMessage (x, y ){
    P = (x + y)*2
    console.log("Периметр прямоугольника равна:" + P);     
};
showMessage(rect.x,rect.y)


console.log(rect["x"])
console.log(rect["endX"])
function showMessage (x, endX ){
    shiri = endX - 3
    console.log("Измененая ширина прямоугольника:" + shiri);     
};
showMessage(rect.x,rect.endX)


console.log(rect["y"])
console.log(rect["endY"])
function showMessage (y, endY ){
    visot = endY - 4
    console.log("Измененая высота прямоугольника :" + visot);     
};
showMessage(rect.x,rect.y)