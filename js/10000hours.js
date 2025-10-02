const startbutton = document.getElementById('start-button');

startbutton.addEventListener('click', ()=>{
  document.getElementById("text1").classList.add("a11y-hidden");
  if(document.getElementById("firstinput").value == "" || document.getElementById("secondinput").value == "") {
    alert ("잘못된 입력입니다.");
    return;
  }
  const firstinputadd = document.getElementById('firstinput').value;
  const secondinputadd = document.getElementById('secondinput').value;
  document.getElementById('firstmessage').innerText = firstinputadd;
  document.getElementById('secondmessage').innerText = Math.round(10000 / secondinputadd);
  const timelogo = document.getElementById("timelogo");
  timelogo.classList.remove("a11y-hidden");
  // 애니메이션 재실행을 위해 클래스 제거 후 재추가
  timelogo.style.animation = 'none';
  timelogo.offsetHeight; // reflow 강제
  timelogo.style.animation = null;
  setTimeout(() => {
    timelogo.classList.toggle("a11y-hidden");
  },2000);
  setTimeout(() => {
    document.getElementById("text1").classList.toggle("a11y-hidden");
  },2000);
  setTimeout(() => {
  document.getElementById("twobutton").classList.toggle("a11y-hidden");
  },2000);
})






