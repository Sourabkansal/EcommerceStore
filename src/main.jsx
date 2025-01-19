import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MensWear from "./components/DisplayProducts/MensWear.jsx";
import Home from "./components/Home/Home.jsx";
import WomensWear from "./components/DisplayProducts/WomensWear.jsx";
import Electronics from "./components/DisplayProducts/Electronics.jsx";
import Braclate from "./components/DisplayProducts/jewelery/Braclate.jsx";
import Nacklase from "./components/DisplayProducts/jewelery/nacklase.jsx";
import Rings from "./components/DisplayProducts/jewelery/Rings.jsx";
import ProducPage from "./components/ProducPage/producPage.jsx";
import Wishlist from "./components/Wishlist/wishlist.jsx";
import SearchResult from "./components/searchsection/SearchResult.jsx"
import TopsellingProducts from "./components/TopSellingProducts/TopsellingProducts.jsx";
import Cart from "./components/cart/cart.jsx";
import { SearchProvider } from "./components/contextStore/search";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";

let routerr = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <App />}>
      {/* <Route path='/' element={<Navigate to="allProduct"/>}/> */}
      <Route path="/" element={<Home />}></Route>
      <Route path="/mensWear" element={<MensWear />}>
        {" "}
      </Route>
      <Route path="/WomensWear" element={<WomensWear />}></Route>
      <Route path="/Electronics" element={<Electronics />}></Route>
      <Route path="/Braclelet" element={<Braclate />}></Route>
      <Route path="/Necklace" element={<Nacklase />}></Route>
      <Route path="/Rings" element={<Rings />}></Route>
      <Route path="/product/:id" element={<ProducPage />} />
      <Route path="/search/:text" element={<SearchResult />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/addcart" element={<Cart/>}/>
      <Route path="/topselling/:type" element={<TopsellingProducts/>} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <SearchProvider>
  <RouterProvider router={routerr} />
  </SearchProvider>
);
