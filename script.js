const PI = 3.14;
let r = 6.378e+6;
let C = 2*PI*r;
let A = 4*PI*(r*r);
let V = (4/3)*PI*(r*r*r);

document.write("The radius of the sphere is "+ r + "<br>");
document.write("The circumference is " + C + "<br>");
document.write("The surface area is " + A + "<br>");
document.write("The volume is " + V + "<br>");