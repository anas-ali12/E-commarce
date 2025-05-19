const miniConsoleImg = document.getElementById("miniConsoleImg");
const audioConsoleImg = document.getElementById("audioConsoleImg");
const photoConsoleImg = document.getElementById("photoConsoleImg");
const videoConsoleImg = document.getElementById("videoConsoleImg");
const MonogramConsoleImg = document.getElementById("MonogramConsoleImg");

miniConsoleImg.addEventListener("mouseover", () => {
  miniConsoleImg.src = 'Everyday-Bundle-Mocks-horizontal_1920x1281_crop_center.jpg.webp';
});
miniConsoleImg.addEventListener("mouseout", function () {
  miniConsoleImg.src = 'Everyday-Bundle-Mocks-final_1920x1281_crop_center.jpg.webp';
});

audioConsoleImg.addEventListener("mouseover", () => {
  audioConsoleImg.src = 'Consoles_TravelerBracket1_Monogram_May2020_4561_30a35bd4-01b4-44db-894a-e06162d8ab77_1920x1280_crop_center.jpg.webp';
});
audioConsoleImg.addEventListener("mouseout", () => {
  audioConsoleImg.src = 'Packaging_TravelerClosedBracket1_Monogram_May20204517_d3899632-1a43-425f-a16a-1d5b968810c7_1920x1280_crop_center.jpg.webp';
});

photoConsoleImg.addEventListener("mouseover", () => {
  photoConsoleImg.src = 'Consoles_StudioBracket1_Monogram_May2020_4558_53685b21-b09f-45b0-85a2-180d6acfafac_1920x1280_crop_center.jpg.webp'
});
photoConsoleImg.addEventListener("mouseout", () => {
  photoConsoleImg.src = 'Packaging_StudioClosedBracket1_Monogram_May20204507_548446cb-17c9-4fc2-8b12-ae1b1a308a7e_1920x1280_crop_center.jpg.webp';
});

videoConsoleImg.addEventListener("mouseover", () => {
  videoConsoleImg.src = 'Consoles_MasterBracket1_Monogram_May2020_4555_1920x1280_crop_center.jpg.webp';
});
videoConsoleImg.addEventListener("mouseout", () => {
  videoConsoleImg.src = 'Packaging_MasterClosedBracket1_Monogram_May20204494_1920x1280_crop_center.jpg.webp';
});

MonogramConsoleImg.addEventListener("mouseover", () => {
  MonogramConsoleImg.src = 'Monogram_Keyboard_2_878639a5-2865-4c4f-a21e-498f3a3db3b8_1920x1080_crop_center.jpg.webp';
});
MonogramConsoleImg.addEventListener("mouseout", () => {
  MonogramConsoleImg.src = 'Monogram_Keyboard_Multipad-v2_1920x1300_crop_center.png.webp';
});
