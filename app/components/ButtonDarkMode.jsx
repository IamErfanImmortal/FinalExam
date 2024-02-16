import Button from "./Button";

export default function ButtonDarkMode() {

    function toggleDarkMode() {
        console.log('test');
        // const currentTheme = localStorage.getItem("theme");
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
        

        if (prefersDarkScheme) {
            document.body.classList.toggle("light-theme");
            // localStorage.setItem('theme','light');

        } else {
            document.body.classList.toggle("dark-theme");
            // localStorage.setItem('theme','dark');
            
        }
        
    }
    

    return (
        <Button onClick={toggleDarkMode} className="button-dark-mode">
            Toggle Dark Mode
        </Button>
    );
}