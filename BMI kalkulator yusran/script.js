document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    console.log("Form submitted");
    
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    console.log("Weight:", weight);
    console.log("Height:", height);

    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        alert('Input tidak valid. Pastikan berat dan tinggi badan diisi dengan benar.');
        return;
    }

    const bmi = weight / (height * height);
    console.log("Calculated BMI:", bmi);
    
    const resultContainer = document.getElementById('result');
    
    resultContainer.textContent = `BMI Anda adalah ${bmi.toFixed(2)} (${getBMICategory(bmi)})`;
    resultContainer.classList.add('visible');
});

function getBMICategory(bmi) {
    if (bmi < 18.5) return 'Kurus';
    if (bmi < 24.9) return 'Normal';
    if (bmi < 29.9) return 'Gemuk';
    return 'Obesitas';
}
