import React from 'react';
import { useState } from 'react';
import search from '../../assets/search.jpg'
import { getProductByName } from '../../redux/actions';
import style from '../../styles/searchbar.module.css'
import {connect} from 'react-redux'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function SearchBar ({searchedProducts, getProductByName}) {

    const [products, setProducts] = useState('')
    const [value, setValue] = useState('')

    let navigate = useNavigate()

    useEffect(() => {
        getProductByName(value)
        setProducts(searchedProducts)
    }, [value]) //eslint-disable-line react-hooks/exhaustive-deps

    function handleClick (e) {
        e.preventDefault();
        navigate('/allProducts/asus')
    }

    return (
        <div className={style.searchbarGeneralContainer}>
            <div className={style.searchbarContainer}>
                <input key='searchbar' placeholder='search...' value={value} onChange={e => setValue(e.target.value)}/>
                <button type='submit' onClick={(e) => handleClick(e)}><img src={search} alt='search-button'/></button>
            </div>
            <div className={style.productsBox}>
                {value && searchedProducts.map(p => { return (
                    <li>{p}</li>
                )})}
            </div>
        </div>
    )
}

export const mapStateToProps = (state) => {
    return {
        searchedProducts: state.searchedProducts
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        getProductByName: (name) => dispatch(getProductByName(name))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(SearchBar)