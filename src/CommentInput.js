import React, {Component} from 'react'
import PropTypes from 'prop-types'

class CommentInput extends Component {
  static propTypes ={
    onSubmit:PropTypes.func
  }
  constructor (){
    super()
    this.state = {
      username: '',
      content: ''
    }
  }
  // 输入用户名
  handleUsernameChange (event) {
    this.setState({
      username:event.target.value
    })
  }
  //输入评论内容
  handleContentChange (event) {
    this.setState({
      content:event.target.value
    })
  }
  // 点击提交
  handleSubmit (event) {
    if(this.props.onSubmit){
      this.props.onSubmit({
        username:this.state.username,
        content:this.state.content,
        createdTime: +new Date()
      })
    }
    this.setState({content:''})
  }
  // 保存用户名
  _saveUsername (username) {
    localStorage.setItem('username',username)
  }
  // 加载用户名
  _loadUsername () {
    const username = localStorage.getItem('username')
    if(username) {
      this.setState({username})
    }
  }
  // 即将加载
  componentWillMount () {
    this._loadUsername()
  }
  // 失去焦点
  handleUsernameBlur (event) {
    this._saveUsername(event.target.value)
  }
  render() {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input 
            value={this.state.username}
            onBlur={this.handleUsernameBlur.bind(this)}
            onChange={this.handleUsernameChange.bind(this)}
            />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea
            ref={(textarea) => this.textarea = textarea}
            value={this.state.content}
            onChange={this.handleContentChange.bind(this)}
            />
          </div>
        </div>
        <div className='comment-field-button'>
          <button 
            onClick={this.handleSubmit.bind(this)}>
            发布
          </button>
        </div>
      </div>
    )
  }
  // 组件挂载完成
  componentDidMount () {
    this.textarea.focus()
  }
}

export default CommentInput