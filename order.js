const toggle = document.getElementsByClassName("toggle");
const content = document.getElementsByClassName("Content");

for(let i=0; i<toggle.length; i++){
  toggle[i].addEventListener("mouseover", () => {
    console.log(content[i].style.height,
      content[i].scrollHeight);

      if(content[i].style.height != content[i].scrollHeight){
        content[i].style.height = content[i].scrollHeight + "px";
      } 
  })
}

for(let i=0; i<toggle.length; i++){
  toggle[i].addEventListener("mouseout", () => {
    console.log(content[i].style.height,
      content[i].scrollHeight);

      if(content[i].style.height = content[i].scrollHeight + "px"){
        content[i].style.height = "0px";
      } 
  })
}

const orderMainImage = document.getElementById("orderMainImage");
const orderSecMainImg0 = document.getElementById("orderSecMainImg0");
const orderSecMainImg00 = document.getElementById("orderSecMainImg00");

orderSecMainImg00.addEventListener("mouseover", () => {
  orderMainImage.src = 'Everyday-Bundle-Mocks-horizontal_1920x1281_crop_center.jpg.webp'
});
orderSecMainImg0.addEventListener("mouseover", () => {
  orderMainImage.src = 'Everyday-Bundle-Mocks-final_1920x1281_crop_center.jpg.webp'
});
orderMainImage.addEventListener("click", () => {
  orderMainImage.classList.toggle("zoomed")
});
orderSecMainImg0.addEventListener("click", () => {
  orderSecMainImg0.classList.toggle("zoomed")
});
orderSecMainImg00.addEventListener("click", () => {
  orderSecMainImg00.classList.toggle("zoomed")
});
