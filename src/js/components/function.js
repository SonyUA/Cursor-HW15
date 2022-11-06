export function getMaxDigit(num) {
    let hwTwoBlock = document.createElement("div");
    hwTwoBlock.id = "twoBlock";
    main.append(hwTwoBlock);
    const numInner = parseInt(num);
    let maxNum = "";
    if (numInner) {
        let a = String(num);
        maxNum = Math.max(...a);
        document.getElementById("twoBlock").innerHTML = `<p><b>Відповідь: </b>Отримано число  <span>${numInner}</span> , найбільша цифра в цьому числі  --  <span>${maxNum}</span></p>`;
    } else {
        document.getElementById("twoBlock").innerHTML = "Отримано не число??";
        console.log("Це не число!!!");
    }

    hwTwoBlock.innerHTML = `<b>Home Work - 3</b>
            <p>Найбільшa цифра в цьому числі <span>${numInner}</span> дорівнює ${maxNum}</p>`;
    return maxNum;
}
export function getDivide(students) {
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
