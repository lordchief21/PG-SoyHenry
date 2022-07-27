import React from 'react'
import style from '../../styles/favcard.module.css';
import { useNavigate } from 'react-router-dom';

function Card({image, name, price, id}) {
  let navigate = useNavigate()

  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img className={style.img} src={image} alt="Flag" width='130' height='100' />
      </div>
      <div className={style.textContainer}>
        <h4 className={style.name}>{name}</h4>
        <h5 className={style.price}>$ {price}</h5>
        <button onClick={() => navigate(`/details/${id}`)}>Ver producto</button>
      </div>
    </div>
  )
}

export default Card