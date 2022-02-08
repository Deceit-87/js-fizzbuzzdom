const container = document.querySelector('.container')

for (let i = 1; i < 101; i++){

    let div = document.createElement('div');
   
    div.classList.add('square')
    
    
    console.log(div);

    container.append(div);
i

    if  (i % 3 == 0 && i % 5 == 0) {
        div.append('FizzBuzz');
        div.classList.add('bkg-fizzbuzz')
    }
    else if (i % 3 == 0) {
    div.append('Fizz');
    div.classList.add('bkg-fizz')
    }
   else if  (i % 5 == 0) {
        div.append('Buzz');
        div.classList.add('bkg-buzz')
    }
    else {
        div.append(i);
        div.classList.add('bkg-standard')

    }
}

// se i è multiplo di 3 invece che numero scritta fizz
// se i è multiplo di 5 invece che numero scritta buzz
// multipli di 3 e 5 fizzbuz




