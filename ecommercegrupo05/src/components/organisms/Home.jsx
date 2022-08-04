import React, { useEffect } from 'react';
import SlidePopularProducts from '../molecules/SlidePopularProducts';
import SlideBestNotebooks from '../molecules/SlideBestNotebooks';
import { Slider } from '../molecules/slider';
import BrandBar from '../molecules/brandbar'
import { SliderNews } from '../molecules/sliderNews';
import Footer from '../molecules/footer'
// import { setProfile } from '../../redux/actions'
// import { useAuth0 } from "@auth0/auth0-react";
// import { useDispatch, useSelector } from 'react-redux';

export function Home () {
    // const dispatch = useDispatch()
    // const userLoged = useSelector((state) => state.userLoged)
    // let { user, isAuthenticated } = useAuth0()

    // useEffect(() => {
    //     if(isAuthenticated && Array.isArray(profile)) {
    //     dispatch(setProfile(user))
    //     }
    // }, [isAuthenticated, profile])

    return (
        <div>
            <SliderNews />
            <SlidePopularProducts />
            <SlideBestNotebooks />                      
            <BrandBar/>
            <Slider/>
            <Footer/>
        </div>
    )
}