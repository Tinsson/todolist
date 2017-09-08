import React,{Component} from 'react'
import { connect } from 'react-redux'
import Addlist from '../components/Addlist'
import PropTypes from 'prop-types';
import { addLists } from '../reducers/R_todo'

class AddlistSmart extends Component{
    static propTypes = {
        lists: PropTypes.array,
        onSaveListData: PropTypes.func
    };

    constructor(props){
        super(props);
        this.handleSaveSmart = this.handleSaveSmart.bind(this);
    }

    handleSaveSmart(info){
        const date = new Date();
        const time = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
        const list = {
            info: info,
            time: time
        };
        const lists = this.props.lists;
        const newLists = [...lists,list];
        console.log(newLists);
        localStorage.setItem("lists",JSON.stringify(newLists));
        this.props.onSaveListData(list);
    }

    render(){
        return(
            <Addlist onSaveList={(info)=>{this.handleSaveSmart(info)}}/>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        lists: state.records
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        onSaveListData: (list)=>{dispatch(addLists(list))}
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(AddlistSmart);