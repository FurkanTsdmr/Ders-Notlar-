document.getElementById('fetchButton').addEventListener('click',fetchUser);

function fetchUser(){
    // Arka plan rengini değiştir
    changeBackgroundColor();

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data =>{
        const userList = document.getElementById('userList');
        userList.innerHTML='';

        data.forEach( user => {
            const userDiv = document.createElement('div');
            userDiv.className = 'user';
            userDiv.textContent=user.name;

            userList.appendChild(userDiv);

            setTimeout(() => {
                userDiv.classList.add('visible');
            },100 * data.indexOf(user));
        });
    })
    .catch(error => console.log('Hata:' , error));

}


function changeBackgroundColor(){
    const body = document.body;
    const color = ['#ffdddd','#ddffdd','#ffffdd','#ddffff'];
    let index = 0;

    const interval = setInterval(() => {
        body.style.backgroundColor = color[index];
        index ++;

        if(index >= color.length){
            clearInterval(interval);
            setTimeout(() => {
                body.style.backgroundColor='';
            },500);

        }
    },500);
}



const slider = document.getElementById('slider');
const sliderValue = document.getElementById('sliderValue');
const message = document.getElementById('message');


slider.addEventListener('input',function(){
    sliderValue.textContent=this.value;

    if( this.value == 0 ){
        message.textContent = 'Sıfır!';
    }else if ( this.value == 50){
        message.textContent = 'Orta Değer !';
    }else if( this.value == 100){
        message.textContent = 'En Yüksek Değerdesiniz !';
    }else{
        message.textContent='';
    }

})

