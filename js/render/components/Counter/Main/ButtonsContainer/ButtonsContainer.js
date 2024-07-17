
import { increment } from "../../../../../data/data.module.js";
import { Button } from "./Button/Button.js";

export function ButtonsContainer() {
    const container = document.createElement("div");
    container.classList.add("buttons_container");

    container.append(Button("увеличить", increment), Button("сбросить"));

    return container;
}