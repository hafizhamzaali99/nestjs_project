import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
    products: Product[] = []

    insertProduct(title: string, desc: string, price: number) {
        const prodId = this.products.length + 1;
        const newProduct = new Product(prodId + '', title, desc, price)
        this.products.push(newProduct)
        return (this.products)
    }

    getAllProducts() {
        const Products = this.products
        return Products
    }

    getProduct(prodId: string) {
        const Product = this.findProduct(prodId)
        return (Product)
    }

    // updateProduct (prodId: string,title: string, desc: string, price: number){
    //     const Product = this.findProduct(prodId)

    // }

    private findProduct(prodId: string){
        const Product = this.products.find((prod) => prod.id === prodId)
        if (!Product) {
            throw new NotFoundException()
        }
        return (Product)
    }
}
