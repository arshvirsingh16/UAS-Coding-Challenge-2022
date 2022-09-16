function ptRow(n){
    if(n < 0){
        return "Invalid Value";
    }
    if(n == 0){
        return [1];
    }

        let pyramid = [];
    for(let row = 0; row < n; row++){
        let rowList = [];
        for(let column = 0; column <= row; column++){
            if(column == 0 || column == row) {
                rowList.push(1);
            }
            else{
                let topLeft = pyramid[row - 1][column - 1];
                let topRight = pyramid[row - 1][column];
                let newValue = topLeft + topRight;
                rowList.push(newValue);
            }
            
            pyramid[row] = rowList;
        }
        

    }
    return pyramid[n - 1];
}



console.log(ptRow(15));


