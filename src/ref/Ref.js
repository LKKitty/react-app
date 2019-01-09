import React,{Component} from 'react'
class AutoFocusInput extends Component {
  componentDidMount () {
    this.input.focus()
    this.input.value='获取自己本身'
  }
  render (){
    return (
      <div>
        <p style={{marginTop:'20px'}}>ref和react.js中的DOM操作</p>
        <input ref={(input) => this.input = input} />
      </div>
    )
  }
}
export default AutoFocusInput