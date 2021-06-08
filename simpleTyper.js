class SimpleTyperClass {
    constructor(target, length, string, i) {
        this.target = target;
        this.length = length;
        this.string = string;
        this.i = i;
    }
    func() {
        let prom = new Promise((resolve) => {
            this.target.innerHTML += this.string.charAt(this.i);
            this.i++;
            if (this.i > this.string.length) {
                resolve(true);
                return;
            }
        });
        return prom;
    }

    timer() {
        setInterval(() => {
            this.func().then((a) => {
                console.log(a);
                if (a) {
                    clearInterval(this.timer);
                    return;
                }
            });
        }, this.length);
    }
}

function simpleTyper() {
    let targets = document.querySelectorAll('.target');

    let counter = 0;

    targets.forEach((target) => {
        let length = target.dataset.length;
        let string = target.dataset.string;
        let typer = new SimpleTyperClass(target, length, string, counter);
        typer.timer();
    })
}