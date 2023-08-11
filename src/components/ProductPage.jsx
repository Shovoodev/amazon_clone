import { useParams } from 'react-router-dom';
import { useState ,useEffect } from 'react';
import { callAPI } from '../utils/CallApi';

const ProductPage = () => {
    const {id } = useParams();

    const [product , setProduct] = useState(null);

    const getProduct = () => {
      callAPI(`data/products.json`)
      .then((productResults) =>{
        setProduct(productResults[id]);
      })
    }
    
    useEffect(()=>{
        getProduct();
    }, [] );

    if(!product?.title) return <h1>loading products</h1>

  return ( product &&
    <div className='h-screen bg-amazonclone-background'> 
    <div className='min-w-[1000px] max-w-[1500px] m-auto bg-orange-400'>
        <div className='grid grid-cols-10'>
        <div className='col-span-3 bg-blue-100'> test</div>
        <div className='col-span-5 bg-blue-900'></div>
        <div className='col-span-2 bg-blue-600'></div>
        </div>

    </div>
    </div>
  )
}

export default ProductPage
