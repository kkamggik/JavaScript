import {request} from './api.js';
import ProductList from './ProductList.js';

export default function ProductListPage( { $target }) {
    const $product = document.createElement('div');
    $product.className = 'ProductListPage';
    $product.innerHTML =  `<h1>상품 목록</h1>`;

    this.setState = (nextState) => {
        this.state = nextState;
        productList.setState(this.state)
    }

    const fetchProducts = async() => {
        const products = await request('');
        this.setState(products);
    }

    const productList = new ProductList({ $target: $product, initialState: this.state});
    
    this.render = () => {
        $target.appendChild($product);
    }

    fetchProducts();
}