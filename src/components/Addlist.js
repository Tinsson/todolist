import React,{Component} from 'react'
import PropTypes from 'prop-types';

class Addlist extends Component{
    static propTypes = {
        onSaveList: PropTypes.func
    };

    constructor(props){
        super(props);
        this.state = {value: ''};
        this.handleSave = this.handleSave.bind(this);
    }

    handlevalue(ev){
        this.setState({value: ev.target.value});
    }

    handleSave(){
        const info = this.state.value;
        this.props.onSaveList(info);
        this.setState({value: ''});
        this.input.focus();
    }

    render(){
        return(
            <div className="infoBox">
                <input type="text" ref={(ipt)=>{this.input = ipt;}} value={this.state.value} onChange={(e)=>{this.handlevalue(e)}}/>
                <button onClick={this.handleSave}>保存</button>
            </div>
        )
    }
}

export default Addlist;