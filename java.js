function calculateYield() {
  // Get the values from the form
  var crop = document.getElementById("crop").value;
  var area = document.getElementById("area").value;
  var yield = document.getElementById("yield").value;
  
  // Calculate the total yield
  var totalYield = area * yield;
  
  // Display the result
  document.getElementById("result").innerHTML = "The total yield for " + crop + " is " + totalYield + " kg.";
}
