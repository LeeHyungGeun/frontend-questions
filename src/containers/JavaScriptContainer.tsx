import * as React from 'react';
import {
    Question
} from '../Models';
import QuestionItem from '../Components/QuestionItem';
import withLayout from './withLayout';

type Props = {};
type State = {
    question: Question
};

@withLayout
class JavaScriptContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.handleChangeAnswer = this.handleChangeAnswer.bind(this);

        this.state = {
            question: {
                type: 1,
                category: 'React',
                question: '이름이 뭐에요?',
                examples: [
                    '김씨',
                    '이씨',
                    '최씨',
                    '박씨'
                ],
                answer: ''
            }
        };
    }
    handleChangeAnswer = (answer: Question['answer']) => {
        const tempQuestion = this.state.question;
        tempQuestion.answer = answer;
        this.setState({
            question: tempQuestion
        });
    }
    render() {
        const {
            question
        } = this.state;
        return (
            <div>
                <QuestionItem
                    question={question}
                    handleChangeAnswer={this.handleChangeAnswer}
                />
            </div>
        );
    }
}

export default JavaScriptContainer;