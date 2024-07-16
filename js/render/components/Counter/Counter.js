
import { Header } from "./Header/Header.js";
import { Main } from "./Main/Main.js";

export function Counter(data) {
    const container = document.createElement("div");
    container.classList.add("counter");

    container.append(Header(data.maxValue), Main(data));

    return container;
}