import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/withStyles';
import styles from './index.less'

class Me extends PureComponent {

    componentDidMount() {
        if (this.props.staticContext) {
            console.log(111111);

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


const ExportMember = connect(
    mapStateToProps,
    null,
)(withStyles(styles)(Me));

//ExportMember.loadData = store => store.dispatch(actions.getMemberList());
export default ExportMember