import React from 'react'
import BraftEditor from 'braft-editor'
//import CodeHighlighter from 'braft-extensions/dist/code-highlighter'
import 'braft-editor/dist/index.css'
//import 'braft-extensions/dist/code-highlighter.css'

// BraftEditor.use(CodeHighlighter({
//     includeEditors: ['editor-with-code-highlighter'],
// }))


export default class Braft extends React.Component {

    state = {
        editorState: BraftEditor.createEditorState('<p><b>请输入内容!</b></p>'), // 设置编辑器初始内容
        outputHTML: '<p></p>'
    }

    componentDidMount() {
        console.log(this.props);
        if (!!this.props.value) {
            this.isLivinig = true
            // 3秒后更改编辑器内容
            setTimeout(this.setEditorContentAsync, 300)
        }
    }

    componentWillUnmount() {
        this.isLivinig = false
    }

    handleChange = (editorState) => {
        this.setState({
            editorState: editorState,
            outputHTML: editorState.toHTML()
        })
        this.props.onChange(editorState)
    }

    setEditorContentAsync = () => {
        this.isLivinig && this.setState({
            editorState: BraftEditor.createEditorState(this.props.value)
        })
    }

    preview = () => {

        if (window.previewWindow) {
            window.previewWindow.close()
        }

        window.previewWindow = window.open()
        window.previewWindow.document.write(this.state.outputHTML)
        window.previewWindow.document.close()
    }

    render() {

        const { editorState, outputHTML } = this.state

        const extendControls = [
            {
                key: 'custom-button',
                type: 'button',
                text: '预览',
                onClick: this.preview
            }
        ]

        return (
            <div>
                <div className="editor-wrapper">
                    <BraftEditor
                        value={editorState}
                        onChange={this.handleChange}
                        extendControls={extendControls}
                    />
                </div>
                {/* <h5>输出内容</h5>
                <div className="output-content">{outputHTML}</div> */}
            </div>
        )
    }
}