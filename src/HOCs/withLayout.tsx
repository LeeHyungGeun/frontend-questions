import * as React from 'react';
import Layout from '../Containers/LayoutContainer';

type Props = {};
type State = {};
function withLayout(WrappedComponent: React.ComponentType): any {
    return class WLC extends React.Component<Props, State> {
        constructor(props: Props) {
            super(props);
        }
        render() {
            return (
                <Layout>
                    <WrappedComponent {...this.props} />
                </Layout>
            );
        }
    };
}

export default withLayout;