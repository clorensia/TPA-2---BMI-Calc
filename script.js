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

// Fungsi untuk memvalidasi input dan mengaktifkan/menonaktifkan tombol
const validateAndEnableButton = () => {
    const weightValue = weightInput.value;
    const heightValue = heightInput.value;

    // Periksa apakah input berat badan valid (minimal 2 digit dan bukan 0)
    const isWeightValid = weightValue.length >= 2 && parseFloat(weightValue) > 0;
    // Periksa apakah input tinggi badan valid (minimal 3 digit dan bukan 0)
    const isHeightValid = heightValue.length >= 3 && parseFloat(heightValue) > 0;
    
    // Tampilkan atau sembunyikan pesan kesalahan berat badan
    weightError.classList.toggle('hidden', isWeightValid);
    // Tampilkan atau sembunyikan pesan kesalahan tinggi badan
    heightError.classList.toggle('hidden', isHeightValid);

    // Jika kedua input valid, aktifkan tombol
    if (isWeightValid && isHeightValid) {
        calculateBtn.disabled = false;
    } else {
        // Jika tidak, nonaktifkan tombol dan sembunyikan hasil
        calculateBtn.disabled = true;
        bmiResultSummary.classList.add('hidden');
        categoryItems.forEach(item => item.classList.remove('active-category'));
    }
};

// Tambahkan event listener 'input' ke kedua input untuk validasi real-time
weightInput.addEventListener('input', validateAndEnableButton);
heightInput.addEventListener('input', validateAndEnableButton);