
export function Button(tittle, onClickhandler) {
    const container = document.createElement("button");
    container.innerText = tittle;
    container.addEventListener("click", onClickhandler);

    return container;
}