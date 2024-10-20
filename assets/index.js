const cities =[
    'Москва', 
    'Сочи', 
    'Владивосток', 
    'Архангельск'
]; 
let temp = []; 
let maxTemp = document.getElementById('maxTemp');
let minTemp = document.getElementById('minTemp');
let result = document.getElementById('result');

for (let i = 0; i < cities.length; i++) {
    let cityTemp = prompt(`Введите температуру для города ${cities[i]}`);
    temp.push(Number(cityTemp));
    
}
console.log(temp);

for (let i = 0; i < cities.length; i++) {
    let li = document.createElement(`li`);
    li.innerText = (`Температура в городе ${cities[i]}: ${temp[i]} ℃`);
    result.appendChild(li);
};


const max = Math.max(...temp);
maxTemp.innerText = (`Максимальна темпаратура ${max} ℃`);

const min = Math.min(...temp);
minTemp.innerText = (`Минимальная темпаратура ${min} ℃`);

