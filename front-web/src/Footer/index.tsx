import './styles.css';
import {ReactComponent as Linkedin} from './Img/Linkedin.svg';
import {ReactComponent as Instagram} from './Img/Instagram.svg';
import {ReactComponent as Youtube} from './Img/Youtube.svg';

function Footer(){
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento <b>Semana DevSuperior</b>
            <div className="footer-icons">
                <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                    <Youtube/>
                </a>
                <a href="https://www.linkedin.com/school/devsuperior/" target="_new">
                    <Linkedin/>
                </a>
                <a href="https://www.instagram.com/devsuperior.ig" target="_new">
                    <Instagram/>
                </a>
            </div>
        </footer>
    );

}

export default Footer;