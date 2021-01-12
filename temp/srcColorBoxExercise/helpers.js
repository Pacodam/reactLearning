

function randCol(){
    return `rgb(${randomGen(255)},${randomGen(255)},${randomGen(255)})`;
}


function randomGen(max){

    return Math.floor(Math.random() * max);

}

export {randCol};