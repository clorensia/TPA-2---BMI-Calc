const calculateBtn = document.getElementById('calculate-btn');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');

calculateBtn.addEventListener('click', () => {
    // Ambil nilai berat dan tinggi dari input
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);
    const bmi = weight / Math.pow(height / 100, 2);
    const roundedBmi = bmi.toFixed(1); 
})