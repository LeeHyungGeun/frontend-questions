import * as React from 'react';
import {
    Question
} from '../Models';
import MultipleChoice from './MultipleChoice';
import ShortAnswer from './ShortAnswer';

type Props = {
    question: Question;
    handleChangeAnswer: Function;
};
type State = {};
class QuestionItem extends React.Component<Props, State> {
    render() {
        const {
            question,
            handleChangeAnswer
        } = this.props;
        return (
            <div>
                {question.category}
                <br />
                Question: {question.question}
                <br />
                {
                    question.type === 0 ? 
                    <MultipleChoice 
                        question={question}
                        handleChangeAnswer={handleChangeAnswer}
                    /> :
                    question.type === 1 ? 
                    <ShortAnswer
                        question={question}
                        handleChangeAnswer={handleChangeAnswer}
                    /> :
                    null
                }
            </div>
        );
    }
}

export default QuestionItem;