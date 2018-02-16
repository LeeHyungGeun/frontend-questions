import * as React from 'react';
import Utils from '../Services/Utils';
import * as MarkdownIt from 'markdown-it';
import * as hljs from 'highlight.js';
import Editor from '../Components/Editor';

const md = new MarkdownIt({
    breaks: true,
    html: false,
    xhtmlOut: false,
    langPrefix: 'language-',
    linkify: false,
    typographer: false,
    quotes: '“”‘’',

    highlight: (str, lang) => {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return `<pre class="hljs"><code>${hljs.highlight(lang, str, true).value}</code></pre>`;
            } catch (__) {
                alert(__);
            }
        }
        return '';  // use external default escaping
    }
});

type Props = {};
type State = {
    editor: String;
};
class EditorContainer extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.insertSpaceOnSelection = this.insertSpaceOnSelection.bind(this);
        this.handleChangeMarkdownEditor = this.handleChangeMarkdownEditor.bind(this);
        this.state = {
            editor: md.render('')
        };
    }
    handleChangeMarkdownEditor(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        this.setState({
            editor: md.render(e.target.value.toString())
        });
    }
    insertSpaceOnSelection(e: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) {
        if ((e.keyCode === 9) && !e.shiftKey) {
            e.preventDefault();
            Utils.insertSpaceOnSelection(e, 4);
            this.setState({
                editor: md.render(e.currentTarget.value.toString())
            });
        }
    }
    render() {
        return (
            <Editor
                handleChangeMarkdownEditor={this.handleChangeMarkdownEditor}
                insertSpaceOnSelection={this.insertSpaceOnSelection}
                editor={this.state.editor}
            />
        );
    }
}

export default EditorContainer;