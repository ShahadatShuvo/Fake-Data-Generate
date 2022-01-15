const btnNewData = document.querySelector('#btnNewData');
const btnGenerate = document.querySelector('#btnGenerate');
const showResult = document.querySelector('#showResult');

var loadFile = function(event) {
    var output = document.getElementsByClassName('output');
    for (let i = 0; i < output.length; i++) {
        output[i].src = URL.createObjectURL(event.target.files[0]);
        output[i].onload = function() {
            URL.revokeObjectURL(output.src) // free memory
        }
    }
};

var info = '';

btnNewData.addEventListener('click', function() {
    info = faker.helpers.createCard();
    document.querySelector('#fullName').value = info.name;
    document.querySelector('#email').value = info.email;
    document.querySelector('#city').value = info.address.city;
    document.querySelector('#country').value = info.address.country;
    document.querySelector('#phone').value = info.phone;
    document.querySelector('#website').value = info.website;
})

console.log(`Developed by: HossAin Shuvo`);
console.log(`Facebook: https://www.facebook.com/hossain.shuvo.7860/`);

btnGenerate.addEventListener('click', function() {
    var Name = document.querySelector('#fullName').value;
    var Email = document.querySelector('#email').value;
    let City = document.querySelector('#city').value;
    let Country = document.querySelector('#country').value;
    let Phone = document.querySelector('#phone').value;
    let Website = document.querySelector('#website').value;

    console.log(info);
    const result = document.querySelector('#result');
    let printBtn = document.querySelector('#printBtn');
    printBtn.className = 'container d-block m-5 ';
    result.className = 'container d-block mt-5';
    showResult.innerHTML = `Name: ${Name} <br> Email: ${Email} <br> State: ${info.address.state} <br> City: ${City}
    <br> Country: ${Country}  <br> Phone: ${Phone} <br> Website: ${Website}`;

})