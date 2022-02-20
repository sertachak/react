import logo from './logo.svg';
import './App.css';
import Card from './Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Card.module.css'

function App() {

  const[fetchedProductData, setFetchedProductData] = useState(null);

useEffect(() => {
  axios.get("https://62121c2e01ccdac074324a9d.mockapi.io/product")
  .catch( e => {
    console.log("Something get wrong in data fetching")
  } )
  .then( (fetchedData) => {
    console.log(fetchedData)
    setFetchedProductData(fetchedData.data)
  })
  
},[])



  return (
    <div className={styles.wrapper}>
      {
      fetchedProductData?
      fetchedProductData.map( (data) => {
        return <Card
        product={data.product}
        productImage={data.productImage}  
        productPrice={data.productPrice}
        purchesedAt={data.purchesedAt}
      />
      }):
      null
      }
    </div>
  );
}

export default App;
