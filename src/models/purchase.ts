export class Purchase {
	amountBought: number;
	price: number;
	serialNumber: string;

	constructor(amountBought: number, price: number, serialNumber: string) {
		this.amountBought = amountBought;
		this.price = price;
		this.serialNumber = serialNumber;
	}
}
