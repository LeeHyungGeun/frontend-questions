import * as React from 'react';
import styled from 'styled-components';

type Props = {
    menus: Array<String>
    handleClickNavigation: Function
};
type State = {
};
const StyledNavigation = styled.nav`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    margin-left: 3rem;
`;
const StyledNavigationItem = styled.nav`
    & + * {
        margin-left: 1rem;
    }
`;
const StyledNavigationLink = styled.a`
    user-select: none;
    text-decoration: none;
    color: white;
    cursor: pointer;
`;
class Navigation extends React.Component<Props, State> {
    render() {
        const {
            menus,
            handleClickNavigation
        } = this.props;
        return (
            <StyledNavigation>
                {
                    menus.map((menu, key) => {
                        return (
                            <StyledNavigationItem
                                key={key}
                            >
                                <StyledNavigationLink
                                    onClick={() => {
                                        handleClickNavigation(menu);
                                    }}
                                >
                                    {menu}
                                </StyledNavigationLink>
                            </StyledNavigationItem>
                        );
                    })
                }
            </StyledNavigation>
        );
    }
}

export default Navigation;