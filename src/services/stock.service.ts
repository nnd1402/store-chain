import { Product } from '../models/product';
import { ProductType } from '../enums/product-type';
import { Shop } from '../models/shop';
import { ShopType } from '../enums/shop-type';

export class StockService {
	addProductToShop(product: Product, shop: Shop): void {
		if (
			product.type === ProductType.Cigarette &&
			shop.type !== ShopType.CornerShop
		) {
			return;
		}

		if (
			product.type === ProductType.Medicine &&
			shop.type !== ShopType.Pharmacy
		) {
			return;
		}

		shop.addProduct(product);
	}
}
