export default function Suggestion(target, onSelect) {
    this.element = document.createElement('div');
    this.element.className = 'Suggestion';
    target.appendChild(this.element);

    this.state = {
        selectedIndex: 0,
        items : []
    }

    this.setState = (nextState) => {
        this.state = {
            ...this.state,
            ...nextState
        }
        this.render();
    }

    this.render = () => {
        const {selectedIndex, items} = this.state;
        console.log(items)
        if(items.length > 0) {
            this.element.style.display = 'block';
            this.element.innerHTML = `
            <ul>
                ${items.map((el, index) => 
                    `<li class="${index === selectedIndex ? "Suggestion__item--selected" : ''}" data-index=${index}>${el}</li>`
                ).join('')}
            </ul>
            `
        }else{
            this.element.style.display = 'none';
            this.element.innerHTML = ``;
        }
    }

    window.addEventListener('keyup', (e) => {
        if(this.state.items.length > 0){
            const lastIndex = this.state.items.length-1;
            if(e.code=='ArrowUp') {
                this.setState({selectedIndex : this.state.selectedIndex > 0 ? this.state.selectedIndex-1 : lastIndex})
            }
            else if(e.code=='ArrowDown') {
                this.setState({selectedIndex : this.state.selectedIndex < lastIndex ? this.state.selectedIndex+1 : 0})
            }
            else if(e.code=='Enter') {
                onSelect(this.state.items[this.state.selectedIndex])
            }
        }
    })

    window.addEventListener('click', (e) => {
        const li = e.target.closest('li');
        if (li) {
            const {index} = li.dataset;
            onSelect(this.state.items[index])
        }
    })

    this.render();
}