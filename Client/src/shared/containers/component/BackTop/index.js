import * as React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles';
import styles from './index.less'

class BackTop extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = ({
            show: false
        })
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            let scrollTop = document.documentElement.scrollTop || document.body / scrollTop;
            if (scrollTop > 500) {
                this.setState({
                    show: true
                })
            } else {
                this.setState({
                    show: false
                })
            }
        })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll')
    }

    goTo() {
        let scrollToTop = window.setInterval(function () {
            let pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20); // how far to scroll on each step
            } else {
                window.clearInterval(scrollToTop);
            }
        }, 2);
    }

    render() {
        const { show } = this.state
        return (
            <>
                {
                    show &&
                    <div className="backtop-prefix-cls" onClick={this.goTo}>
                        <div className='backtop-content'>
                            <div className='backtop-icon'></div>
                        </div>
                    </div>
                }
            </>
        )
    }
}

export default withStyles(styles)(BackTop)