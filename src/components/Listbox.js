import React,{Component} from 'react'
import List from './List';
import PropTypes from 'prop-types'

class Listbox extends Component{
    static propTypes = {
        lists: PropTypes.array,
        onDelup: PropTypes.func
    }


    constructor(props){
        super(props);
        this.handleDelList = this.handleDelList.bind(this);
    }

    handleDelList(index){
        this.props.onDelup(index);
    }

    render(){
        const contents = this.props.lists;
        const that = this;
        const element = contents.map(function(list,index){
            return(
                <List key={index}
                      index={index}
                      info={list.info}
                      time={list.time}
                      onDellist={that.handleDelList}/>
            )
        });

        return(
            <div className="listBox">
                <p>记录： {contents.length}条</p>
                {element}
            </div>
        )
    }
}

export default Listbox;