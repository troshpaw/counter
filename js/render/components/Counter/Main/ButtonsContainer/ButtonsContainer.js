
import { ButtonIncrease } from "../../../Common/ButtonIncrease.js";
import { ButtonReset } from "../../../Common/ButtonReset.js";

export function ButtonsContainer(data) {
    const container = document.createElement("div");
    container.classList.add("buttons_container");

    container.append(
        ButtonIncrease(data), 
        ButtonReset(data.currentValue)
    );

    return container;
}