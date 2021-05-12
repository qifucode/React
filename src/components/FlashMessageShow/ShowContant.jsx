import React, { Component } from 'react'
import classnames from 'classnames'
class ShowContant extends Component {

    deleteMessage = ()=>{
        this.props.deleteFlashMessage(this.props.message.id)
    }


    render() {

        const {type,text}=this.props.message;
        return (
            <div className={ classnames('alert',{
                'alert-success': type==='success',
                'alert-danger': type==='danger'
            })}>
                {/* &times;x图标 */}

                <button className="close" onClick={this.deleteMessage}>&times;</button>
                {text}
            </div>
        )
    }
}

export default ShowContant