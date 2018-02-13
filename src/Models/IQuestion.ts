interface IQuestion {
    type: Number;   // 0: 객관식, 1: 주관식, 2: 에세이 
    category: String;
    question: String;
    examples: Array<String>;
    answer: String;
}

export default IQuestion;