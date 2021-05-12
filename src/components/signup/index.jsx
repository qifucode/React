import React, { Component } from 'react'
import SignupForm from './SignupForm'
// 链接redux的结构
import { connect } from 'react-redux'
// 处理Action的对象
import { bindActionCreators } from 'redux'
// 导入signupActions文件中的所有组件，并将其命名为singnupActions
import * as singnupActions from '../../actions/signupActions'
import * as flashActions from '../../actions/flashMessages'

class Signup extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                <SignupForm singnupActions = {this.props.singnupActions} flashActions = {this.props.flashActions}/>
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        singnupActions:bindActionCreators(singnupActions,dispatch),
        flashActions:bindActionCreators(flashActions,dispatch)
    }
}
export default connect(null,mapDispatchToProps)(Signup)