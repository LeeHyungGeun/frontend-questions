import * as React from 'react';
import styled from 'styled-components';

type State = {};
type Props = {};
const StyledFooter = styled.footer`
    display: block;
    height: 10rem;
    width: 100%;
    position: absolute;
    bottom: 0;
    background: #ced4da;
`;
class Footer extends React.Component<Props, State> {
    render() {
        return (
            <StyledFooter />
        );
    }
}

export default Footer;