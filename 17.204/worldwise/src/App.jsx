import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Product } from "./pages/Product"
import { HomePage } from "./pages/HomePage"
import { Pricing } from "./pages/Pricing"
import { PageNotFound } from "./pages/PageNotFound"
import { AppLayout } from "./pages/AppLayout"
import { Login } from "./pages/Login";
import { CityList } from "./components/CityList"
import { CountryList } from "./components/CountryList"
import { City } from "./components/City"
import { Form } from "./components/Form"
import { PrivateRoute } from "./components/PrivateRoute";
import { CitiesProvider } from "./contexts/CitiesContext"
import { AuthProvider } from "./contexts/FakeAuthContext";

function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <CitiesProvider>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="app" element={<PrivateRoute><AppLayout /></PrivateRoute>}>
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
              <Route path="login" element={<Login />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </CitiesProvider>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App
