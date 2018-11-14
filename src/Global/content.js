
import React, {Component} from 'react';
import './css/content.css';

class Content extends Component{

    constructor(){
        super();
    }

    render(){
        return(
           <div className="Content">
                {this.props.body}
           </div>         
        );
    }
}

export default Content;