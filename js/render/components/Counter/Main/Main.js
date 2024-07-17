
import { CurrentValue } from "./CurrentValue/CurrentValue.js";
import { ProgressBarContainer } from "./ProgressBarContainer/ProgressBarContainer.js";
import { ButtonsContainer } from "./ButtonsContainer/ButtonsContainer.js";

export function Main() {
    const container = document.createElement("main");
    container.classList.add("main");

    container.append(
        CurrentValue(/*data.currentValue*/), 
        ProgressBarContainer(/*data*/), 
        ButtonsContainer()
    );

    return container;
}
