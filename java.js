function calculateYield() {
  // Get the input values
  var crop = document.getElementById("crop").value;
  var area = document.getElementById("area").value;
  var yield = document.getElementById("yield").value;

  // Preprocess the data

  // Scale the numerical features
  area = scaler.transform(area);
  yield = scaler.transform(yield);

  // Encode the categorical features
  crop = encoder.transform(crop);

  // Convert the input values to an array
  var input = [crop, area, yield];

  // Use the model to make a prediction
  var prediction = model.predict(input);

  // Convert the prediction back to the original scale
  prediction = scaler.inverse_transform(prediction);

  // Display the result
  document.getElementById("result").innerHTML = "Total yield: " + prediction + "kg";
}
