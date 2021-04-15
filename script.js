
/*a funtion that alert the usuary if the  */
function escandalotron3() {
  let num1, num2, num3;
  num1 = Number(prompt("Type number 1"));
  //validation that number 1 is a number
  if (typeof num1 === "string" || isNaN(num1)) {
    alert("Error typing number1, please type a number");
  } else if (num1 != null) {
    //validation that number 2 is a number
    num2 = Number(prompt("Type number2: "));
    if (typeof num2 === "string" || isNaN(num2)) {
      alert("Error typing number2, please type a number");
    } else if (num1 != null && num2 != null) {
      //validation that number 3 is a number
      num3 = Number(prompt("Type number3: "));
      if (typeof num3 === "string" || isNaN(num3)) {
        alert("Error typing number3, please type a number");
      } else {
        
      }
    }
  }
 //validation that num1,num2 & nume aren't empty
  if (num1 != null && num2 != null && num2 != null) {
    //first action, tha noise its not that loud
    if (num1 + num2 + num3 < 30 && num1 + num2 + num3 > 0) {
      alert("People are whispering");
      alert(`${num1 + num2 + num3}`);
      //noise is kind of normal
    } else if (num1 + num2 + num3 < 60 && num1 + num2 + num3 >= 30) {
      alert("there is a regular noise");
      //noise is kind of loud
    } else if (num1 + num2 + num3 >= 60) alert("To much noise!!");
  }
}
