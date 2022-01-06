import jwt from 'jsonwebtoken';

export function axiosConfig(accessToken: string, data: string) {
  if (accessToken === '' || accessToken === 'public') {
    return {
      method: 'post',
      url: 'https://prime-tarpon-84.hasura.app/v1/graphql',
      headers: {
        'X-Hasura-Role': 'public',
        'Content-Type': 'application/json',
      },
      data: data,
    };
  }

  const decoded: string | jwt.JwtPayload | null = jwt.decode(accessToken);

  /* eslint-disable */
  const jwtHeaders =
    decoded != null &&
    typeof decoded !== 'string' &&
    decoded['https://hasura.io/jwt/claims'];

  interface headers {
    [name: string]: any;
  }
  /* eslint-enable */

  const headers: headers = {};
  try {
    if (jwtHeaders['x-hasura-default-role'] === 'admin') {
      headers['x-hasura-admin-secret'] = jwtHeaders['x-hasura-admin-secret'];
    } else {
      headers['Authorization'] = `Bearer ${accessToken}`;
      headers['X-Hasura-Role'] = 'user';
    }
  } catch (error) {
    throw new Error(`${error}`);

    // console.log(error);
  }

  const config = {
    method: 'post',
    url: 'https://prime-tarpon-84.hasura.app/v1/graphql',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    data: data,
  };

  // console.log(config);
  return config;
}
