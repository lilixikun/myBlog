import React, { PureComponent, Fragment } from 'react'
import { connect } from "react-redux";
import './index.less'

class Home extends PureComponent {

    render() {
        return (
            <Fragment>
                <h3 className="home">Home</h3>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, null)(Home)