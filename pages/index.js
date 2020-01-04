import React from 'react'
import {connect} from 'react-redux'
import {startClock, serverRenderClock,getGoldList,getGitList,changGoldList,changGitList,Axios} from '../store'
import LayoutA from '../index.js'
import { Layout, Menu, Breadcrumb, Icon,Select } from 'antd';
import './index.css'
const { Option } = Select;
const { Header, Content, Footer } = Layout;
let getlist = (url,param) => {
  return new Promise((resolve, reject) => {
    Axios.post(url,param)
    .then(res=>{
         const {data} = res.data
         resolve(data)
    })  
  })
}

class Index extends React.Component {
    static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req;
    const {params_gold,params_git}= reduxStore.getState()
    reduxStore.dispatch(serverRenderClock(isServer))
 
    let  p1=getlist('https://extension-ms.juejin.im/resources/gold',params_gold)
    let  p2=getlist('https://extension-ms.juejin.im/resources/github',params_git)
    return Promise.all([p1, p2]).then((result) => {
                    //['成功了', 'success']
                    reduxStore.dispatch(changGoldList(result[0]))
                    reduxStore.dispatch(changGitList(result[1]))
                    return  {
                       GOLD_LIST: (reduxStore.getState())['GOLD_LIST'],
                       GIT_LIST: (reduxStore.getState())['GIT_LIST']
                      }
    }).catch((error) => {
      console.log(error)
    })
    return Axios.post('https://extension-ms.juejin.im/resources/gold',{
      category: "frontend",
      limit: 30,
      offset: 0,
      order: "time"
    })
    .then(res=>{
         const {data} = res.data
         reduxStore.dispatch(changGoldList(data))
        
         return  { GOLD_LIST: (reduxStore.getState())['GOLD_LIST']}
    })  
  }

  componentDidMount () {
    const {dispatch,GOLD_LIST,GIT_LIST} = this.props
  }

  componentWillUnmount () {
  
  }
 
  getlist_gold=(obj)=>{
    const {dispatch,params_gold} = this.props;
      dispatch(getGoldList({
        ...params_gold,
        ...obj 
      }))
  }
  getlist_git=(obj)=>{
    const {dispatch,params_git} = this.props;
      dispatch(getGitList({
        ...params_git,
        ...obj 
      }))
  }
  handleChange=(category)=>{
    console.log(`selected ${category}`); 
    this.getlist_gold({category})
    
  }
  HOTc=(order)=>{
     this.getlist_gold({order})
  }
  handlecategoryChange=(category)=>{
 
    this.getlist_git({category})
    
  }
   handleperiodChange=(period)=>{
     
    this.getlist_git({period})
    
  }
  handlelangChange=(lang)=>{
     
    this.getlist_git({lang})
    
  }
  render () {
   const {GOLD_LIST,state,GIT_LIST,params_gold,params_git} = this.props;
   console.log(state)
    return (
      <LayoutA>
          <Layout id="components-layout-demo-fixed">
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
            </Header> 
            <div  className="main-area">
              <div className="source gold-source">
                  <div className="source-navbar"> 
                     <div className="title" style={{color:'#044aab'}}>
                      
                       <img className="icon source-icon" _v-7022f083="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgWDcgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iOC4zODU3bW0iIGhlaWdodD0iOC4xOTIzbW0iIHZlcnNpb249IjEuMSIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOmV2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIgp2aWV3Qm94PSIwIDAgNTA5IDQ5NyIKIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CiAgIDwhW0NEQVRBWwogICAgLmZpbDAge2ZpbGw6IzAwNkNGRn0KICAgIC5maWwxIHtmaWxsOndoaXRlfQogICBdXT4KICA8L3N0eWxlPgogPC9kZWZzPgogPGcgaWQ9IuWbvuWxgl94MDAyMF8xIj4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxyZWN0IGNsYXNzPSJmaWwwIiB3aWR0aD0iNTA5IiBoZWlnaHQ9IjQ5NyIvPgogIDxwYXRoIGlkPSJGaWxsLTEtQ29weSIgY2xhc3M9ImZpbDEiIGQ9Ik0yODUgMTM4bC0zMSAtMjQgLTMzIDI1IC0yIDIgMzUgMjcgMzQgLTI3IC0zIC0zem0xMTkgOTVsLTE1MCAxMTYgLTE1MSAtMTE2IC0yMiAxNyAxNzMgMTM0IDE3MyAtMTM0IC0yMyAtMTd6bS0xNTAgOWwtODIgLTYzIC0yMyAxNyAxMDUgODEgMTA0IC04MSAtMjIgLTE3IC04MiA2M3oiLz4KIDwvZz4KPC9zdmc+Cg=="></img>
                        掘金
                     </div>
                     <div className="category-box">
                     <Select defaultValue="frontend" style={{ width: 120 }} onChange={this.handleChange}>
                          <Option value="all">首页</Option>
                          <Option value="frontend">前端</Option>
                          <Option value="backend">
                            后端
                          </Option>
                          <Option value="android">Android</Option>
                          <Option value="ios">iOS</Option>
                          <Option value="ai">人工智能</Option>
                          <Option value="article">阅读</Option>
                        </Select>
                     </div>
                     <div className="order-selector" >
                        <div className={["hottest ",params_gold.order==='heat' ?'active' :'' ].join('')}  onClick={()=>this.HOTc('heat')}>热门</div>
                        <div className={["latest ",params_gold.order==='time' ?'active' :'' ].join('')}   onClick={()=>{this.HOTc('time')}}>最新</div>
                    </div>
                  </div>
                  <div className="entry-list">
                    <ul className="list">
                        {GOLD_LIST.map(item=>{
                           return <li key={item.id} className="item">
                               <a href={item.url} target="_blank" className="item-content">
                                  <div className="badge"   title={'至少已有'+item.collectionCount+'人喜欢'}>
                                    <div className="icon ion-arrow-up-b" ></div>
                                    <div className="text">{item.collectionCount}</div>
                                  </div>
                                  <div className="entry-info">
                                    <div className="title"  title={item.title}>{item.title}</div>
                                    <div className="meta"  >
                                          <div className="list"  >
                                              <div className="meta-item">
                                                <span className="text" title="Fri, 03 Jan 2020 14:02:46 GMT">2小时前</span>
                                              </div>
                                              <div className="meta-item">
                        <span className="text" title={'访问'+item.user.username+'的主页'}>{item.user.username}</span>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                </a>
                           </li>
                        })}
                    </ul>
                  </div>
              </div>
              <div className="source other-source">
              <div className="source-navbar"> 
                     <div className="title" style={{color:'#000000'}}>
                      
                       <img className="icon source-icon"  src="https://e-gold-cdn.xitu.io/static/github.png?9140c37">
                         </img> GitHub
                     </div>
                     <div className="category-box">
                        <Select defaultValue="upcome" style={{ width: 100 }} onChange={this.handlecategoryChange}>
                          <Option value="upcome">新生</Option>
                          <Option value="trending">热门</Option> 
                        </Select>
                        <Select defaultValue="day" style={{ width: 100 }} onChange={this.handleperiodChange}>
                          <Option value="day">今日</Option>
                          <Option value="week">本周</Option>
                          <Option value="month">本月</Option>
                        </Select>
                     </div>
                     <div>
                      <Select defaultValue="javascript" style={{ width: 200,marginRight:5}} onChange={this.handlelangChange}>
                          <Option value="javascript">JavaScript</Option>
                          <Option value="css">CSS</Option>
                          <Option value="html">HTML</Option>
                          <Option value="typescript">TypeScript</Option>
                          <Option value="coffeescript">CoffeeScript</Option>
                          <Option value="vue">Vue</Option>
                        </Select>
                     </div>
                  </div>
                  <div className="entry-list">
                      <ul className="list">
                           {GIT_LIST.map(item=>{
                           return <li key={item.id} className="item-row">
                                 <div className="item-box">
                                   <div className="item">
                                     <div className="repo-content">
                                          <div className="repo-header">
                                                <h2 className="title">
                                                  <a className="title-text" href={item.url} target="_blank">
                                                    <span className="author">{item.username}</span><span className="divider"> / </span>
                                                    <span className="name">{item.reponame}</span>
                                                  </a>
                                                </h2>
                                            </div>
                                             <div className="repo-desc">
                                                <div className="desc" title={item.description}>
                                                  {item.description}
                                                </div>
                                             </div>
                                              <div className="repo-meta">
                                                 <span className="star">
                                                    <i className="icon ion-android-star"></i>
                                                    {item.starCount}
                                                  </span>
                                                  <span className="fork">
                                                    <i className="icon ion-fork-repo"></i>
                                                    {item.forkCount}
                                                  </span>
                                                  <span className="lang">
                                                      <i className="icon lang-color" style={{backgroundColor:'rgb(241, 224, 90)'}}></i>
                                                      <span>{item.lang}</span>
                                                  </span>
                                              </div>
                                       </div>
                                      </div>
                                 </div>
                           </li>
                        })}
                      </ul>
                  </div>
              </div>
            </div>
    
                                                                      
          </Layout>
          </LayoutA>
    )
  }
}

export default connect( 
  state => ({ GOLD_LIST: state.GOLD_LIST,state,GIT_LIST: state.GIT_LIST,params_gold: state.params_gold,params_git: state.params_git })
 
)(Index)