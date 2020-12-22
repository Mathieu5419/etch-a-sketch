const container = document.querySelector('#container');
const bigSquare = document.querySelector('.bigSquare');
// bigSquare.setAttribute('style', 'display: flex, align-items: center,justify-content: center')
container.appendChild(bigSquare);
for (let index = 0; index < 16; index++) {
    
    const row = document.createElement('div');
    row.classList.add('row');
    row.setAttribute('style', 'height: 30px; display: inline-block');
        
        for (let index = 0; index < 16; index++) {
            
            const square = document.createElement('div');
            square.classList.add('square');
            square.setAttribute('style', 'height: 30px; width: 30px; border: 1px solid black ;background-color: cyan');
            row.appendChild(square); 
            
        }
    bigSquare.appendChild(row);
}

   

    