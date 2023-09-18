let result = '';
let memory = 0;

function appendToResult(value) {
    result += value;
    document.getElementById('result').value = result;
}

function clearResult() {
    result = '';
    document.getElementById('result').value = result;
}

function calculateResult() {
    try {
        result = eval(result);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function storeInMemory() {
    memory += parseFloat(result) || 0;
    clearResult();
}

function recallFromMemory() {
    result = memory.toString();
    document.getElementById('result').value = result;
}

function clearMemory() {
    memory = 0;
    clearResult();
}
