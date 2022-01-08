import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        className='bg-amber-200 rounded-full'
        onClick={() => dispatch(decrementCartItem(idx))}
      >
        <FontAwesomeIcon icon={faMinus} />
      </Button>
      <span className='text-right'>{item.count}</span>
      <Button
        variant='light'
        className='bg-amber-200 rounded-full'
        onClick={() => dispatch(incrementCartItem(idx))}
      >
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </>
  );
};

export default BuildCountButtonsCell;
