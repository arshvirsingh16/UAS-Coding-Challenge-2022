const ptRow = (n) => {
    if(n < 0){
        return [];
    }
    if(n == 0){
        return [1];
    }

        let pyramid = []; //initializing main array(triangle)
    for(let row = 1; row <= n; row++){
        let rowList = [];//each time the row variable implements, it will create a new row
        for(let column = 0; column <= row; column++){ //create a "column" for each row depending on the row count
            if(column == 0 || column == row) { //will add a 1 to the first and last column
                rowList.push(1);
            }
            else{
                let topLeft = pyramid[row - 1][column - 1]; //finds the number that is above(to the left) of the wanted value
                let topRight = pyramid[row - 1][column]; //finds the number that is above(to the right) of the wanted value
                let newValue = topLeft + topRight; //adds the top left/right to form the new value
                rowList.push(newValue);//adds the new value
            }
            
            pyramid[row] = rowList; //adds the array to pyramid
        }
        

    }
    return pyramid[n];// bc index for the traingle starts at 0, have to return n-1 row
}
console.log(ptRow(5));

document.getElementById("enterButton").onclick = () => {
    var nthInt = document.getElementById('intText').value;
    let nthRow = ptRow(nthInt);
    let display = document.getElementById('display');
    display.textContent = ` ${nthRow}`;
    }

    

