let result = document.querySelector('.result');
document.querySelectorAll('.bttn').forEach((botton)=>{
botton.addEventListener('click', ()=>{
    result.value += botton.innerHTML;
})
});
document.querySelector('.s').addEventListener('click', ()=>{
    result.value = '';
});
document.querySelector('.stt').addEventListener('click',()=>{
    result.value = eval(result.value);
});