
import './header.css'

function header(){
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    };
    const scrolltop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <nav className="navbar">

            <div className="navbar-content">
                <a href="#about" onClick={scrolltop} className="navbar-button">About Me</a>
                <a href="#contact" onClick={scrollToBottom} className="navbar-button2">Contact</a>
            </div>
        </nav>

    );
}

export default header