
// import { ButtonIncrease } from "../../../Common/ButtonIncrease.js";
// import { ButtonReset } from "../../../Common/ButtonReset.js";
import { Button } from "./Button/Button.js";

export function ButtonsContainer() {
    const container = document.createElement("div");
    container.classList.add("buttons_container");

    container.append(Button("увеличить"), Button("сбросить"));

    return container;
}