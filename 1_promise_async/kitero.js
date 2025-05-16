function buyApple1(num){
    if (num < 5)
        return Promise.resolve('Van ' + num + ' alma.');
    else
        return Promise.reject('Nincs ennyi almánk.');
}

function buyApple2(num){
    return new Promise((resolve, reject)=>{
        if (num < 5)
            resolve('Van ' + num + ' alma.');
        else
            reject('Nincs ennyi almánk.');
    })
}

function buyApple3(num){
    return new Promise((resolve, reject)=>{
        if (num < 5)
            setTimeout(()=>{resolve('Van ' + num + ' alma.')},1000);
        else
            setTimeout(()=>{reject('Nincs ennyi almánk.')},1000);
    })
}

const almaPromise = buyApple1(4);

console.log(almaPromise);
almaPromise.then(value=>{
    console.log(value);
})
console.log(almaPromise);

buyApple1(6).catch(error => (console.log(error)));

buyApple1(3).then(value=>{console.log(value)}).catch(error=>(console.log(error)));

buyApple2(2).then(value=>{console.log(value)}).catch(error=>(console.log(error)));

buyApple3(1).then(value=>{console.log(value)}).catch(error=>(console.log(error)));