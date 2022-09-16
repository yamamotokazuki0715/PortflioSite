import HeaderCss from '../../Modules/CSS/HeaderCss.module.css';

import {Link} from 'react-router-dom';

function Header () {
    return(
    <>
        <header className={HeaderCss.pcHeader}>
            <div className={HeaderCss.pcHeaderLeft}>
                <Link to="/">
                    <h1 className={HeaderCss.pcHeaderLogo}>Yamamoto Kazuki's PortFolio</h1>
                </Link>
            </div>
            <div className={HeaderCss.pcHeaderRight}></div>
        </header>
    </>
    );
};

export default Header;
