document.getElementById('convertButton').addEventListener('click', function () {
    const input = parseFloat(document.getElementById('lengthInput').value);
    const fromUnit = document.getElementById('fromUnitSelector').value;
    const toUnit = document.getElementById('toUnitSelector').value;

    if (isNaN(input)) {
        document.getElementById('result').textContent = 'Please enter a valid number.';
    } else {
        const result = convertLength(input, fromUnit, toUnit);
        document.getElementById('result').textContent = `${input} ${fromUnit} is approximately ${result.toFixed(2)} ${toUnit}.`;
    }
});

function convertLength(value, fromUnit, toUnit) {
    const conversions = {
        meter: 1,
        kilometer: 1000, 
        centimeter: 100,
        millimeter: 1000,
    };

    if (conversions.hasOwnProperty(fromUnit) && conversions.hasOwnProperty(toUnit)) {
        return value * (conversions[fromUnit] / conversions[toUnit]);
    } else {
        return NaN; // Invalid units
    }
}

  
