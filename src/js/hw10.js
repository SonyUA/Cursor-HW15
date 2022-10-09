let hwTenBlock = document.createElement("div");
main.append(hwTenBlock);

function random_bg_color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}
let counter = 0;

function generateBlocks() {
    for (let i = 0; i < 25; i++) {
        const box = document.createElement("div");
        box.id = "colorBox";
        box.style.cssText = `
        width: 50px;
        height: 50px;
        background-color: ${random_bg_color()};`;
        hwTenBlock.prepend(box);
        hwTenBlock.style.cssText = `display: flex; flex-wrap:wrap;`;
    }
}

// generateBlocks();

function generateBlocksInterval(a) {
    if (counter === 0) {
        generateBlocks();
        counter += 1;
    } else {
        let box = hwTenBlock.querySelectorAll("#colorBox");
        for (let i = 0; i < box.length; i++) {
            box[i].style.backgroundColor = `${random_bg_color()}`;
        }
    }

    setTimeout(generateBlocksInterval, 1000);
}

generateBlocksInterval();
