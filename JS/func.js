const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissors');
let resul = document.getElementById('res');

rock.addEventListener('click', function(){
    const choices = ['r','p','s'];
    let computer = choices[Math.floor(choices.length * Math.random())];
    if(computer === choices[0]){
        
        resul.textContent = 'Draw!';
    }else if(computer === choices[1]){
        resul.textContent = 'You Lost!';
    }else{
        resul.textContent = 'You Win!';
    }
    console.log(computer);
}, false);
paper.addEventListener('click', function(){
    const choices = ['r','p','s'];
    let computer = choices[Math.floor(choices.length * Math.random())];
    if(computer === choices[1]){
        resul.textContent = 'Draw!';
    }else if(computer === choices[2]){
        resul.textContent = 'You Lost!';
    }else{
        resul.textContent = 'You Win!';
    }
    console.log(computer);
}, false);
scissor.addEventListener('click', function(){
    const choices = ['r','p','s'];
    let computer = choices[Math.floor(choices.length * Math.random())];
    if(computer === choices[2]){
        resul.textContent = 'Draw!';
    }else if(computer === choices[1]){
        resul.textContent = 'You Lost!';
    }else{
        resul.textContent = 'You Win!';
    }
    console.log(computer);
}, false);