import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
  } from "@remix-run/react";
  import styles from "./styles/app.css";
  import TheHeader from "./components/TheHeader/TheHeader";  
  import TheHeaderStyles from "./components/TheHeader/TheHeader.css";
  import pic1 from "./Images/tlou.jpg"
  
  
  export const meta = () => [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    },
  ];
  export const links = () => [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "stylesheet",
      href: TheHeaderStyles,
    },
  ];
  export default function App() {
    const menuItems = ['Portfolio', 'About',"Contact"];
    return (
      <html>
        <head>
          <link
            rel="icon"
            href="data:image/x-icon;base64,AA"
          />
          <Meta />
          <Links />
        </head>
        <body className="container">
            <TheHeader title="Hossein" menuItems={menuItems}/>
          <Outlet />
          <section className="project-card">
            <img src={pic1} alt="pic" />
          </section>
          <section className="project-card">
            <img src={pic1} alt="pic" />
          </section>
          <section className="project-card">
            <img src={pic1} alt="pic" />
          </section>
            <TheHeader title="Featured" menuItems={["see all"]}/>   
            <section>
                <div className="container projects">
                    <ul className="projects__list">  
                                <li className="project-list__item">
                                    <article class="project-card">
                                        <figure class="project-card__figure">
                                            <img
                                                src="https://plus.unsplash.com/premium_photo-1682436568953-f0a0b0d5cdff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmUlMjBhcHB8ZW58MHx8MHx8fDA%3D"
                                                alt="A person holding an iPhone showcasing project 3" class="project-card__image"/>
                                            
                                        </figure>
                                        <div class="project-card__container">
                                            <h3 class="project-card__title">Project 3 - Mobile Payment App</h3>
                                           
                                        </div>
                                        
                                    </article>
                                </li>
                                <li className="project-list__item">
                                    <article class="project-card">
                                        <figure class="project-card__figure">
                                            <img
                                                src="https://plus.unsplash.com/premium_photo-1682436568953-f0a0b0d5cdff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmUlMjBhcHB8ZW58MHx8MHx8fDA%3D"
                                                alt="A person holding an iPhone showcasing project 3" class="project-card__image"/>
                                            
                                        </figure>
                                        <div class="project-card__container">
                                            <h3 class="project-card__title">Project 3 - Mobile Payment App</h3>
                                           
                                        </div>
                                        
                                    </article>
                                </li>
                                <li className="project-list__item">
                                    <article class="project-card">
                                        <figure class="project-card__figure">
                                            <img
                                                src="https://plus.unsplash.com/premium_photo-1682436568953-f0a0b0d5cdff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmUlMjBhcHB8ZW58MHx8MHx8fDA%3D"
                                                alt="A person holding an iPhone showcasing project 3" class="project-card__image"/>
                                            
                                        </figure>
                                        <div class="project-card__container">
                                            <h3 class="project-card__title">Project 3 - Mobile Payment App</h3>
                                           
                                        </div>
                                        
                                    </article>
                                </li>
                    </ul>
                </div>
            </section>
            <footer>
                <ul className="footer__menu">
                    <h3><a href="/" rel="home" className="header__logo">Hossein</a></h3>
                    <li><a className="header__menu-link" href="#x.com">Portfolio</a></li>
                    <li><a className="header__menu-link" href="#linkedin">About</a></li>
                    <li><a className="header__menu-link" href="#facebook">Contact</a></li>
                </ul>
                <button>See our Porfolio</button>    
            </footer>
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
  