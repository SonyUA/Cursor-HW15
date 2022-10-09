/* Створити функцію getMaxDigit(number) – 
яка отримує будь-яке число та виводить
найбільшу цифру в цьому числі. 
Приклади: 1236 -> 6, 987 -> 9, 385 -> 8*/

function getMaxDigit(num) {
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
console.log(getMaxDigit("1234"));
