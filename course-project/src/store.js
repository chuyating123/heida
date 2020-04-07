import {createStore} from 'redux'
let state={
    number:1,
    islogin:false
}
const ADDNUM='ADDNUM'
function addAction(data){
    return {
        type:ADDNUM,
        data
    }
}
function reducer(preState=state,action)
export{
store,
addAction
}