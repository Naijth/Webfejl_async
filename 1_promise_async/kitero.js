function buyApple1(num){
    if (num < 5)
        return Promise.resolve('Van ' + num + ' alma.');
    else
        return Promise.reject('Nincs ennyi almánk.');
}

const almaPromise = buyApple1(4);

