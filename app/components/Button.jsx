export default function Button({className, onClick, children}) {
    return (
        <button position="fixed" className="button {className}" onClick={onClick}>{children}</button>
    );
}