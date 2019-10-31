function tracker() {
  var sideA=parseInt(document.getElementById("sideA").value);
  var sideB=parseInt(document.getElementById("sideB").value);
  var sideC=parseInt(document.getElementById("sideC").value);
  var side = [sideA, sideB, sideC];
  if (side[0] + side[1] <= side[2] || side[0] + side[2]<=side[1] || side[1] + side[2] <= side[0]){
    document.getElementById("display").innerHTML="That is not a triangle!";
  }else if(side[0] === side[1] && side[2] === side[1] && side[0] === side[2]){
    document.getElementById("display").innerHTML="That's an equilateral triangle";
  }else if (side[0]===side[1] || side[1]===side[2] || side[2]===side[0]){
  document.getElementById("display").innerHTML="That's an isosceles triangle"
  }else if(side[0]=== blank || side[1] === blank || side[2] === blank){
    document.getElementById("display").innerHTML="Please put in some numbers";
  }else {
    document.getElementById("display").innerHTML="That is a scalene triangle";
  }
}
