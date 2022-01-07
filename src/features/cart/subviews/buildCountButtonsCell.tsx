import Button from '@/components/buttons/Button';

import { ProductCountModel } from '@/model/ProductCountModel';
import { useAppDispatch } from '@/redux/hooks';

import { decrementCartItem, incrementCartItem } from '../cartSlice';

interface Props {
  item: ProductCountModel;
  idx: number;
}
const BuildCountButtonsCell = ({ item, idx }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <Button
        variant='light'
        className='rounded-full'
        onClick={() => dispatch(decrementCartItem(idx))}
      >
        -
      </Button>
      <span className='text-right'>{item.count}</span>
      <Button
        variant='light'
        className='rounded-full'
        onClick={() => dispatch(incrementCartItem(idx))}
      >
        +
      </Button>
    </>
  );
};

export default BuildCountButtonsCell;
