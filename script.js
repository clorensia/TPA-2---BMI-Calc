const calculateBtn = document.getElementById('calculate-btn');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');

calculateBtn.addEventListener('click', () => {
    // Ambil nilai berat dan tinggi dari input
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);
    const bmi = weight / Math.pow(height / 100, 2);
    const roundedBmi = bmi.toFixed(1); 

    let category, color, categoryId;
    if (bmi < 18.5) {
        category = 'Kurus';
        color = '#c2185b';
        categoryId = 'category-underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal';
        color = '#2e7d32';
        categoryId = 'category-normal';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Gemuk';
        color = '#f9a825';
        categoryId = 'category-overweight';
    } else {
        category = 'Obesitas';
        color = '#8e24aa';
        categoryId = 'category-obesity';
    }

})