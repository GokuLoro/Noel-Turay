let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let myH1 = document.GetElementById("myH1");

document.getElementById("mySubmit").onclick = function(){
  myH1 = document.getElementById("firstName").value;
  myH1 = document.getElementById("lastName").value;
  document.getElementById("myH1").textContent = 'Hello ${firstName} ${lastName} and welcome to our website';

  if("firstName" === "Noel"){
    document.getElementById("label2").textContent = 'You are gay ${firstName} ${lastName};
  }
  else{
    cument.getElementById("label2").textContent = 'You are not gay ${firstName} ${lastName};
    
