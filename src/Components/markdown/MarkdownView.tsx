import * as React from 'react';
import styled from 'styled-components';
import './github.min.css';  // default style sheet
import 'highlight.js/styles/vs2015.css'; // Markdown Code style sheet

type Props = {
    editor: String;
};
type State = {};
const StyledEditorView = styled.div`
    background: #FFF;
    padding: 0.5rem 0.5rem;
    text-align: left;
    flex: 1;
    justify-content: flex-start;
    word-break: break-all;
    overflow: scroll;
`;
class MarkdownView extends React.Component<Props, State> {
    render() {
        return (
            <StyledEditorView
                dangerouslySetInnerHTML={{__html: this.props.editor.toString()}}
            />
        );
    }
}

export default MarkdownView;