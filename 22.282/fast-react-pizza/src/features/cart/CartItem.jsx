import { useSelector } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';
import { DeleteItem } from './DeleteItem';
import { UpdateQuantity } from './UpdateQuantity';
import { getCurrentQuantityById } from './cartSlice';

export function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateQuantity id={pizzaId} currentQuantity={currentQuantity} />
        <DeleteItem id={pizzaId} />
      </div>
    </li>
  );
}
