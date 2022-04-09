function showModal(titleHTML, contentHTML, buttons) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
        <div class="modal__inner">
            <div class="modal__top">
                <div class="modal__title">${titleHTML}</div>
                <button class="modal__close" type="button">
                    <span class="material-icons">close</span>
                </button>
            </div>
            <div class="modal__content">
                ${contentHTML}
            </div>
            <div class="modal__bottom"></div>
        </div>
    `
    for (const btn of buttons) {
        const element = document.createElement("button");
        element.setAttribute("type", "button");
        element.classList.add("modal__button");
        element.textContent =  btn.label;

        element.addEventListener("click", ()=> {
            if (btn.triggerClose) {
                document.body.removeChild(modal)
            }
            btn.onClick(modal);
        })

        modal.querySelector(".modal__bottom").appendChild(element);   
    }
    modal.querySelector(".modal__close").addEventListener("click", () => {
        document.body.removeChild(modal);
    })
    document.body.appendChild(modal);

}

showModal("Sample Modal TItle", "<p>asndans naekfns jkdn snfjk sn ejkfnkj senfkjs</p>",
[
    {
        label: "Got it!",
        onClick: modal => {
            console.log("button clicked");
        },
        triggerClose: true
    }
]);