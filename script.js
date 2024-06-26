async function getWeather(){
    const weatherRaw = await fetch(`https://api.weatherapi.com/v1/current.json?key=bf86763e117140ddb7993315242506&q=${searchWord}` , {mode: 'cors'});
    const weatherSorted = await weatherRaw.json();
    display(weatherSorted); 
}

let search = document.querySelector('.search');
let searchBtn = document.querySelector('.btn');
let searchWord = '';

search.addEventListener('input' , (e) => {
    searchWord = e.target.value;
})

async function display(weatherSorted){
    
    let container = document.createElement('div');
    container.classList.add('container');
    let h1 = document.createElement('h1');
    h1.innerText = `Location: ${weatherSorted.location.name}, ${weatherSorted.location.country}`;
    let p1 = document.createElement('p');
    p1.innerText = `Condition: ${weatherSorted.current.condition.text}`;
    let p2 = document.createElement('p');
    p2.innerText = `Date and Time: ${weatherSorted.location.localtime}`;
    let p3 = document.createElement('p');
    p3.innerText = `Temperature(degree celsius, farenheit): (${weatherSorted.current.temp_c}, ${weatherSorted.current.temp_f})`;
    container.appendChild(h1);
    container.appendChild(p2);
    container.appendChild(p1);
    container.appendChild(p3);
    let button = document.createElement('button');
    button.innerText = "Delete";
    button.addEventListener('click', ()=>{
        document.querySelector('.content').removeChild(container);
    })
    container.appendChild(button);
    document.querySelector('.content').appendChild(container);
}


searchBtn.addEventListener('click', getWeather);