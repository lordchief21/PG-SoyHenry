import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, paginacion, getUsersFavorite } from "../../redux/actions";
import style from "../../styles/allProducts.module.css";
import Pagination from "../atoms/paginacion";
import CardProducts from "../atoms/cardProducts";
import Filters from "../atoms/Filters";
import FiltersResponsive from "../atoms/FiltersResponsive";
import FilterAcordion from "../atoms/FilterAcordion";

export default function AllProducts() {

  const dispatch = useDispatch()
  const pages = useSelector((state) => state.pages)
  const products = useSelector((state) => state.data)
  const productsPerPage = useSelector((state) => state.productsPerPage)
  const indexLastProduct = pages * productsPerPage
  const indexFirstProduct = indexLastProduct - productsPerPage
  const productsToRender = products.slice(indexFirstProduct, indexLastProduct)
  const userLoged = useSelector((state) => state.userLoged)
 
 
  useEffect(() => {
    dispatch(paginacion(productsToRender));
    
      Object.keys(userLoged).length > 0 && dispatch(getUsersFavorite(userLoged.id));
    
  }, [dispatch, products, pages]);

  return (
    <>
      <div className={style.filtersResponsive}><FiltersResponsive /></div>
      <Pagination />
      <div className={style.container}>
          <div className={style.div}><Filters /></div>
          <div className={style.cardContainer}><CardProducts /></div>
      </div>
    </>
  );
}
