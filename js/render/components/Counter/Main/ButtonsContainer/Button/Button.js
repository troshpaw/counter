
export function Button(tittle, onClickhandler) {
    const container = document.createElement("button");
    container.innerText = tittle;
    // console.log(onClickhandler);
    container.addEventListener("click", onClickhandler);

    return container;
}