import { Controller, Post, Body,Get, Param, Patch} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productServices: ProductsService) { }

    @Post('create')
    addProduct(
        @Body('title') productTitle: string,
        @Body('description') productDesc: string,
        @Body('price') productPrice: number,
        ) {

        const generatedProduct = this.productServices.insertProduct(
            productTitle,
            productDesc,
            productPrice,
            );
        return {product:generatedProduct};
    }

    @Get('all')
    getAllProducts(){
        const Products = this.productServices.getAllProducts()
        return {products:Products}
    }

    @Get(':id')
    getSingleProduct(
        @Param('id') id:string,
        ){
        const Product = this.productServices.getProduct(id)
        return Product
    }

    // @Patch(':id')
    // updateProduct (
    //     @Param('id') id:string, 
    //     @Body('title') productTitle: string,
    //     @Body('description') productDesc: string,
    //     @Body('price') productPrice: number,
    // ){
    //     const product =  this.productServices.
    // }
}
