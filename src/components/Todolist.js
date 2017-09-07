import React,{Component} from 'react';
import Addlist from './Addlist';
import Listbox from './Listbox';

class Todolist extends Component{
    constructor(){
        super();
        this.state = {records: []}
    }

    componentWillMount(){
        const lists = JSON.parse(localStorage.getItem('lists'));
        if(lists){
            this.setState({records: lists});
        }
    }

    handleSaveList(info){
        const date = new Date();
        const time = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
        const lists = this.state.records;
        lists.push({
            info: info,
            time: time
        });
        localStorage.setItem('lists',JSON.stringify(lists));
        this.setState(lists);
    }

    handleDelList(index){
        let lists = this.state.records;
        lists.splice(index,1);
        localStorage.setItem('lists',JSON.stringify(lists));
        this.setState(lists);
    }

    render(){
        return(
            <div className="todoBox">
                <Addlist onSaveList={(info)=>{this.handleSaveList(info)}}/>
                <Listbox lists={this.state.records} onDelup={(index)=>{this.handleDelList(index)}}/>
            </div>
        )
    }
}

export default Todolist;