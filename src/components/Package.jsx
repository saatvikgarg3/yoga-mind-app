// Package.js
import "../Product.css"
import React from 'react';
import {usePackageContext} from '../context/PackageContext'
import { useNavigate } from 'react-router-dom';
const Package = ({ title, originalPrice, discountedPrice, perMonthPrice }) => {
  const navigate = useNavigate();
  const { setPackage } = usePackageContext();

  const handleBuyNow = (route) => {
    // Set the selected package in the context
    setPackage({ title, originalPrice, discountedPrice, perMonthPrice });
    navigate(route);
  };
  return (
    <div className='pack'>
      <div>
        <div className='pack-title'>{title}</div>
        <div className='price'>
          <span className='original-price'>{originalPrice}</span>
          <span className='discounted-price'>{discountedPrice}</span>
        </div>
      </div>
      <div className='packright'>
        <div className='permonthprice'>{perMonthPrice}</div>
        <button className='buy-now' onClick={()=>handleBuyNow('/batchandslot')}>Buy Now</button>
      </div>
    </div>
  );
};

export default Package;
