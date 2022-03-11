import {routeChange} from './router.js';

export default function ProductList( {$target, initialState}) {
    const $list = document.createElement('ul');
    $target.appendChild($list);

    this.state = initialState;

    this.setState = nextState => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
        if(!this.state) return;
        $list.innerHTML = 
        `
            ${this.state.map(product => 
            `
                <li class="Product" data-product-id=${product.id}>
                    <img src="${product.imageUrl}">
                    <div class="product__info">
                        <div>${product.name}</div>
                        <div>${product.price}</div>
                    </div>
                </li>
            `
            ).join('')}
        `
    }
    this.render();

    $list.addEventListener('click', (e) => {
        const $li = e.target.closest('li')
        const {productId} = $li.dataset

        if(productId) {
            routeChange(`/web/products/${productId}`)
        }
    })
}