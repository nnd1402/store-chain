import { Product } from './product';
import { ProductType } from '../enums/product-type';

export class ProductWithSerial extends Product {
	serialNumber: string;

	constructor(
		type: ProductType,
		name: string,
		price: number,
		quantity: number,
		serialNumber: string
	) {
		super(type, name, price, quantity);
		this.serialNumber = serialNumber;
	}
}
