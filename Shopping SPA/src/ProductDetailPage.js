export default function ProductDetailPage( { $target, $id }) {
    const $product = document.createElement('div');
    $product.className = 'ProductDetailPage';
    $product.innerHTML = `<h1>상품 정보</h1>`;

    this.render = () => {
        $target.appendChild($product);
    }
}