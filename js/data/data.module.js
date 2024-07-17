
// import { render } from "../render/render.module.js";

export const data = {
    maxValue: 10,
    currentValue: 0
}

let changeDataCallback = function() {}

export function setChangeDataCallback(newCallback) {
    changeDataCallback = newCallback;
}

export function increment() {
    if (data.currentValue < data.maxValue) {
        data.currentValue = data.currentValue + 1;
    }

    changeDataCallback();
}

// setInterval(increment, 1000);