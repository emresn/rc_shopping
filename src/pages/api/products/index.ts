import type { NextApiHandler } from 'next';

import { fetchProducts } from '@/features/home/homeAPI';

const productsHandler: NextApiHandler = async (req, res) => {
  const responseData = await fetchProducts(req, res);

  res.json({ data: responseData });
};

export default productsHandler;
