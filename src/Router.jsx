import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MenuPage } from "./pages/MenuPage";
import { ProductPage } from "./pages/ProductPage";
import { NotFound404PAge } from "./pages/NotFound404Page";

export const Router = () => {
   return (
      <Routes>
         <Route  path="/404" element={<NotFound404PAge />} />
         <Route path="/:menuId/:categoryId/*" element={<ProductPage />} />
         <Route path="/:menuId" element={<MenuPage />} />
         <Route   path="/" element={<HomePage />} />
         <Route  path="*" element={<HomePage />} />
      </Routes>
   );
}