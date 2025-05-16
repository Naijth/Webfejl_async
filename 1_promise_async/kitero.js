function buyApple1(num){
    if (num < 5)
        return Promise.resolve('Van ' + num + ' alma.');
    else
        return Promise.reject('Nincs ennyi almánk.');
}

const almaPromise = buyApple1(4);

console.log(almaPromise);
almaPromise.then(value=>{
    console.log(value);
})
console.log(almaPromise);

buyApple1(6).catch(error => (console.log(error)));

buyApple1(3).then(value=>{console.log(value)}).catch(error => (console.log(error)));