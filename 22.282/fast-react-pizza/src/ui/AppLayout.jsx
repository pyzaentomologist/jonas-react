import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import { Header } from './Header';
import { Loader } from './Loader';

export function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <div className="overflow-y-scroll">
        <main className="mx-auto max-w-screen-md">
          {isLoading && <Loader />}
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}
