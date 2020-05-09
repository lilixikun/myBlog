/*
 * @Author: kun.xi 
 * @Date: 2020-04-14 10:40:32 
 * @Last Modified by: xikun
 * @Last Modified time: 2020-05-09 17:07:33
 */
import React from 'react'
import SimpleMDE from 'simplemde';
import marked from 'marked';
import highlight from 'highlight.js';

import 'simplemde/dist/simplemde.min.css';
//import 'highlight.js/styles/monokai-sublime.css';

// markdown 编辑器
var simplemde
class Simplemde extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            value: props.value,
            smde: null
        }
    }

    componentDidMount() {
        simplemde = new SimpleMDE({
            element: document.getElementById('SimpleMDE').childElementCount,
            spellChecker: false,
            autofocus: true,
            //autoDownloadFontAwesome: false,
            autosave: {
                enabled: false,
                uniqueId: "SimpleMDE",//必须设置
                delay: 1000,//时间间隔默认 10s
            },
            renderingConfig: {
                codeSyntaxHighlighting: true
            },
            lineWrapping: false,
            status: false,
            previewRender(plainText) {
                return marked(plainText, {
                    renderer: new marked.Renderer(),
                    gfm: true,
                    pedantic: false,
                    sanitize: false,
                    tables: true,
                    breaks: true,
                    smartLists: true,
                    smartypants: true,
                    highlight(code) {
                        return highlight.highlightAuto(code).value;
                    },
                });
            },
        });
        if (this.props.value) {
            simplemde.value(this.props.value)
        }

        simplemde.codemirror.on("change", () => {
            this.props.onChange(simplemde.value())
        });
    }

    componentWillUnmount() {
        simplemde = null
    }

    handleChange = (value) => {
        this.setState({
            value: value
        })
        this.props.onChange(value)
    };
    render() {

        return (
            <textarea id={'SimpleMDE'} />
        )
    }
}

export default Simplemde