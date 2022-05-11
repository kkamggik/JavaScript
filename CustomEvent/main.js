const myEvent = new Event("myCustomEvent");

document.addEventListener("myCustomEvent", e => {
    console.log(e);
})

document.dispatchEvent(myEvent);