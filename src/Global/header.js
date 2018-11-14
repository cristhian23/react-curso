import React,{Component} from 'react';
import './css/header.css';
import {Link} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);

        
    }

    render(){
        return(
            <div className="Header">
              <h2>{this.props.title}</h2>
              <ul className="Menu">
                {this.props.items.map((item,key) =>
                   <li key={key}>
                        <Link to={item.url}>{item.title}</Link>
                   </li>
                )}
              </ul>
            </div>
        
        );
    }
}

export default Header;