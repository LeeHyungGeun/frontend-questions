import * as React from 'react';
import styled from 'styled-components';
import MarkdownView from './Markdown/MarkdownView';
import MarkdownEditor from './Markdown/MarkdownEditor';

const StyledHeader = styled.menu`
    display: flex;
    height: 3rem;
    // background: #495057;
    background: #21252A;
    padding: 0;
    margin: 0;
    border-bottom: 2px solid #485057;
`;
const StyledDocumentTitle = styled.input`
    border: none;
    outline: none;
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
    margin-left: 0.3rem;
    padding: 0;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    flex: 1;
    font-size: 1.25rem;
    background: #5a6169;
    color: #F8F9FA;
    font-weight: 600;
    word-break: break-all;
`;
const StyledDocumentSubmitButtom = styled.button`
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
    margin-left: 0.3rem;
    margin-left: 0.3rem;
    margin-right: 0.3rem;
    font-weight: 600;
    user-select: none;
    color: #ACB5BE;
    border: none;
    outline: none;
    background: #333A40;
    cursor: pointer;
    transition: 0.2s;

    &:active {
        background: #495057;
    }
`;

const StyledEditor = styled.div`
    display: flex;
    height: calc(100vh - 3rem);
`;
const StyledVerticalLine = styled.div`
    width: 2px;
    background: #485057;
`;
type Props = {
    handleChangeMarkdownEditor: Function;
    insertSpaceOnSelection: Function;
    editor: String
};
type State = {};
class Editor extends React.Component<Props, State> {
    render() {
        const {
            handleChangeMarkdownEditor,
            insertSpaceOnSelection,
            editor
        } = this.props;
        return (
            <div>
                <StyledHeader>
                    <StyledDocumentTitle />
                    <StyledDocumentSubmitButtom tabIndex={-1}>
                        SUBMIT
                    </StyledDocumentSubmitButtom>
                </StyledHeader>
                <StyledEditor>
                    <MarkdownEditor
                        handleChangeMarkdownEditor={handleChangeMarkdownEditor}
                        insertSpaceOnSelection={insertSpaceOnSelection}
                    />
                    <StyledVerticalLine />
                    <MarkdownView
                        editor={editor}
                    />
                </StyledEditor>
            </div>
        );
    }
}

export default Editor;