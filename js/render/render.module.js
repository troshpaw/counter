
// import { setChangeDataCallback } from "../data/data.module.js";
import { Counter } from "./components/Counter/Counter.js";

const root = document.getElementById("root");

export function render() {
    root.innerHTML = "";
    root.append(Counter());
}