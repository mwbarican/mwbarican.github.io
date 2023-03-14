let productTotalPrice = 0;

function getTotalPrice() {
    const productType = document.querySelector('#productType');
    const productLine = document.querySelector('input[name="productLine"]:checked');
    const cornerUnitInput = document.getElementById('cornerUnits').value;
    const linearFootageValue = document.getElementById('linearFootage').value;
    let productValue = 0;
    let cornerUnitValue = 0;

    if (productType.value == 'wall-cabinets' && productLine.value == 'empire-standard') {
        productValue = 99.99 * linearFootageValue;
    } else if (productType.value == 'wall-cabinets' && productLine.value == 'kitchen-elite') {
        productValue = 179.00 * linearFootageValue;
    } else if (productType.value == 'wall-cabinets' && productLine.value == 'gold-star-plus') {
        productValue = 200.99 * linearFootageValue;
    } else if (productType.value == 'base-cabinets' && productLine.value == 'empire-standard') {
        productValue = 69.99 * linearFootageValue;
    } else if (productType.value == 'base-cabinets' && productLine.value == 'kitchen-elite') {
        productValue = 79.00 * linearFootageValue;
    } else if (productType.value == 'base-cabinets' && productLine.value == 'gold-star-plus') {
        productValue = 99.99 * linearFootageValue;
    } else if (productType.value == 'counter-tops' && productLine.value == 'empire-standard') {
        productValue = 30.99 * linearFootageValue;
    } else if (productType.value == 'counter-tops' && productLine.value == 'kitchen-elite') {
        productValue = 189.99 * linearFootageValue;
    } else if (productType.value == 'counter-tops' && productLine.value == 'gold-star-plus') {
        productValue = 212.99 * linearFootageValue;
    } else {
        return false;
    }

    if (productLine.value == 'empire-standard') {
        cornerUnitValue = cornerUnitInput * 50.99;
    } else if (productLine.value == 'kitchen-elite') {
        cornerUnitValue = cornerUnitInput * 79.99;
    } else if (productLine.value == 'gold-star-plus') {
        cornerUnitValue = cornerUnitInput * 89.99;
    } else {
        return false;
    }

    productTotalPrice = productValue + cornerUnitValue;
}

const form = document.querySelector('#kitchenCalculator');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    getTotalPrice();
    const resultsField = document.getElementById('totalResults');
    resultsField.value = productTotalPrice.toFixed(2);
});


//toggle visibility of cabinets text box
document.querySelector('#productType').onchange = function () {
    console.log(this.value);
    const cornerUnit = document.querySelector('.corner-units');
    const imgPath = './assets/img/';
    const imgTag = document.querySelector('.img-fluid');

    let imgSrc = (productType.value == 'wall-cabinets') ? imgPath + 'wall-cabinet.jpg' : (productType.value == 'base-cabinets') ? imgPath + 'base-cabinet.jpg' : (productType.value == 'counter-tops') ? imgPath + 'counter-top.jpg' : '';

    console.log(imgTag, imgSrc);
    imgTag.classList.add('fade-out'); // add fade-out class
    setTimeout(function () {
        imgTag.src = imgSrc;
        imgTag.classList.remove('fade-out'); // remove fade-out class after delay
        imgTag.classList.add('fade-in'); // add fade-in class
    }, 500);

    if (this.value == 'counter-tops' || this.value == '') {
        cornerUnit.classList.add('hidden');
        document.getElementById('cornerUnits').removeAttribute('required', '');
    } else {
        cornerUnit.classList.remove('hidden');
        document.getElementById('cornerUnits').setAttribute('required', '');
    }

}

function changeBorder() {
    const productLine = document.querySelector('input[name="productLine"]:checked');

    if (productLine.value == '' || productLine.value == 'empire-standard') {
        borderLine.classList.add('border-primary');
        borderLine.classList.remove('border-light');
        borderLine.classList.remove('border-warning');

    } else if (productLine.value == 'kitchen-elite') {
        borderLine.classList.add('border-light');
        borderLine.classList.remove('border-primary');
        borderLine.classList.remove('border-warning');
    } else {
        borderLine.classList.add('border-warning');
        borderLine.classList.remove('border-light');
        borderLine.classList.remove('border-primary');
    }
}

const borderLine = document.querySelector('.container');
const productLine = document.querySelectorAll('input[name="productLine"]');

productLine.forEach(button => {
    button.addEventListener('click', changeBorder);
});




