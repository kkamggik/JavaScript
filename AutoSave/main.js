document.addEventListener("DOMContentLoaded", () => {
    const SAVING_MESSAGE  = "Saving..."
    const SAVED_MESSAGE = "All changes saved."

    document.querySelectorAll(".autosave-message").forEach(el => el.textContent = SAVED_MESSAGE)
    document.querySelectorAll("[data-autosave-url]").forEach(inputField => {
        inputField.addEventListener("change", async () => {
            const name = inputField.getAttribute("name")
            const value = inputField.value
            const url = inputField.dataset.autosaveUrl;
            const autosaveMessage = inputField.closest(".container").querySelector(".autosave-message")

            const formData = new FormData()
            formData.append(name, value)
            autosaveMessage.classList.add("autosave-message--saving")
            autosaveMessage.textContent = SAVING_MESSAGE;

            // make a request
            // const response = await fetch(url, {
            //     method: "POST",
            //     body: formData
            // })

            autosaveMessage.classList.remove("autosave-message--saving")
            autosaveMessage.textContent = SAVED_MESSAGE;
        })
    })
})