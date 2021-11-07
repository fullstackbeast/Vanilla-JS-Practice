const daysElement = document.querySelector('#days');
const hoursElement = document.querySelector('#hours');
const minutesElement = document.querySelector('#minutes');
const secondsElement = document.querySelector('#seconds');

const elements = [secondsElement, minutesElement, hoursElement, daysElement];


const date = new Date();

const newYearDate = new Date(2022, 00, 01);

const difference = newYearDate - date.getTime();

const seconds = Math.floor(difference / 1000);
const minutes = Math.floor(difference / (60 * 1000));
const hours = Math.floor(difference / (60 * 60 * 1000));
const days = Math.floor(difference / (24 * 60 * 60 * 1000));

daysElement.textContent = days;
hoursElement.textContent = hours % 24;
minutesElement.textContent = minutes % 60;
secondsElement.textContent = seconds % 60;

setInterval(() => {

    if (difference <= 0) {
        console.log("Happy new year")
    }
    else {
        secondsElement.textContent = parseInt(secondsElement.textContent) - 1;

        if (parseInt(secondsElement.textContent) < 0) {
            setElementContent(minutesElement);
            secondsElement.textContent = 59;
        }
    }
}, 1000)

const setElementContent = element => {

    element.textContent = parseInt(element.textContent) - 1;

    if (element != daysElement) {

        if (parseInt(element.textContent) < 0) {

            setElementContent(elements[elements.indexOf(element) + 1])

            if (element == minutesElement) {
                element.textContent = 59;
            }

            else if (element == hoursElement) {
                element.textContent = 23;
            }
        }
    }


}

