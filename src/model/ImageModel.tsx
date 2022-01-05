export type ImageModel = {
  id: string;
  href: string;
};

/* eslint-disable */
export function ImageModelsFromJson(json: Array<{ [key: string]: any }>) {
  const products: ImageModel[] = [];

  for (let index = 0; index < json.length; index++) {
    const item: ImageModel = {
      id: json[index]['product_image']['id'],
      href: json[index]['product_image']['href'],
    };
    products.push(item);
  }

  return products;
}
/* eslint-enable */
