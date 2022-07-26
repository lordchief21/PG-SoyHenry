const { Router } = require("express");
const router = Router();
const {getProducts, postProduct,getFilter, filterByCategories, getOrderByName, getProductsByBrand, getAllBrand} = require('../controllers/products.controllers')


router.get('/', getProducts)

router.get('/filter', getFilter)

// router.get('/brand', getProductsByBrand)

// router.get('/brand/all', getAllBrand)

// router.get('/categories', filterByCategories)

// router.get('/orderByName', getOrderByName)

router.post('/', postProduct)

module.exports = router;