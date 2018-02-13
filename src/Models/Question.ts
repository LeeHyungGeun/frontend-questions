import IQuestion from './IQuestion';

class Question implements IQuestion {
    type: IQuestion['type'];
    category: IQuestion['category'];
    question: IQuestion['question'];
    examples: IQuestion['examples'];
    answer: IQuestion['answer'];
    constructor(props: IQuestion) {
        for (let key in props) {
            if (props[key].hasOwnProperty(key)) {
                this[key] = props[key];
            }
        }
    }
}

export default Question;