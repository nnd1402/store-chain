import { CustomerData } from './customer-data';
import { Purchase } from './purchase';

export class Bill {
	billNumber: string;
	createdAt: Date;
	boughtProducts: Purchase;

	constructor(billNumber: string, createdAt: Date, boughtProducts: Purchase) {
		this.billNumber = billNumber;
		this.createdAt = createdAt;
		this.boughtProducts = boughtProducts;
	}
}
