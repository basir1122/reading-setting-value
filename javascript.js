let myPara = document.getElementById("myPara");
let btn1 = document.getElementById("btn1");
let output = document.getElementById("output");
let inPutText = document.getElementById("inPutText");
let btn2 = document.getElementById("btn2");
let outputNew = myPara.textContent;
let setNew = inPutText.value;

function getValve() {
  output.textContent = " 'Current text is : " + outputNew + "'";
}

function setValue() {
  if (setNew.trim() === "") {
    output.textContent = "Please enter Someting! ";
  } else {
    myPara.textContent = setNew;
    output.textContent = "Update Success ";
  }
}