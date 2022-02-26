const template = document.createElement('template')
template.innerHTML = `
    <style>
        h3 {
            background-color: aqua;
        }
    </style>
    <div class="user-card">
        <img/>
        <div>
            <h3></h3>
            <div class="info">
                <p><slot name="email"/></p>
                <p><slot name="phone"/></p>
            </div>
            <button id="toggle-info">HIDE INFO</button>
        </div>
    </div>
`
class UserCard extends HTMLElement{
    constructor(){
        super()

        this.showInfo = true;

        this.attachShadow({ mode:"open" })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute("name")
        this.shadowRoot.querySelector('img').src = this.getAttribute("avatar")
    }

    toggleInfo() {
        this.showInfo = !this.showInfo
        if(this.showInfo == true){
            this.shadowRoot.querySelector(".info").style.display = "block"
            this.shadowRoot.querySelector("#toggle-info").innerText = "HIDE INFO"
        }else{
            this.shadowRoot.querySelector(".info").style.display = "none"
            this.shadowRoot.querySelector("#toggle-info").innerText = "SHOW INFO"
        }
    }

    connectedCallback(){
         this.shadowRoot.querySelector("#toggle-info").addEventListener("click", () => this.toggleInfo())
    }

    disconnectedCallback(){
        this.shadowRoot.querySelector("#toggle-info").removeEventListener();
   }

}
customElements.define("user-card", UserCard)