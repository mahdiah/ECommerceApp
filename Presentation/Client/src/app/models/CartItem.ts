

export class CartItem {
  ProductId: number;
  Name: string;
  UnitPrice: number;
  Quantity: number;
  Total: number;

  constructor( productId: number,  name: string,  unitPrice: number,  quantity: number) {
    this.ProductId = productId;
    this.Name = name;
    this.UnitPrice = unitPrice;
    this.Quantity = quantity;
    this.Total = quantity * unitPrice;
  }
}
