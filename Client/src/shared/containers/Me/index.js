import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/withStyles';
import styles from './index.less'

class Me extends PureComponent {

    render() {

        return (
            <div className='me'>Me</div>
        )
    }
}


const mapStateToProps = (state) => ({
    isLogin: false
})


const ExportMember = connect(
    mapStateToProps,
    null,
)(withStyles(styles)(Me));

//ExportMember.loadData = store => store.dispatch(actions.getMemberList());
export default ExportMember