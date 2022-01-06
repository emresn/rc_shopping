import { RequestOptions } from '@/model/RequestOptions';

export function generateProductsApiLink(options: RequestOptions) {
  // return `./api/products/limit&8`;
  const sortStr =
    options.sort && options.direction
      ? `${options.sort}&${options.direction}`
      : '';
  const categoryStr = options.category ? `/category&${options.category}` : '';
  const limitStr = options.limit ? `/limit&${options.limit}` : '';
  const offsetStr = options.offset ? `/offset&${options.offset}` : '';

  const href = `../api/products/${sortStr}${categoryStr}${limitStr}${offsetStr}`;

  return href;
}
