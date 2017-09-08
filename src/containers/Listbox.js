import React,{Component} from 'react'
import { connect } from 'react-redux'
import Listbox from '../components/Listbox';
import PropTypes from 'prop-types'
import { delLists,initLists } from '../reducers/R_todo'

class ListboxSmart extends Component{
    static propTypes = {
        lists: PropTypes.array,
        onDelup: PropTypes.func,
        onInit: PropTypes.func
    }

    constructor(props){
        super(props);
        this.handleDelList = this.handleDelList.bind(this);
    }

    componentWillMount(){
        let lists = localStorage.getItem('lists');
        lists = lists?JSON.parse(lists):[];
        this.props.onInit({records: lists});
    }

    handleDelList(index){
        let { lists } = this.props;
        lists = [...lists.slice(0,index),...lists.slice(index+1,lists.length)];
        localStorage.setItem('lists',JSON.stringify(lists));
        this.props.onDelup(index);
    }

    render(){
        return(
            <Listbox lists={this.props.lists} onDelup={(index)=>{this.handleDelList(index)}}/>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        lists: state.records
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        onDelup: (index)=>{
            dispatch(delLists(index))
        },
        onInit: (lists)=>{
            dispatch(initLists(lists))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListboxSmart);