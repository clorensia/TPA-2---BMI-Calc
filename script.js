    const calculateBtn = document.getElementById('calculate-btn');
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const bmiResultSummary = document.getElementById('bmi-result-summary');
    const bmiValue = document.getElementById('bmi-value');
    const bmiCategory = document.getElementById('bmi-category');
    const weightError = document.getElementById('weight-error');
    const heightError = document.getElementById('height-error');
    const categoryList = document.getElementById('category-list');

    const validateAndEnableButton = () => {
        const weightValue = weightInput.value;
        const heightValue = heightInput.value;

        const isWeightValid = weightValue.length >= 2 && parseFloat(weightValue) > 0;
        const isHeightValid = heightValue.length >= 3 && parseFloat(heightValue) > 0;
        
        weightError.classList.toggle('hidden', isWeightValid || weightValue.length === 0);
        heightError.classList.toggle('hidden', isHeightValid || heightValue.length === 0);

        if (isWeightValid && isHeightValid) {
            calculateBtn.disabled = false;
        } else {
            calculateBtn.disabled = true;
            bmiResultSummary.classList.add('hidden');
            bmiResultSummary.classList.remove('card-enter');
            Array.from(categoryList.children).forEach(item => {
                item.classList.remove('ring-2', 'ring-blue-500', 'scale-105');
            });
        }
    };

    weightInput.addEventListener('input', validateAndEnableButton);
    heightInput.addEventListener('input', validateAndEnableButton);

    calculateBtn.addEventListener('click', () => {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value);
        
        const bmi = weight / Math.pow(height / 100, 2);
        const roundedBmi = bmi.toFixed(1);

        let category, colorClass, categoryId;

        if (bmi < 18.5) {
            category = 'Kurus';
            colorClass = 'text-red-600';
            categoryId = 'category-underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = 'Normal';
            colorClass = 'text-green-600';
            categoryId = 'category-normal';
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = 'Gemuk';
            colorClass = 'text-orange-600';
            categoryId = 'category-overweight';
        } else {
            category = 'Obesitas';
            colorClass = 'text-purple-600';
            categoryId = 'category-obesity';
        }

        bmiValue.textContent = roundedBmi;
        bmiCategory.textContent = category;
        
        bmiValue.style.color = colorClass.split('-')[1];
        bmiCategory.style.color = colorClass.split('-')[1];

        Array.from(categoryList.children).forEach(item => {
            item.classList.remove('ring-2', 'ring-blue-500', 'scale-105');
            if (item.id === categoryId) {
                item.classList.add('ring-2', 'ring-blue-500', 'scale-105');
            }
        });

        bmiResultSummary.classList.remove('hidden');
        bmiResultSummary.classList.add('card-enter');
    });