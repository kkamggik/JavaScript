export default function SearchInput(target, onChange) {
    this.element = document.createElement('form');
    this.element.className = 'SearchInput';
    this.state = '';
    target.appendChild(this.element)
    this.render = () => {
        this.element.innerHTML = `<input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요." value=${this.state}>`;
    }
    this.render();
    document.querySelector('.SearchInput').addEventListener('submit', (e) => {
        e.preventDefault();
    })
    document.querySelector('.SearchInput__input').addEventListener('keyup', (e) => {
        if(e.code!=='ArrowUp' && e.code!=='ArrowDown' && e.code!=='Enter'){
            onChange(e.target.value)
        }
    })
    document.querySelector('.SearchInput__input').focus();
}