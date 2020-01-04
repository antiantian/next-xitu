import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'
export const Axios = axios.create({
  baseURL: '/api',
});
//import    {Axios,serverAxios} from './request'
const jueapi ='https://extension-ms.juejin.im';
export const GET_LIST = 'INDEX/GET_GOLD_LIST'
export const GET_GIT_LIST = 'INDEX/GET_GIT_LIST'
export const changGoldList = list =>({
  type:GET_LIST,
  list
})
export const changGitList= list =>({
  type:GET_GIT_LIST,
  list
})
export const getGoldList = (param,isServer) =>{
    return (dispatch,getState )=>{
        let url = '/resources/gold'
        if(isServer){
          url=jueapi+url
        }
        return Axios.post(url,param)
        .then(res=>{
             const {data} = res.data
             dispatch(changGoldList(data))
             dispatch(changeGold(param))
        })
    }
}
export const getGitList = (param,isServer) =>{
    return (dispatch,getState )=>{
      let url = '/resources/github'
      if(isServer){
        url=jueapi+url
      }
      return Axios.post(url,param)
      .then(res=>{
           const {data} = res.data
           dispatch(changGitList(data))
           dispatch(changeGit(param))
      })
    }
}

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  GOLD_LIST:[],
  GIT_LIST:[],
  params_gold:{
      category: "frontend",
      limit: 30,
      offset: 0,
      order: "time" 
  },
  params_git:{
    "category":"upcome",
    "period":"day",
    "lang":"javascript",
    "offset":0,
    "limit":30
 }
}

export const actionTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  CHANGE_GOLD:'CHANGE_GOLD',
  CHANGE_GIT:'CHANGE_GIT',
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      })
    case actionTypes.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      })
    case actionTypes.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      })
    case actionTypes.RESET:
      return Object.assign({}, state, {
        count: exampleInitialState.count
      })
    case GET_LIST:
      return Object.assign({}, state, {
        GOLD_LIST: action.list
      })
    case GET_GIT_LIST:
        return Object.assign({}, state, {
          GIT_LIST: action.list
        })
    case actionTypes.CHANGE_GOLD:
      return Object.assign({}, state, {
        params_gold: action.param
      })
    case actionTypes.CHANGE_GIT:
        return Object.assign({}, state, {
          params_git: action.param
        })
    default:
       return state
  }
}

// ACTIONS
export const serverRenderClock = (isServer) => dispatch => {
  return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
}

export const startClock = dispatch => {
  return setInterval(() => {
    // Dispatch `TICK` every 1 second
    dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() })
  }, 1000)
}

export const incrementCount = () => dispatch => {
  return dispatch({ type: actionTypes.INCREMENT })
}
export const changeGold = (param) => dispatch => {
  return dispatch({ type: actionTypes.CHANGE_GOLD ,param})
}
export const changeGit = (param) => dispatch => {
  return dispatch({ type: actionTypes.CHANGE_GIT ,param})
}

export const decrementCount = () => dispatch => {
  return setInterval(() => {
    // Dispatch `TICK` every 1 second
    dispatch({ type: actionTypes.DECREMENT })
  }, 5000) 
}

export const resetCount = () => dispatch => {
  return dispatch({ type: actionTypes.RESET })
}

export function initializeStore (initialState = exampleInitialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware )))
}