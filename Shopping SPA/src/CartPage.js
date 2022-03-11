export default function CartPage( { $target }) {
    const $product = document.createElement('div');
    $product.className = 'CartPage';
    $product.innerHTML =  `<h1>장바구니</h1>`;

    this.render = () => {
        $target.appendChild($product);
    }
}