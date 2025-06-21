import axios from 'axios';
import { useEffect, useState } from 'react';
import url from '../misc/fixed';


interface Product {
    id: number;
    prdname: string;
    prdtype: number;
    isactive: boolean;
    createddate:string
}

const Products = () => {
    const [product,setproducts] = useState<Product[]>([]);

    useEffect(() => {
        axios.get<Product[]>(url)
            .then(response=> {
                setproducts(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the products!', error);
            });
    }, []);

    return (
        <div className="container">
            <h1>Products</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Active</th>
                        <th>Created Date</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((prd) => (
                        <tr key={prd.id}>
                            <td>{prd.id}</td>
                            <td>{prd.prdname}</td>
                            <td>{prd.prdtype}</td>
                            <td>{prd.isactive ? 'Yes' : 'No'}</td>
                            <td>{prd.createddate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default Products;