
import { Counter } from "./components/Counter/Counter.js";

export function render() {
    const root = document.getElementById("root");
    root.innerHTML = "";
    root.append(Counter());
}