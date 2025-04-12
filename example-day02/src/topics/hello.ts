const message = "Hello, world!";
const messageTH = "สวัสดีชาวโลก!";

function hello() {
  console.log("I am hello function from hello.ts file");
  console.log("ฉันคือฟังก์ชัน hello จากไฟล์ hello.ts");
}

function welcome() {
  console.log("I am welcome function from hello.ts file");
  console.log("ฉันคือฟังก์ชัน welcome จากไฟล์ hello.ts");
}

export { message, messageTH, hello, welcome };
