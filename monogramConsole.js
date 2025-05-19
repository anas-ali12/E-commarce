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
const audioOrderSecMainImg4 = document.getElementById("myVideo");

audioOrderSecMainImg1.addEventListener("mouseover", () => {
  audioOrderMainImage.src = 'Monogram_Keyboard_Multipad-v2_1920x1300_crop_center.png.webp';
});
audioOrderSecMainImg2.addEventListener("mouseover", () => {
  audioOrderMainImage.src = 'Monogram_Keyboard_2_878639a5-2865-4c4f-a21e-498f3a3db3b8_1920x1080_crop_center.jpg.webp';
});
audioOrderSecMainImg3.addEventListener("mouseover", () => {
  audioOrderMainImage.src = 'Monogram_Keyboard_3_f3864a5d-ce5d-4abd-8c9f-b1f0cae7dcb5_1920x1080_crop_center.jpg.webp';
});
audioOrderSecMainImg4.addEventListener("mouseover", () => {
  audioOrderMainImage.src = '7eae6ec636da49f28d6aea5bc6c74958.HD-1080p-7.2Mbps-26762552.mp4';
});
