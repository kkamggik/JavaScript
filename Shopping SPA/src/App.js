import ProductDetailPage from './ProductDetailPage.js';
import ProductListPage from './ProductListPage.js';
import CartPage from './CartPage.js';
import {init} from './router.js';

export default function App( { $target }){
    this.route = () => {
        const { pathname } = location;
        $target.innerHTML = '';

        console.log(pathname);
        if(pathname === '/web/') {
            new ProductListPage({ $target }).render();
        }else if(pathname.indexOf('/web/products/') === 0){
            const [,,,id] = pathname.split('/');
            console.log(id);
            new ProductDetailPage({$target, id}).render(); 
        }
    }
    init(this.route);
    this.route();

    window.addEventListener('popstate', this.route)
}