function multiplyMatrices() {
    const matrixArows = parseInt(document.getElementById('matrixA-rows').value);
    const matrixAcols = parseInt(document.getElementById('matrixA-cols').value);
    const matrixBrows = parseInt(document.getElementById('matrixB-rows').value);
    const matrixBcols = parseInt(document.getElementById('matrixB-cols').value);

    if (matrixAcols !== matrixBrows) {
        alert("Cannot multiply matrices with these dimensions.");
        return;
    }

    const matrixA = [];
    const matrixB = [];

    // Populate matrix A
    for (let i = 0; i < matrixArows; i++) {
        matrixA[i] = [];
        for (let j = 0; j < matrixAcols; j++) {
            matrixA[i][j] = parseInt(prompt(`Enter value for A[${i}][${j}]`));
        }
    }

    // Populate matrix B
    for (let i = 0; i < matrixBrows; i++) {
        matrixB[i] = [];
        for (let j = 0; j < matrixBcols; j++) {
            matrixB[i][j] = parseInt(prompt(`Enter value for B[${i}][${j}]`));
        }
    }
    
    // Multiply matrices
    const resultMatrix = multiply(matrixA, matrixB);

    // Display result
    displayResult(resultMatrix);
}

function multiply(matrixA, matrixB) {
    const result = [];
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const colsB = matrixB[0].length;

    for (let i = 0; i < rowsA; i++) {
        result[i] = [];
        for (let j = 0; j < colsB; j++) {
            result[i][j] = 0;
            for (let k = 0; k < colsA; k++) {
                result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }

    return result;
}

function displayResult(resultMatrix) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "<h2>Result Matrix:</h2>";
    resultMatrix.forEach(row => {
        resultDiv.innerHTML += row.join(' ') + '<br>';
    });
}
