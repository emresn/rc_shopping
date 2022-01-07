import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ProductCountModel } from '@/model/ProductCountModel';
import { useAppDispatch } from '@/redux/hooks';

import { removeCartItem } from '../cartSlice';

interface Props {
  item: ProductCountModel;
}

const BuildTotalPriceCell = ({ item }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <span> {`${item.product.price * item.count} $`}</span>

      <button
        className='absolute top-0 right-0 text-red-500'
        onClick={() => dispatch(removeCartItem({ id: item.product.id }))}
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </>
  );
};

export default BuildTotalPriceCell;
