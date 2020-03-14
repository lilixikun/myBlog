import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import style from './index.css'

class Me extends PureComponent {

    componentDidMount() {
        if (this.props.staticContext) {
            this.props.staticContext.css.push(style._getCss())
        }
    }

    render() {

        return (
            <div className={style.my}>Me</div>
        )
    }
}


const mapStateToProps = (state) => ({
    isLogin: state.user.isLogin
})

export default connect(mapStateToProps, null)(Me)