const audioOrderMainImage = document.getElementById("audioOrderMainImage");
const audioOrderSecMainImg1 = document.getElementById("audioOrderSecMainImg1");
const audioOrderSecMainImg2 = document.getElementById("audioOrderSecMainImg2");
const audioOrderSecMainImg3 = document.getElementById("audioOrderSecMainImg3");
const audioOrderSecMainImg4 = document.getElementById("audioOrderSecMainImg4");
const audioOrderSecMainImg5 = document.getElementById("audioOrderSecMainImg5");
const audioOrderSecMainImg6 = document.getElementById("audioOrderSecMainImg6");
const audioOrderSecMainImg7 = document.getElementById("audioOrderSecMainImg7");

audioOrderSecMainImg1.addEventListener("mouseover", () => {
  audioOrderMainImage.src = 'Packaging_TravelerClosedBracket1_Monogram_May20204517_d3899632-1a43-425f-a16a-1d5b968810c7_1920x1280_crop_center.jpg.webp';
});
audioOrderSecMainImg2.addEventListener("mouseover", () => {
  audioOrderMainImage.src = 'Consoles_TravelerBracket1_Monogram_May2020_4561_30a35bd4-01b4-44db-894a-e06162d8ab77_1920x1280_crop_center.jpg (1).webp';
});
audioOrderSecMainImg3.addEventListener("mouseover", () => {
  audioOrderMainImage.src = 'Copyof20230521_MonogramCC_CharcoalAudioConsole_05_1920x1280_crop_center.jpg.webp';
});
audioOrderSecMainImg4.addEventListener("mouseover", () => {
  audioOrderMainImage.src = 'Consoles_CoreBracket1_Monogram_May2020_4578_951991ae-2174-420d-9549-212e4b0d5d95_1920x1280_crop_center.jpg.webp';
});
audioOrderSecMainImg5.addEventListener("mouseover", () => {
  audioOrderMainImage.src = 'Consoles_DialBracket1_Monogram_May2020_4575_8bf241a5-911f-4b8e-9c91-daabd19701d7_1920x1280_crop_center.jpg (1).webp';
});
audioOrderSecMainImg6.addEventListener("mouseover", () => {
  audioOrderMainImage.src = 'Consoles_SliderBracket1_Monogram_May2020_4565_6accbb28-3f92-4365-a37c-db8caeee06d0_1920x1280_crop_center.jpg.webp';
});
audioOrderSecMainImg7.addEventListener("mouseover", () => {
  audioOrderMainImage.src = 'Consoles_KeysBracket1_Monogram_May2020_4571_7131e520-b413-4461-a395-6ffa66cee1d0_1920x1280_crop_center.jpg.webp';
});

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

audioOrderMainImage.addEventListener("click", () => {
  audioOrderMainImage.classList.toggle("zoomed")
});
audioOrderSecMainImg1.addEventListener("click", () => {
  audioOrderSecMainImg1.classList.toggle("zoomed")
});
audioOrderSecMainImg2.addEventListener("click", () => {
  audioOrderSecMainImg2.classList.toggle("zoomed")
});
audioOrderSecMainImg3.addEventListener("click", () => {
  audioOrderSecMainImg3.classList.toggle("zoomed")
});
audioOrderSecMainImg4.addEventListener("click", () => {
  audioOrderSecMainImg4.classList.toggle("zoomed")
});
audioOrderSecMainImg5.addEventListener("click", () => {
  audioOrderSecMainImg5.classList.toggle("zoomed")
});
audioOrderSecMainImg6.addEventListener("click", () => {
  audioOrderSecMainImg6.classList.toggle("zoomed")
});
audioOrderSecMainImg7.addEventListener("click", () => {
  audioOrderSecMainImg7.classList.toggle("zoomed")
});
