document.addEventListener("DOMContentLoaded",()=> {
  document.querySelectorAll(".button,.link-row").forEach(el=>{
    el.addEventListener("click",()=>{el.style.transform="scale(.99)";setTimeout(()=>el.style.transform="",120)});
  });
});