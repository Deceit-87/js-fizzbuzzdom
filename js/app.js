const container = document.querySelector('.container')

for (let i = 1; i < 101; i++){

    let div = document.createElement('div');
   
    div.classList.add('square')
    
    
    console.log(div);

    container.append(div);
    const fizz = i
    const buzz = i
    const fizzBuzz = i


    if  (fizzBuzz % 3 == 0 && fizzBuzz % 5 == 0) {
        div.append("FizzBuzz");
        div.classList.add('bkg-fizzbuzz')
    }
    else if (fizz % 3 == 0) {
    div.append("Fizz");
    div.classList.add('bkg-fizz')
    }
   else if  (buzz % 5 == 0) {
        div.append("Buzz");
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




