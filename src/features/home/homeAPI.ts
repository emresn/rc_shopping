import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

import { initialRequestOptions } from '@/data/requestOptionsData';

import { RequestOptions } from '@/model/RequestOptions';

import { axiosConfig } from '../../configurations/axiosConfig';
import { getProductsQuery } from '../../queries/getProductsQuery';

/* eslint-disable */
export async function fetchProducts(
  req: NextApiRequest,
  res: NextApiResponse<any>,
  options?: RequestOptions
): Promise<{ [key: string]: any }> {
  const query = getProductsQuery(options ? options : initialRequestOptions);
  // console.log(query);

  // const { accessToken } = await getAccessToken(req, res, { refresh: true });
  const accessToken = 'public';
  const data = JSON.stringify({
    query: query,
    variables: {},
  });

  const config: { [key: string]: any } = axiosConfig(`${accessToken}`, data);

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    throw new Error(`${error}`);
  }
}
/* eslint-enable */
