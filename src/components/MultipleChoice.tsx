import * as React from 'react';
import styled from 'styled-components';
import {
    Question
} from '../Models';

const StyledSelectInput = styled.input`
    cursor: pointer;
`;
const StyledLabel = styled.label`
    cursor: pointer;
`;

type Props = {
    question: Question;
    handleChangeAnswer: Function;
};
type State = {};
class MultipleChoice extends React.Component<Props, State> {
    render() {
        const {
            question,
            handleChangeAnswer
        } = this.props;
        return (
            <div>
                Examples: 
                {   
                    question.examples.map((example, key) => {
                        return (
                            <div
                                key={key}
                            >
                                <StyledLabel htmlFor={`examples_${example}`}>
                                    <StyledSelectInput 
                                        type="radio" 
                                        id={`examples_${example}`}
                                        name={`examples_${question.question}`}
                                        value={example.toString()} 
                                        checked={example === question.answer ? true : false}
                                        onChange={() => { handleChangeAnswer(example); }}
                                    />
                                    {example}
                                </StyledLabel>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default MultipleChoice;