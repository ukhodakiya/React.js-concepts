import React, {Component} from 'react'
import Panelbox from './Panelbox'

class Detail extends Component{
    navigateToList = () =>{
        this.props.history.push("/products");
    }
    render(){

        const content =
            <div>
                {JSON.stringify(this.props.match.params)}<br/>
                <button className="btn btn-warning" onClick={this.navigateToList}>Back to List</button>
            </div>

        return <Panelbox heading="Product Details" content={content}/>
    }
}

export default Detail;