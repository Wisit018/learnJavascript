// วิธีทำให้ข้อมูลไปโชว์ใน console ของ browser
// console.log('Hello World') 

// let X = 2;// ตัวแปร X มีค่าเท่ากับ 2
// let Y = 3;// ตัวแปร Y มีค่าเท่ากับ 3
// let Z = X + Y;// ตัวแปร Z มีค่าเท่ากับ X + Y
// console.log(Z); // แสดงค่าตัวแปร X ใน console

// a1 = 3 + 2; // ตัวแปร a1 มีค่าเท่ากับ 3 + 2
// a2 = 3 - 2; // ตัวแปร a2 มีค่าเท่ากับ 3 - 2
// a3 = 3 * 2; // ตัวแปร a3 มีค่าเท่ากับ 3 * 2
// a4 = 3 / 2;// ตัวแปร a4 มีค่าเท่ากับ 3 / 2
// a5 = 3 % 2;// ตัวแปร a5 มีค่าเท่ากับ 3 % 2
// a6 = 3 ** 2;// ตัวแปร a6 มีค่าเท่ากับ 3 ** 2

// x = 10;
// x = + 5;
// console.log(x);

//=====================================================================================================

// let x = 10; // true
// let y = 5; // false

// let a1 = x > y; // true
// let a2 = x < y; // false

// let a3 = x >= y; // true
// let a4 = x <= y; // false

// let a5 = x == y; // false
// let a6 = x === y; // false



// let p = true;
// let q = false;

// let a1 = p && q; // false
// let a2 = p || q; // true    
// let a3 = !p; // false 


//=====================================================================================================

// // ตรวจสอบเงื่อนไข
// let score = 50;

// if(score >= 80){
//     console.log('Grade A');
// }else if(score >= 70){
//     console.log('Grade B');
// }else if(score >= 60){
//     console.log('Grade C');
// }else if(score >= 50){
//     console.log('Grade D');
// }else{
//     console.log('Grade F');
// }
//=====================================================================================================


// // วนลูป
// for(let i = 1; 1 <= 12; i++){ // วนลูป 12 รอบ
//     if( i % 2 === 0){ // ถ้า i หาร 2 ลงตัว    
//         continue; // ข้ามไป
//     }
//     let answer = i ** 2; // หาค่า i ยกกำลัง 2
//     console.log(i); // แสดงค่า i ใน console
// }

//=====================================================================================================
// // สร้างฟังค์ชั่น หาพื้นที่พีรามิด
// function getPyramidArea(){
//     let length = 2;
//     let width = 2;
//     let height = 3;
//     let baseArea = length * width;
//     let pyramidVolume = (1/3) * baseArea * height;
    
// // ให้แสดงผลลัพธ์ใน console
//     console.log(pyramidVolume);
// }

// // เรียกใช้ฟังค์ชั่น
// getPyramidArea();   
// getPyramidArea();   
// getPyramidArea();   
//=====================================================================================================

// // สร้างฟังค์ชั่น หาพื้นที่พีรามิด แบบไม่กำหนดค่า
// function getPyramidArea(length, width, height){
//     let baseArea = length * width;
//     let pyramidVolume = (1/3) * baseArea * height;
//     console.log(pyramidVolume); // แสดงผลลัพธ์ใน console
    
// }
// // เรียกใช้ฟังค์ชั่น และกำหนดค่า
// getPyramidArea(2, 2, 3); // แสดงผลลัพธ์ 2 ครั้ง 
// getPyramidArea(3, 3, 3); // แสดงผลลัพธ์ 2 ครั้ง

//=====================================================================================================

//  function getPyramidArea(length, width, height){
//      let baseArea = length * width;
//      let pyramidVolume = (1/3) * baseArea * height;
//      return pyramidVolume; // คืนค่า pyramidVolume 
    
//  }

//  let area1 = getPyramidArea(2, 2, 3); // แสดงผลลัพธ์ 2 ครั้ง  
//  let area2 = getPyramidArea(3, 3, 3); // แสดงผลลัพธ์ 2 ครั้ง 

//  console.log("area1 ="+ arer1 + "area2 = "+ area2); // แสดงผลลัพธ์ใน console แบบ string concatenation
// console.log('Area 1 = ' + area1 + ', Area 2 = ' + area2); // แสดงผลลัพธ์ใน console แบบ string concatenation
//  console.log(`area1 = ${arer1} area2 = ${area2}`); // แสดงผลลัพธ์ใน console แบบ template string

//=====================================================================================================
// // เขื่อม class หน้า html กับ js
// let content2 = document.getElementById('content2'); // กำหนดค่าให้ตัวแปร content2

// let textHtml = '<b> texttest </b>'; // กำหนดค่าให้ตัวแปร textHtml
// textHtml += '<i>test2</i>';     // ใช้ += เพื่อเพิ่มค่าในตัวแปร textHtml
// content2.innerHTML = textHtml; // แสดงผลลัพธ์ใน html
//=====================================================================================================

// let discountButton = document.getElementById('discountButton'); // กำหนดค่าให้ตัวแปร discountButton
// let message = document.getElementById('message'); // กำหนดค่าให้ตัวแปร message

// function showMessage() {
//     message.innerHTML = 'ว่างายยยย'; // แสดงผลลัพธ์ใน html
// }

// // แสดงผลลัพธ์ใน html
// discountButton.addEventListener('click', showMessage); // เมื่อคลิกที่ปุ่ม discountButton ให้แสดงผลลัพธ์ใน html


//=====================================================================================================

// โปรแกรมสูตรคูณ
 let numberInput = document.getElementById('number-input');
 let runButton = document.getElementById('run-button');
 let output = document.getElementById('output');

 function printMultiply() {
    let number = Number(numberInput.value)
    let outputHtml = '';

    for (let i = 1; i <= 12; i++) {
        outputHtml += '<p>';
        outputHtml += number + ' x ' + i + ' = ' + (number * i);
        outputHtml += '</p>'; 
    }

    output.innerHTML = outputHtml;

    }

    runButton.addEventListener('click', printMultiply);