import { getAccessToken } from '@auth0/nextjs-auth0';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

import { productsQuery } from './queries/getProduct';
import { axiosConfig } from '../../configurations/axiosConfig';
import { RequestOptions } from '../../model/RequestOptions';

/* eslint-disable */
export async function fetchProducts(
  req: NextApiRequest,
  res: NextApiResponse<any>,
  options: RequestOptions
): Promise<{ [key: string]: any }> {
  const query = productsQuery(options);
  // console.log(query);

  const { accessToken } = await getAccessToken(req, res, { refresh: true });
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
