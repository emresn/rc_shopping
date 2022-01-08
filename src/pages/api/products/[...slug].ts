import type { NextApiHandler } from 'next';

import { fetchProducts } from '@/features/home/homeAPI';
import { generateRequestOptions } from '@/helpers/generateRequestOptions';

const productsHandler: NextApiHandler = async (req, res) => {
  const { slug } = req.query;
  const href = `.api/products/${slug}`.replace(',', '/');

  const options = generateRequestOptions(href);

  // http://localhost:3000/api/products/created_at&asc/limit&10/offset&10
  const responseData = await fetchProducts(req, res, options);
  res.json({ data: responseData, options: options });
};

export default productsHandler;
