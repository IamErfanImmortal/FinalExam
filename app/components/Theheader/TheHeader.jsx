export default function TheHeader({title, menuItems}) {
    return (
        <header className="header">
            <nav className="header__nav">
            
                <ul className="header__menu">
                    <h3><a href="/" rel="home" className="header__logo">{title}</a></h3>
                    {menuItems.map(name => {
                        return <li key={name} className="header__menu-item"><a className="header__menu-link" href={name}>{name}</a></li>
                    })}   
                </ul>
            </nav>
        </header>
    );
}