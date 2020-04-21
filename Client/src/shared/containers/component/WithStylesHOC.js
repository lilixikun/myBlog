import React, { PureComponent } from 'react'

export default (DecoratedComponent, styles) => {
    return class CssComponent extends PureComponent {
        componentWillMount() {
            if (this.props.staticContext) {
                this.props.staticContext.css.push(styles._getCss())
            }
        }

        render() {
            return <DecoratedComponent {...this.props} />
        }
    }
}