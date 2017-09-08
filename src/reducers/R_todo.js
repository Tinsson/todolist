const INIT_LISTS = 'INIT_LISTS';
const ADD_LISTS = 'ADD_LISTS';
const DEL_LISTS = 'DEL_LISTS';

export default function(state,action){
    if(!state){
        return{
            records: []
        }
    }
    switch (action.type){
        case INIT_LISTS:
            return action.lists
        case ADD_LISTS:
            return {
                records: [...state.records,action.list]
            }
        case DEL_LISTS:
            const records = state.records;
            let lists = [...records.slice(0,action.index),
                         ...records.slice(action.index+1,records.length)];
            return {
                records: lists
            }
        default:
            return state
    }
}

//action creator
export const initLists = (lists)=>{
    return {type: INIT_LISTS,lists: lists}
}

export const addLists = (list)=>{
    return {type: ADD_LISTS,list: list};
}

export const delLists = (index)=>{
    return {type: DEL_LISTS,index: index}
}