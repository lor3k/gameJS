const tree = document.querySelector('.tree');
const owl = document.querySelector('.owl');
const map = document.querySelector('#app');

const mapSize = {
    width: Number.parseFloat(map.offsetWidth),
    height: Number.parseFloat(map.offsetHeight),
};

const owlWidth = Number.parseFloat(owl.offsetWidth);
const owlHeight = Number.parseFloat(owl.offsetHeight);
const treeWidth = Number.parseFloat(tree.offsetWidth);
const treeHeight = Number.parseFloat(tree.offsetHeight);

let jump = 10;
let gameOn = true;
const timeStart = new Date().getTime();

const update = (event) => {
    const owlLeft = Number.parseFloat(owl.offsetLeft);
    const owlTop = Number.parseFloat(owl.offsetTop);

    switch (event.key) {
        case "ArrowLeft":
            owl.style.left = `${owlLeft - jump}px`;
            break;
        case "ArrowRight":
            owl.style.left = `${owlLeft + jump}px`;
            break;
        case "ArrowUp":
            owl.style.top = `${owlTop - jump}px`;
            break;
        case "ArrowDown":
            owl.style.top = `${owlTop + jump}px`;
            break;
    }
    if (owlLeft < 0) {
        owl.style.left = `0px`;
    }
    if (owlLeft > mapSize.width - owlWidth) {
        owl.style.left = `${mapSize.width - owlWidth}px`;
    }
    if (owlTop < 0) {
        owl.style.top = `0px`;
    }
    if (owlTop > mapSize.height - owlHeight) {
        owl.style.top = `${mapSize.height - owlHeight}px`;
    }
    if (
        (owlLeft >= tree.offsetLeft && owlLeft <= tree.offsetLeft + treeWidth) &&
        (owlTop >= tree.offsetTop && owlTop <= tree.offsetTop + treeHeight)
    ) {
        gameOn = false;
        alert(`${(new Date().getTime() - timeStart)/1000}s`);
    }
};

document.addEventListener('keydown', function (event) {
    if (gameOn) {
        update(event);
    }
});

