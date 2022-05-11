export default function SelectedLanguage(target) {
    this.element = document.createElement('div')
    this.element.className = 'SelectedLanguage';
    target.appendChild(this.element)

    this.state = {
        items: []
    }

    this.setState = (nextState) => {
        this.state = {
            ...this.state,
            ...nextState
        }
        if(this.state.items.length > 5) {
            this.state.items = this.state.items.slice(this.state.items.length-5, this.state.items.length)
        }
        this.render();
    }

    this.render = () => {
        if(this.state.items.length > 0) {
            this.element.style.display = 'block';
            this.element.innerHTML =  `
            <ul>
                ${(this.state.items).map(el => `
                    <li>${el}</li>
                `)}
            </ul>
            `
        }else{
            this.element.style.display = 'none';
            this.element.innerHTML = ``;
        }
    }
    this.render();
}