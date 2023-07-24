interface Item {
  namee: string;
  pricee: number;
}

class Stock<T> {
  protected _objects: T[] = [];
  add(obj: T): void {
    this._objects.push(obj);
  }
  // T is Product
  // keyof T => 'name' | 'price'
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}

let stock = new Stock<Item>();
stock.add({ namee: 'a', pricee: 1 });
stock.find('namee', 'a');
stock.find('pricee', 1);
// stock.find('nonExistingProperty', 1); // this cause error
