import * as React from 'react';
import {
    Question
} from '../Models';

type Props = {
    question: Question;
    handleChangeAnswer: Function;
};
type State = {};
class ShortAnswer extends React.Component<Props, State> {
    render() {
        const {
            question,
            handleChangeAnswer
        } = this.props;
        return (
            <textarea onChange={(e) => { handleChangeAnswer(e.target.value); }}>
                {question.answer}
            </textarea>
        );
    }
}

export default ShortAnswer;