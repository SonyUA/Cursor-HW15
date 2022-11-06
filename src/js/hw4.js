import { getDivide } from "./components/function";
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

let divide = getDivide(students); // Розділіть студентів на пари
let hwThreeBlock = document.createElement("div");
main.append(hwThreeBlock);
hwThreeBlock.innerHTML = `<b>Home Work - 4</b>
<p> ${divide.join(" | ")}</p>`;
