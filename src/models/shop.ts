import { Bill } from './bill';
import { Product } from './product';
import { ShopType } from '../enums/shop-type';

export class Shop {
	name: string;
	type: ShopType;
	stock: Product[];
	bills: Bill[];

	constructor(name: string, type: ShopType) {
		this.name = name;
		this.type = type;
		this.stock = [];
		this.bills = [];
	}

	addProduct(product: Product) {
		this.stock.push(product);
	}

	addBill(bill: Bill) {
		this.bills.push(bill);
	}
}
