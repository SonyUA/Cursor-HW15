const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];

function getDivide(students) {
    let addSteam = [];
    const studentsInner = students.slice();
    const girl = [];
    const man = [];
    for (let i = 0; i < students.length; i++) {
        if (studentsInner[i].substr(-1) === "а") {
            girl.push(studentsInner[i]);
        } else if (studentsInner[i].substr(-1) !== "а") {
            man.push(studentsInner[i]);
        }
    }
    for (let b = 0; b < girl.length; b++) {
        addSteam.push([girl[b], man[b]]);
    }
    return addSteam;
}
let divide = getDivide(students); // Розділіть студентів на пари
let hwThreeBlock = document.createElement("div");
main.append(hwThreeBlock);
hwThreeBlock.innerHTML = `<b>Home Work - 4</b>
                        <p> ${divide.join(" | ")}</p>`;
