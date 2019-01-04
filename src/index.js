import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class LikeButton extends Component {
  static defaultProps = {
    likedText: '取消',
    unlikedText: '点赞'
  }
  constructor (){
    super()
    this.state = {isLiked: false}
  }
  handleClickOnLikeButton () {
    this.setState({isLiked: !this.state.isLiked})
    if(this.props.onClick) {
      this.props.onClick()
    }
  }
  render () {
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
          {this.state.isLiked ? this.props.likeText : this.props.unlikeText} 👍
      </button>
    )
  }
}
const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
]
class Index extends Component {
  constructor (){
    super()
    this.state = {
      likedText: '已赞',
      unlikedText: '赞'
    }
  }
  handleClickOnChange(){
    this.setState({
      likedText: '取消',
      unlikedText: '点赞'
    })
  }
  render () {
    // const usersElements = []
    // for(let user of users) {
    //   usersElements.push(
    //     <div>
    //       <div>姓名：{user.username}</div>
    //       <div>年龄：{user.age}</div>
    //       <div>性别：{user.gender}</div>
    //       <hr/>
    //     </div>
    //   )
    // }
    return (
      <div>
        {users.map((user) => {
          return (
            <div>
              <div>姓名：{user.username}</div>
              <div>年龄：{user.age}</div>
              <div>性别：{user.gender}</div>
              <hr/>
            </div>
          )
        })}
      </div>
    )
  }
}
ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
