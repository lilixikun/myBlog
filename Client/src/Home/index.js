import React, { PureComponent, Fragment } from 'react'
import { connect } from "react-redux";

class Home extends PureComponent {

    render() {
        return (
            <Fragment>
                Home
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, null)(Home)