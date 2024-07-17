
import { Header } from "./Header/Header.js";
import { Main } from "./Main/Main.js";
// import { data } from "../../../data/data.module.js";

export function Counter() {
    const container = document.createElement("div");
    container.classList.add("counter");

    container.append(Header(/*data.maxValue*/), Main(/*data*/));

    return container;
}