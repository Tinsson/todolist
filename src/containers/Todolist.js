import React,{Component} from 'react';
import Addlist from './Addlist';
import Listbox from './Listbox';

class Todolist extends Component{

    render(){
        return(
            <div className="todoBox">
                <Addlist />
                <Listbox />
            </div>
        )
    }
}

export default Todolist;