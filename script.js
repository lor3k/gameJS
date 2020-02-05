config = {
    jump: 40,
};

(function (config) {
    const {jump} = config;
    const tree = document.querySelector('.tree');
    const owl = document.querySelector('.owl');
    const map = document.querySelector('#app');

    const mapSize = {
        width: parseFloat(map.offsetWidth),
        height: parseFloat(map.offsetHeight),
    };

    const owlWidth = parseFloat(owl.offsetWidth);
    const owlHeight = parseFloat(owl.offsetHeight);
    const treeWidth = parseFloat(tree.offsetWidth);
    const treeHeight = parseFloat(tree.offsetHeight);

    let gameOn = true;
    const timeStart = Date.now();

    const update = (event) => {
        const owlLeft = parseFloat(owl.offsetLeft);
        const owlTop = parseFloat(owl.offsetTop);

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
            owl.style.left = '0px';
        }
        if (owlLeft > mapSize.width - owlWidth) {
            owl.style.left = `${mapSize.width - owlWidth}px`;
        }
        if (owlTop < 0) {
            owl.style.top = '0px';
        }
        if (owlTop > mapSize.height - owlHeight) {
            owl.style.top = `${mapSize.height - owlHeight}px`;
        }
        if (
            (owlLeft >= tree.offsetLeft && owlLeft <= tree.offsetLeft + treeWidth) &&
            (owlTop >= tree.offsetTop && owlTop <= tree.offsetTop + treeHeight)
        ) {
            gameOn = false;
            const playTime = `${(Date.now() - timeStart)/1000}s`;
            alert(playTime);
        }
    };

    document.addEventListener('keydown', function (event) {
        if (gameOn) {
            update(event);
        }
    });
}(config));

