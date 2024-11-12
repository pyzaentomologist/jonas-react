import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCardPrice, getTotalCardQuantity } from './cartSlice';

function CartOverview() {
  const totalCardQuantity = useSelector(getTotalCardQuantity);
  const totalPriceCard = useSelector(getTotalCardPrice);

  if (!totalCardQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 uppercase text-stone-200 sm:px-6">
      <p className="space-x-4 text-sm font-semibold text-stone-300 md:text-base">
        <span>{totalCardQuantity} pizzas</span>
        <span>${totalPriceCard}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
