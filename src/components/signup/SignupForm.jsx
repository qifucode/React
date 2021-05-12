import React from 'react'
import classnames from 'classnames'
import {withRouter} from 'react-router-dom'

class SignupForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username:"",
            email:"",
            password:"",
            passwordConfirmation:"",
            errors:{},
            isLoading:false
        }
    }

    onChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmit = (e) =>{ 
        // 节流和防抖   回流和重绘
        e.preventDefault();
        this.setState({errors:{}, isLoading:true})
        this.props.singnupActions.userSignupRequst(this.state).then(
          // 成功
          ()=>{
            //   添加数据到redux
            this.props.flashActions.addFlashMessage({
                type:'success',
                text:'登录成功，欢迎加入！'
            })
              this.props.history.push("/");
          },
          ({response})=>{this.setState({errors:response.data,isLoading:false})}
        )
    }

    render(){
      const {errors,isLoading} = this.state;
        return(
            <form onSubmit={ this.onSubmit }>
                
                <h1>Join our community</h1>

                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input 
                        type="text"
                        name="username"
                        value={ this.state.username }
                        onChange={ this.onChange }
                        // 前边的为固定的属性，后边的为可变属性
                        className={classnames("form-control",{"is-invalid":errors.username} )}
                    />
                    {errors.username && <span className="form-text text-muted">{errors.username}</span>}  
                </div>

                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input 
                        type="email"
                        name="email"
                        value={ this.state.email }
                        onChange={ this.onChange }
      
                        className={classnames("form-control",{"is-invalid":errors.email} )}
                    />
                  {errors.email && <span className="form-text text-muted" >{errors.email}</span>} 
                </div>

                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input 
                        type="password"
                        name="password"
                        value={ this.state.password }
                        onChange={ this.onChange }
                        className={classnames("form-control",{"is-invalid":errors.password} )}
                    />
                  {errors.username && <span className="form-text text-muted">{errors.password}</span>}
                </div>

                <div className="form-group">
                    <label className="control-label">passwordConfirmation</label>
                    <input 
                        type="password"
                        name="passwordConfirmation"
                        value={ this.state.passwordConfirmation }
                        onChange={ this.onChange }
                        className={classnames("form-control",{"is-invalid":errors.passwordConfirmation || errors.passwordNotEqual } )}
                    />
                  {errors.passwordConfirmation && <span className="form-text text-muted">{errors.passwordConfirmation}</span>} 
                  {errors.passwordNotEqual && <span className="form-text text-muted">{errors.passwordNotEqual}</span>} 
                </div>
                <div className="form-group">
                    <button disabled={isLoading} className="btn btn-primary btn-lg">注册</button>
                </div>
            </form>
        )
    }
}

export default withRouter(SignupForm) 