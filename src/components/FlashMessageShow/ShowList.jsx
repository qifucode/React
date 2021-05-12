import React, { Component } from 'react'
import ShowContant from './ShowContant'
import {connect} from 'react-redux'
import {deleteFlashMessage} from '../../actions/flashMessages'
class ShowList extends Component {
    render() {
        console.log(this.props.messages)
        const messages = this.props.messages.map(message =>
            <ShowContant key={message.id} message={message} deleteFlashMessage={this.props.deleteFlashMessage}/>
        )
        return (
            <div className="contanier">
            {messages}
            </div>  
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        messages:state.flashMessages
        
    }
}
export default connect(mapStateToProps,{deleteFlashMessage})(ShowList) 