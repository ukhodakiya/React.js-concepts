import React, {Component} from 'react';
import Panelbox from './Panelbox'
import {withRouter} from 'react-router-dom'

class Create extends Component{

    state = {
        products:{
            productName:"",
            productCode:"",
            price:"",
            releaseDate:"",
            starRating:""
        }
    }

    createProducts = (event) =>{
        event.preventDefault();
        this.props.createProducts(this.state.products);
        this.props.history.push("/products");
        // console.log(this.state.products);
    }

    productsChangeHandler = (event) =>{
        this.setState((prevState) => {
            return {
                products: {
                    ...prevState.products,
                    [event.target.name]: event.target.value
                }
            }
        });
        event.persist();

    }

    render(){


        const content = (
            <form>
                {
                    JSON.stringify(this.state)
                }
                <div className="form-group">
                    <label className="control-label">Product Name</label>
                    <input type="text" value={this.state.products.productName}
                           placeholder="Product Name" name="productName"
                           onChange={this.productsChangeHandler} className="form-control"/>
                </div>

                <div className="form-group">
                    <label className="control-label">Product Code</label>
                    <input type="text" value={this.state.products.productCode}
                           placeholder="Product Code" name="productCode"
                           onChange={this.productsChangeHandler} className="form-control"/>
                </div>


                <div className="form-group">
                    <label className="control-label">Price</label>
                    <input type="text" value={this.state.products.price}
                           placeholder="Price" name="price"
                           onChange={this.productsChangeHandler} className="form-control"/>
                </div>



                <div className="form-group">
                    <label className="control-label">Release</label>
                    <input type="text" value={this.state.products.releaseDate}
                           placeholder="Release" name="releaseDate"
                           onChange={this.productsChangeHandler} className="form-control"/>
                </div>


                <div className="form-group">
                    <label className="control-label">Rating</label>
                    <input type="text" value={this.state.products.starRating}
                           placeholder="Rating" name="starRating"
                           onChange={this.productsChangeHandler} className="form-control"/>
                </div>

                <button className="btn btn-success" onClick={this.createProducts}>Create</button>
            </form>


        )
        return  <Panelbox heading="Create" content={content}/>

    }
}

export default withRouter(Create);