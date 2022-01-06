import { RequestOptions } from '@/model/RequestOptions';

export function getProductsQuery(options: RequestOptions) {
  const orderStr = `order_by: {${options.sort} : ${options.direction} }`;
  const limitStr = options.limit ? `,limit: ${options.limit}` : '';
  const offsetStr = options.offset ? `,offset: ${options.offset}` : '';
  const categoryStr = options.category
    ? `, where: {category: {name: {_eq: "${options.category}"}}}`
    : '';

  const query = `
  query GetProducts {
    product_product(${orderStr} ${limitStr} ${offsetStr} ${categoryStr}) {
      category {
        name
      }
      created_at
      description
      discount_price
      id
      images {
        image_id
        product_image {
          href
          id
        }
        id
      }
      is_active
      key
      price
      sales
      stock
      subtitle
      title
      updated_at
    }
  }
  `;
  // console.log(query);

  return query;
}
