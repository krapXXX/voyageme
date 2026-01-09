import type { ProductType } from "../../section/model/ProductType";

export default interface CartItem {
    product: ProductType,
    cnt: number
}
