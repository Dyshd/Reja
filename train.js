// H-TASK: 

// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

function getPositive(arr) {
  return arr.filter(x => x > 0).join('');
}
console.log(getPositive([1, -4, 2])); 





// TASK G:

// Yagona parametrga ega function tuzing.
// Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
// Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

// MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
// Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
// Va bu 21 soni arrayning tarkibidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadi.


// function getHighestIndex(arr) {
//     let max = arr[0];
//      let index = 0;
//       for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//             index = i;
//         }
//       }
//     return index;
// }
// console.log(getHighestIndex([5, 21, 12, 8]))

// // TASK F

// // Yagona string argumentga ega findDoublers nomli function tuzing
// // Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa
// // true yokida false natija qaytarsin.

// // MASALAN: findDoublers("hello"); natija true qaytadi. Sababi ikki marotaba takrorlangan 'll' harfi mavjud!

// // function findDoublers(harf) {
// //     const set = new Set(harf);
// //     if (set.size !== harf.length) {
// //       return true; 
// //     } else {
// //       return false;
// //     }
// //   };
  
// // console.log(findDoublers("black"));


// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba buling", // 0-20
//     "togri boshliq tanlang va koproq hato qiling", // 20-30
//     "siz kuchli bulgan narsalarni qiling", //30-40
//     "yoshlarga investitsya qiling", //50-60
//     "endi dam oling, foydasi yuq endi", // 60
// ];

// function maslahatBering(a, callback){
//     if(typeof a !== "number") callback ("insert a number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <=30) callback(null,list[1]);
//     else if (a > 30 && a <=40) callback(null,list[2]);
//     else if (a > 40 && a <=50) callback(null,list[3]);
//     else if (a > 50 && a <=60) callback(null,list[4]);
//     else{
//         setInterval(function () {
//             callback(null, list[4]);
//         }, 5000);
//     }
// }

// // bu joyda parametr sfatida function kitebti callbeckga
// console.log("passed here 0");

// maslahatBering(65, (err, data) => {
//     if(err)console.log('ERROR:', err);
//     else {
//         console.log('javob:', data);
//     }
// });
// console.log("passd here 1");

// qwertyuiop

// Asynchronous function 
// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba buling", // 0-20
//     "togri boshliq tanlang va koproq hato qiling", // 20-30
//     "siz kuchli bulgan narsalarni qiling", //30-40
//     "yoshlarga investitsya qiling", //50-60
//     "endi dam oling, foydasi yuq endi", // 60
// ];

// async function maslahatBering(a){
//     if(typeof a !== "number") throw new Error("insert a number");
//     else if(a <= 20) return list[0];
//     else if (a > 30 && a <=40)  return list[2];
//     else if (a > 40 && a <=50)  return list[3];
//     else if (a > 50 && a <=60)  return list[4];
//     else if (a > 20 && a <=30)  return list[1];
//     else{
//         return new Promise((resolve, reject) => {
//             setTimeout(()=>{
//                 return list[5];
//             }, 5000);
//         });
//                                                                     // setTimeout(function () {
//                                                                     //     return list[5];
//                                                                     // }, 5000);
//     }
// }

                // then/catch

// console.log("passed here 0");
// maslahatBering(25).then(data => {
//     console.log('javob:', data)
// }).catch(err => {
//     console.log('ERROR:', err)
// });

                //async/await
// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
    
// }
// run();


//         // callback function
// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba buling", // 0-20
//     "togri boshliq tanlang va koproq hato qiling", // 20-30
//     "siz kuchli bulgan narsalarni qiling", //30-40
//     "yoshlarga investitsya qiling", //50-60
//     "endi dam oling, foydasi yuq endi", // 60
// ];

// function maslahatBering(a, callback){
//     if(typeof a !== "number") callback ("insert a number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <=30) callback(null,list[1]);
//     else if (a > 30 && a <=40) callback(null,list[2]);
//     else if (a > 40 && a <=50) callback(null,list[3]);
//     else if (a > 50 && a <=60) callback(null,list[4]);
//     else{
//         setTimeout(function () {
//             callback(null, list[5]);
//         }, 5000);
//     }
// }

// // bu joyda parametr sfatida function kitebti callbeckga
// console.log("passed here 0");

// maslahatBering(65, (err, data) => {
//     if(err)console.log('ERROR:', err);
//     else {
//         console.log('javob:', data);
//     }
// });
// console.log("passd here 1");







// // TASK G:

// // Yagona parametrga ega function tuzing.
// // Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
// // Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

// // MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
// // Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
// // Va bu 21 soni arrayning tarkibidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadi.











// function getHighestIndex (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > arr[0]) {
//             console.log(i);
//             return;
//         }
//     }
// }

// getHighestIndex([5,21,12,8]);











































