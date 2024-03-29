export default function TheFooter() {
    return (
        <footer>
            <ul className="footer__menu">
                <h3><a href="/" rel="home" className="footer__logo">
                    <img src={require("../images/footerlogo.png")} alt="" />
                    </a></h3>
                <li><a className="header__menu-link" href="#x.com">Portfolio</a></li>
                <li><a className="header__menu-link" href="#linkedin">About</a></li>
                <li><a className="header__menu-link" href="#facebook">Contact</a></li>
                <button class="footerbutton">See our Portfolio</button>
            </ul>    
        </footer>
    )
}