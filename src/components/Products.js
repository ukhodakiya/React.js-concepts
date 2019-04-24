import React,{Component} from 'react';
import Panelbox from './Panelbox'
import {Link} from 'react-router-dom'

class Products extends Component{

    state = {
        loadimage: false
    }

    toggleImage = () => {
        this.setState((prevState) =>{
           return {
               loadimage: !prevState.loadimage
           }
        });
    }


    deleteProducts = (productKey) =>{
        this.props.deleteProducts(productKey);
    }

    render()
{
    const content = (
        <table className="table table-bordered">
            <thead>
            <tr>
                <th>
                    <button className="btn btn-primary" onClick={this.toggleImage}>
                        {
                            this.state.loadimage ? "Hide Image" : "Show Image"
                        }
                    </button>
                </th>
                <th>Product Name</th>
                <th>Product Code</th>
                <th>Price</th>
                <th>Release</th>
                <th>Rating</th>
            </tr>
            </thead>

            <tbody>
            {
                this.props.product.map((item, index) => (
                    <tr key={index}>
                        <td>
                            { this.state.loadimage &&<img  alt="logo" src={item.imageUrl} style={styles.image}/>}
                        </td>

                        <td>
                            <Link to={"/products/" +item.productCode}>{item.productName}</Link>
                        </td>
                        <td>{item.productCode}</td>
                        <td>{item.price}</td>
                        <td>{item.releaseDate}</td>
                        <td>{item.starRating}</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => {this.deleteProducts(index)}}>Remove</button>
                        </td>
                    </tr>
                ))
            }
            </tbody>

        </table>
    )
        return <Panelbox heading="Products" content={content}/>
    }
}

const styles = {
        image:{
            width:"50px"
        }
}

export default Products;