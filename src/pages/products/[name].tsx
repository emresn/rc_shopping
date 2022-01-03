import { useRouter } from 'next/router';
import React from 'react';

import { exampleProduct } from '@/data/Products';

import { ShowProduct } from '@/components/ShowProduct';

const CategoryView = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div>
      <h3>{name}</h3>
      <ShowProduct product={exampleProduct} index={0} />
    </div>
  );
};

export default CategoryView;
