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
        <body>
            <TheHeader title="Erfan" menuItems={menuItems}/>
          <h1>Hello world!</h1>
          <Outlet />
          <section className="project-card">
            {/* <img src={pic1} alt="pic" /> */}
          </section>
            
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
  