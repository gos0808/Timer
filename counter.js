class Counter {
    constructor(countNumberInput, playButton, pauseButton, callbacks) {
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }
        this.countNumberInput = countNumberInput;
        this.playButton = playButton;
        this.pauseButton = pauseButton;

        this.playButton.addEventListener('click', this.play);
        this.pauseButton.addEventListener('click', this.pause);
    }

    play = () => {
        if (this.onStart) {
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.interval = setInterval(this.tick, 50);
    };

    pause = () => {
        clearInterval(this.interval);
        this.playButton.disabled = false;
    };

    tick = () => {
        if (this.timeRemaining <= 0) {
            this.pause();
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
            this.playButton.disabled = true;
            this.timeRemaining = this.timeRemaining - 0.05;

            if (this.onTick) {
                this.onTick(this.timeRemaining);
            }
        }
    };

    get timeRemaining() {
        return parseFloat(this.countNumberInput.value);
    }

    set timeRemaining(time) {
        this.countNumberInput.value = time.toFixed(2);
    }
};