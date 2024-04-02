const countNumberInput = document.querySelector('#countNumber');
const playButton = document.querySelector('#play');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const counter = new Counter(countNumberInput, playButton, pauseButton,
    {
        onStart(totalDuration) {
            duration = totalDuration;
        },
        onTick(timeRemaining) {
            circle.setAttribute(
                'stroke-dashoffset',
                (perimeter * timeRemaining) / duration - perimeter
            );
        }
    }
)







