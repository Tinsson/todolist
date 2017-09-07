import React,{Component} from 'react'
import PropTypes from 'prop-types';
import './list.css'

class List extends Component{
    static propTypes = {
        info: PropTypes.string,
        time: PropTypes.string,
        index: PropTypes.number,
        onDellist: PropTypes.func
    };

    constructor(props){
        super(props);
        this.handleDel = this.handleDel.bind(this);
    }

    handleDel(){
        const index = this.props.index;
        this.props.onDellist(index);
    }

    render(){
        return(
            <li className="list">
                <span className="content">{this.props.info}</span>
                <span className="time">{this.props.time}</span>
                <span className="delBtn" onClick={this.handleDel}>删除</span>
            </li>
        )
    }
}

export default List;