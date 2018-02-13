import * as React from 'react';
import NotFound from '../components/NotFound';

type Props = {};
type State = {};
class NotFoundContainer extends React.Component<Props, State> {
    render() {
        return (
            <NotFound />
        );
    }
}

export default NotFoundContainer;