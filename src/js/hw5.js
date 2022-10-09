function getRandomArray(length, min, max) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (max - min) + min));
    }
    return arr;
}
const getArray = getRandomArray(15, 1, 100);
let hwFiveBlock = document.createElement("div");
main.append(hwFiveBlock);
hwFiveBlock.innerHTML = `<b>Home Work - 5</b> <p> ${getArray.join(" ")} --> масив випадкових цілих чисел </p>`;
