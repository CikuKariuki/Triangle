function tracker() {
  var sideA=parseInt(document.getElementById("sideA").value);
  var sideB=parseInt(document.getElementById("sideB").value);
  var sideC=parseInt(document.getElementById("sideC").value);
  var side = [sideA, sideB, sideC];
  if (side[0] + side[1] <= side[2] || side[0] + side[2]<=side[1] || side[1] + side[2] <= side[0]){
    alert("That is not a triangle!");
  }else if(side[0] === side[1] && side[2] === side[1] && side[0] === side[2]){
    alert("That's an equilateral triangle");
  }else if (side[0]===side[1] || side[1]===side[2] || side[2]===side[0]){
    alert("That's an isosceles triangle");
  }else if(side[0]!== side[1] || side[2]!==side[1] || side[0]!==side[2]){
    alert("That's a scalene triangle")
  }
  else{
    alert("Please input values");
  }

}
