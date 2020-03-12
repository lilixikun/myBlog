import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class Me extends PureComponent {

    render() {
        console.log(this.props);

        return (
            <div>Me</div>
        )
    }
}


const mapStateToProps = (state) => ({
    isLogin: state.user.isLogin
})

export default connect(mapStateToProps, null)(Me)