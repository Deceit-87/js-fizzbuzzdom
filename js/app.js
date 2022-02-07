const container = document.querySelector('.container')

for (let i = 1; i < 101; i++){

    let div = document.createElement('div');
   
    div.classList.add('square')
    div.append(i);
    
    console.log(div);

    container.append(div);

}


