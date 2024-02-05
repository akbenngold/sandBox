// function uploadImage() {
//   const fileInput = document.getElementById("uploadInput");

//   const imageContainer = document.getElementById("imageContainer");

//   //   check if file is selected
//   if (fileInput.files.length > 0) {
//     const file = fileInput.files[0];
//     // check if file is an image
//     if (file.type.match("image.*")) {
//       const reader = new FileReader();

//       reader.onload = function (e) {
//         const img = new Image();

//         img.src = e.target.result;

//         img.width = 200;

//         imageContainer.innerHTML = "";

//         imageContainer.appendChild(img);
//       };
//       reader.readAsDataURL(file);
//     } else {
//       alert("please select an image");
//     }
//   } else {
//     alert("please select a file");
//   }
// }

const imageContainer = document.getElementById("imageContainer");
console.log(imageContainer);
