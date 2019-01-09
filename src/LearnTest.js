import React, {Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
// 标题
import Header from './Header'
// 时间
import Clock from './clock/Clock'
// ref
import Ref from './ref/Ref'
// propsChildren
import PropsChildren from './propsChildren/PropsChildren'

class CommentApp extends Component {
  constructor () {
    super()
    this.state = {
      comments: []
    }
  }
  handleSubmitComment (comment) {
    if(!comment) return
    if(!comment.username) return alert('请输入用户名')
    if(!comment.content) return alert('请输入评论内容')
    this.state.comments.push(comment)
    this.setState({
      comments: this.state.comments
    })
  }
  render() {
    return (
      <div className='wrapper'>
        <CommentInput
          onSubmit={this.handleSubmitComment.bind(this)}/>
        <CommentList comments={this.state.comments}/>
        <Header />
        <Clock />
        <Ref />
        <PropsChildren >
          <div>
            <h2>React.js 小书</h2>
            <div>开源、免费、专业、简单</div>
            订阅：<input type="text"/>
            <p>测试</p>
          </div>
        </PropsChildren>
      </div>
    )
  }
}

export default CommentApp