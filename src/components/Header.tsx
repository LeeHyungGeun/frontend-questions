import * as React from 'react';
import Navigation from '../components/Navigation';
import styled from 'styled-components';

type Props = {
    menus: Array<String>
    handleClickNavigation: Function
};
type State = {};
const StyledHeader = styled.header`
    display: flex;
    flex: 1;
    min-height: 3rem;
    color: white;
    background: #495057;

    justify-content: 'center';
    align-items: 'center';
`;
class Header extends React.Component<Props, State> {
    render () {
        const {
            menus,
            handleClickNavigation
        } = this.props;
        return (
            <StyledHeader>
                <Navigation 
                    menus={menus}
                    handleClickNavigation={handleClickNavigation}
                />
            </StyledHeader>
        );
    }
}

export default Header;