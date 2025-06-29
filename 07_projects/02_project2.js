const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  if (height === '' || height === 0 || isNaN(height)) {
    result.innerHTML = `<p style="background-color: red;padding: 5px; font-size: 20px"; position: absolute>Please enter a valid height: ${height}</p>`;
  } else if (weight === '' || weight === 0 || isNaN(weight)) {
    result.innerHTML = `<p style="background-color: red;padding: 5px; font-size: 20px"; position: absolute>Please enter a valid weight: ${weight}</p>`;
  } else {
    result.innerHTML = `<p>BMI: ${height + weight / 2}`;
  }
});
