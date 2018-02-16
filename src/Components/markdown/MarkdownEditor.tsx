import * as React from 'react';
import styled from 'styled-components';
import { ChangeEvent, KeyboardEvent } from 'react';

const StyledEditorMarkdown = styled.textarea`
    font-size: 16px;
    background: #21252A;
    padding: 0.5rem 0.5rem;
    flex: 1;
    outline: none;
    border: none;
    color: white;
    word-break: break-all;
    overflow: scroll;
    resize: none;
`;

type Props = {
    handleChangeMarkdownEditor: Function;
    insertSpaceOnSelection: Function;
};
type State = {};
class MarkdownEditor extends React.Component<Props, State> {
    render() {
        const {
            handleChangeMarkdownEditor,
            insertSpaceOnSelection
        } = this.props;
        return (
            <StyledEditorMarkdown 
                autoFocus={true}
                // contentEditable={true}
                onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => { 
                    handleChangeMarkdownEditor(e); 
                }}
                onKeyDown={(e: KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => { 
                    insertSpaceOnSelection(e); 
                }}
            />
        );
    }
}

export default MarkdownEditor;