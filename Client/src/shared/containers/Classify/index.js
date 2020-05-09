import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/withStyles'
import * as actions from './store/actions'
import styles from './index.less'

class Classify extends PureComponent {

    componentDidMount() {
        const { dataList, getTagList } = this.props
        if (dataList.length === 0) {
            getTagList()
        }
    }

    render() {
        const { dataList } = this.props

        return (
            <div className="classify-wrapper">
                <div className='masonry animated bounceInUp'>
                    {

                        dataList.map(item => (
                            <div className='item item-wrapper' key={item.uid}>
                                <img src={`http://localhost:7001/file_type_${item.img}.svg`} />
                                <p>{item.tagName}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ classify }) => ({
    dataList: classify.dataList,
})

const mapDispatchToProps = dispatch => {
    return {
        getTagList: () => dispatch(actions.getTagList()),
    }
}

const ExportClassify = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Classify))

ExportClassify.loadData = async store => {
    await store.dispatch(actions.getTagList())
}

export default ExportClassify