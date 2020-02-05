fetch("config.json")
    .then(response => response.json())
    .then((config) => {
        (function (config) {
            const {jump} = config;
            const tree = document.querySelector('.tree');
            const owl = document.querySelector('.owl');
            const map = document.querySelector('#app');

            const mapSize = {
                width: map.offsetWidth,
                height: map.offsetHeight,
            };

            const owlWidth = owl.offsetWidth;
            const owlHeight = owl.offsetHeight;
            const treeWidth = tree.offsetWidth;
            const treeHeight = tree.offsetHeight;

            let gameOn = true;
            let timeStart = Date.now();

            const update = (event) => {
                let owlLeft = owl.offsetLeft;
                let owlTop = owl.offsetTop;
                console.log(typeof owl.offsetLeft);

                console.log(`owleft${owl.offsetLeft} mapw${mapSize.width}`)

                switch (event.key) {
                    case "ArrowLeft":
                        owl.style.left = `${owl.offsetLeft - jump}px`;
                        owlLeft = owl.offsetLeft;
                        break;
                    case "ArrowRight":
                        owl.style.left = `${owl.offsetLeft + jump}px`;
                        owlLeft = owl.offsetLeft;
                        break;
                    case "ArrowUp":
                        owl.style.top = `${owl.offsetTop - jump}px`;
                        owlTop = owl.offsetTop;
                        break;
                    case "ArrowDown":
                        owl.style.top = `${owl.offsetTop + jump}px`;
                        owlTop = owl.offsetTop;
                        break;
                }

                if (owlLeft <= 0) {
                    owl.style.left = '0px';
                    return;
                }
                if (owlLeft + owlWidth > mapSize.width) {
                    owl.style.left = `${mapSize.width - owlWidth}px`;
                    return;
                }
                if (owlTop < 0) {
                    owl.style.top = '0px';
                    return;
                }
                if (owlTop + owlWidth > mapSize.height) {
                    owl.style.top = `${mapSize.height - owlHeight}px`;
                    return;
                }
                if (
                    (owlLeft >= tree.offsetLeft && owlLeft <= tree.offsetLeft + treeWidth) &&
                    (owlTop >= tree.offsetTop && owlTop <= tree.offsetTop + treeHeight)
                ) {
                    const playTime = `${(Date.now() - timeStart) / 1000}s. Play Again?`;
                    gameOn = confirm(playTime);
                    if (gameOn) {
                        reset();
                    }
                }
            };

            const reset = () => {
                timeStart = Date.now();
                owl.style.top = '0px';
                owl.style.left = owl.style.top = `${mapSize.height - owlHeight}px`;
            };

            document.addEventListener('keydown', function (event) {
                if (gameOn) {
                    update(event);
                }
            });
        }(config));
    });



