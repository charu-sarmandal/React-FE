import axios from 'axios';
import { useEffect, useState } from 'react';
import url from '../misc/fixed';


interface Product {
    id: number;
    prdName: string;
    prdType: string;
    isActive: boolean;
   
}


const Products = () => {

  const[data,setData]=useState(Array<Product>);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

     const url= "https://localhost:7200/Product";

     useEffect(() => {
     const fetchDataForPosts = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }   
     let postsData = await response.json();
     var data = postsData.map((item: Product) => ({
          id: item.id,
          prdName: item.prdName,
          prdType: item.prdType,  
          isActive: item.isActive,
        }));
        setData(data);
      console.log("postsData:", postsData);
    
    
        setError(null);
     
      } catch (err:any) {
        setError(err.message);
      
      } finally {
        setLoading(false);
      }
      console.log("data:", data);
    };

    fetchDataForPosts();
  }, []);



    return (
        <div className="container">
            <h1>Products</h1>
            <table className="table table-striped" style={{ border: '2px' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Active</th>
                      
                    </tr>
                </thead>
               
                <tbody>
                   
                       {
                            data.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.prdName}</td>
                                    <td>{product.prdType}</td>
                                    <td>{product.isActive ? 'Yes' : 'No'}</td>
                                </tr>
                            ))
                        
                          }
                   </tbody>
            </table>
        </div>
    );}

export default Products;