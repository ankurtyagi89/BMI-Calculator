const result = document.getElementById('result');
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const Height = parseInt(document.getElementById('Height').value);
    const Weight = parseInt(document.getElementById('Weight').value);

    const submit = (Weight / Height / Height) * 10000;
    result.innerHTML = `BMI = ${submit.toFixed(2)}`;
    
    if(submit > 18.6 && submit < 24.9) {
        result.style.color = 'green';
    }
    if(submit < 18.6 || submit > 24.9) {
        result.style.color = 'red';
    }
})
