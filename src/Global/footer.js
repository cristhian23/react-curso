import React,{Component} from 'react';
import './css/footer.css';

class Footer extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
        <div className="Footer">
            <h5>{this.props.copy}</h5>
        </div>          
        );
    }
}

export default Footer;