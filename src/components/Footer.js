import '../stylesheets/Footer.css';

const Footer = () => {
    return(
        <div className="footer-container">
            <p>made with ❤️ by       
                <span> <a
                    href='https://www.github.com/webdev-vignesh' 
                    target='_blank' 
                    rel='noreferrer'
                    className='footer-link'
                    >Vignesh Murugan</a>
                </span>
            </p>
        </div>
    )
}

export default Footer;