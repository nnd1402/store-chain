import { ProductType } from '../enums/product-type';
import { Bill } from '../models/bill';
import { Product } from '../models/product';
import { ProductWithSerial } from '../models/product-with-serial';
import { Purchase } from '../models/purchase';
import { Shop } from '../models/shop';

let id = 0;

export class ShopService {
	shop: Shop;

	constructor(shop: Shop) {
		this.shop = shop;
	}

	buy(product: Product, amount: number) {
		const amountBeforePurchase = product.quantity;

		if (product.quantity < amount) {
			throw new Error('Not enough products');
		}

		product.quantity -= amount;

		const billNumber = `${new Date().getFullYear()}${++id}`;
		const billDate = new Date();
		const purchase = new Purchase(amount, product.price, null);
		const bill = new Bill(billNumber, billDate, purchase);

		this.shop.addBill(bill);

		console.log('Bought product');
		console.log('Store type:', this.shop.type);
		console.log('Product type:', product.type);
		console.log('Product price:', product.price);
		console.log('Amount before purchase:', amountBeforePurchase);
		console.log('Amount after the purchase:', product.quantity);
		console.log('Bill creation date:', billDate);
		console.log();
	}
}
