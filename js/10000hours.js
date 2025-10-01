const startbutton = document.getElementById('start-button');

startbutton.addEventListener('click', ()=>{
  const firstinputadd = document.getElementById('firstinput').value;
  const secondinputadd = document.getElementById('secondinput').value;
  document.getElementById('firstmessage').innerText = firstinputadd;
  document.getElementById('secondmessage').innerText = 10000 / secondinputadd ;
})

