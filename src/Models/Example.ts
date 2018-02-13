import IExample from './IExample';

class Example implements IExample {
    example: IExample['example'];
    constructor(props: IExample) {
        for (let key in props) {
            if (props[key].hasOwnProperty(key)) {
                this[key] = props[key];
            }
        }
    }
}

export default Example;