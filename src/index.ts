import { Product } from './models/product';
import { ProductType } from './enums/product-type';
import { StockService } from './services/stock.service';
import { Shop } from './models/shop';
import { ShopType } from './enums/shop-type';
import { ShopService } from './services/shop.service';

function generateTwoBillsOnEveryShop() {
	const stockService = new StockService();

	const cornerShop = new Shop('Corner Shop', ShopType.CornerShop);
	const cornerShopService = new ShopService(cornerShop);

	const pharmacy = new Shop('Pharmacy', ShopType.Pharmacy);
	const pharmacyShopService = new ShopService(pharmacy);

	const supermarket = new Shop('Supermarket', ShopType.Supermarket);
	const supermarketShopService = new ShopService(supermarket);

	const cigarette = new Product(ProductType.Cigarette, 'Cigarette', 100, 6);
	const drink = new Product(ProductType.Drink, 'Drink', 120, 2);
	const food = new Product(ProductType.Food, 'Food', 15, 3);
	const parkingTicket = new Product(
		ProductType.ParkingTicket,
		'ParkingTicket',
		2,
		5
	);
	const toy = new Product(ProductType.Toy, 'Toy', 690, 8);

	const products = [cigarette, drink, food, parkingTicket, toy];

	for (const product of products) {
		stockService.addProductToShop(product, cornerShop);
		stockService.addProductToShop(product, pharmacy);
		stockService.addProductToShop(product, supermarket);
	}

	cornerShopService.buy(cigarette, 5);
	cornerShopService.buy(drink, 2);
}

generateTwoBillsOnEveryShop();
