document.addEventListener('DOMContentLoaded', function () {
    var timer;

    class SimpleTyperClass {
        constructor(target, speed, string) {
            this.target = target;
            this.speed = speed;
            this.string = string;
            this.counter = 0;
        }

        typerFunc() {
            return new Promise((resolve) => {
                timer = setInterval(() => {
                    this.target.innerHTML += this.string.charAt(this.counter);
                    this.counter++;
                    if (this.counter > this.string.length) {
                        this.timerStop();
                        resolve()
                    }
                }, this.speed);
            });
        }

        timerStop() {
            clearInterval(timer);
        }
    }

    let targets = document.querySelectorAll('.typer-target');
    let codeImg = document.querySelector('.code-img');
    let typerCont = document.querySelector('.typer-cont');
    let closeImg = document.querySelector('.code-img .close');
    
    async function simpleTyper(targets) {

        for (let target of targets) {
            let speed = target.dataset.speed;
            let string = target.dataset.string;
            let typer = new SimpleTyperClass(target, speed, string);
            await typer.typerFunc()
        }
    }

    simpleTyper(targets).then(() => {
        new Promise((resolve) => {
            setTimeout(() => {
                typerCont.classList.add('hide');
                showImg();
            }, 2000);
            resolve();
        }).then(() => {
            codeImg.classList.add('show')
        })
    });

    closeImg.addEventListener('click', function () {
        codeImg.style.display = 'none';
        codeImg.classList.remove('show');
    })
});







