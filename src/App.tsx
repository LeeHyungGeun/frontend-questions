import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';
import Layout from './containers/LayoutContainer';

class App extends React.Component {
    render() {
        return (
            <Layout>
                <BrowserRouter children={routes} />
            </Layout>
        );
    }
}
export default App;