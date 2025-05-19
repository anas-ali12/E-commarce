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

const audioOrderMainImage = document.getElementById("audioOrderMainImage");
const audioOrderSecMainImg1 = document.getElementById("audioOrderSecMainImg1");
const audioOrderSecMainImg2 = document.getElementById("audioOrderSecMainImg2");
const audioOrderSecMainImg3 = document.getElementById("audioOrderSecMainImg3");
const audioOrderSecMainImg4 = document.getElementById("audioOrderSecMainImg4");
const audioOrderSecMainImg5 = document.getElementById("audioOrderSecMainImg5");
const audioOrderSecMainImg6 = document.getElementById("audioOrderSecMainImg6");
const audioOrderSecMainImg7 = document.getElementById("audioOrderSecMainImg7");

audioOrderSecMainImg1.addEventListener("mouseover", () => {
  audioOrderMainImage.src = 'Packaging_StudioClosedBracket1_Monogram_May20204507_548446cb-17c9-4fc2-8b12-ae1b1a308a7e_1920x1280_crop_center.jpg.webp';
});
audioOrderSecMainImg2.addEventListener("mouseover", () => {
  audioOrderMainImage.src = 'Consoles_StudioBracket1_Monogram_May2020_4558_53685b21-b09f-45b0-85a2-180d6acfafac_1920x1280_crop_center.jpg.webp';
});
audioOrderSecMainImg3.addEventListener("mouseover", () => {
  audioOrderMainImage.src = 'Consoles_CoreBracket1_Monogram_May2020_4578_951991ae-2174-420d-9549-212e4b0d5d95_1920x1280_crop_center.jpg.webp';
});
audioOrderSecMainImg4.addEventListener("mouseover", () => {
  audioOrderMainImage.src = 'Consoles_DialBracket1_Monogram_May2020_4575_8bf241a5-911f-4b8e-9c91-daabd19701d7_1920x1280_crop_center.jpg (1).webp';
});
audioOrderSecMainImg5.addEventListener("mouseover", () => {
  audioOrderMainImage.src = 'Consoles_OrbiterHero_Monogram_May2020_4568_a3ddbab0-cedd-4282-9b08-a40ade52b59d_1920x1280_crop_center.jpg.webp';
});
audioOrderSecMainImg6.addEventListener("mouseover", () => {
  audioOrderMainImage.src = 'Consoles_KeysBracket1_Monogram_May2020_4571_7131e520-b413-4461-a395-6ffa66cee1d0_1920x1280_crop_center.jpg.webp';
});
audioOrderSecMainImg7.addEventListener("mouseover", () => {
  audioOrderMainImage.src = 'Charcoal-social-greyBG_1920x1280_crop_center.jpg.webp';
});

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
