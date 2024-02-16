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
  import pic1 from "./Images/car1.jpg"
  import pic2 from "./Images/car2.jpg"
  import pic3 from "./Images/car4.jpg"
  import pic4 from "./Images/car.png"
  import pic5 from "./Images/car2.png"
  import TheFooter from "./components/TheFooter";
  import Figure from "./components/Figure";
  import Article from "./components/Article";
  import PicLoop from "./components/PicLoop";
  import welcome from "./Images/welcomeimage.png"
  import ButtonDarkMode from "./components/ButtonDarkMode";
  
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
    const pics = [
        {title:"Project 1",url:require("./Images/car1.jpg"),altt:"pic1"},
        {title:"Project 2",url:require("./Images/car2.jpg"),altt:"pic2"},
        {title:"Project 3",url:require("./Images/car4.jpg"),altt:"pic3"}
    ]
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
          <ButtonDarkMode/>
            <TheHeader title="Erfan" menuItems={menuItems}/>
          <Outlet />
          <section className="project-card">
            <img src={pic5} alt="pic" />
          </section>
          <main class="welcome">
            <div class="welcometext">
                <h4 class="welcome">Welcome</h4>
                <h2>Welcome to Arch Studio</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nisi excepturi ad, vel porro fuga libero quod nostrum eveniet odio, cum sapiente reiciendis tenetur nesciunt amet dolorum, voluptatibus iste sit.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque quibusdam quia aliquid ab culpa porro, ducimus sunt officiis quas cumque laboriosam, consequatur dolorum illum facere, et praesentium autem illo maxime?</p>
            </div>
            <img src={welcome} alt="" class="welcomeimage"/>
        </main>
          <aside class="project-card">
            <img src={pic4} alt="pic"></img>
            <div class="aboutuscontent">
                <h2 class="aboutustext">Small Team,</h2>
                <h2 class="aboutustext">big ideas</h2>
                <button>About us</button>
            </div>
        </aside>
          <section className="feature">
            <div class="featuretitle">
                  <h2>Featured</h2>
                  <a href=""><button>See All</button></a>
            </div> 
            <div className="futurecards">
              <PicLoop pics={pics}/>
            </div> 
          </section>
          
            
            <TheFooter/>
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
  