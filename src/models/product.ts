import { ProductType } from '../enums/product-type';

export class Product {
	type: ProductType;
	name: string;
	price: number;
	quantity: number;

	constructor(
		type: ProductType,
		name: string,
		price: number,
		quantity: number
	) {
		this.type = type;
		this.name = name;
		this.price = price;
		this.quantity = quantity;
	}
}
