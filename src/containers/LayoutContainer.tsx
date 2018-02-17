import * as React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

class LayoutContainer extends React.Component {
    menus: Array<String> = [
        'Editor',
        'JavaScript',
        'HTML',
        'CSS',
        'Network'
    ];
    handleClickNavigation = (menu: String) => {
        location.href = `/${menu}`;
    }
    render() {
        const {
            menus,
            handleClickNavigation
        } = this;
        const {
            children
        } = this.props;
        return (
            <div>
                <Header 
                    menus={menus}
                    handleClickNavigation={handleClickNavigation}
                />
                {children}
                <Footer />
            </div>
        );
    }
}

export default LayoutContainer;