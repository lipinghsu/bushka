import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import './styles.scss';

const Footer = (props) => {
    const [email, setEmail] = useState('');
    const [signedUpNewsletter, setSignedUpNewsletter] = useState(false);
    const { i18n, t } = useTranslation(["footer", "common"]);

    const languageChange = (event) => {
        i18n.changeLanguage(event.target.value);
        i18next.changeLanguage(event.target.value);

        setTimeout(() => {
            window.location.reload();
        }, 100);
    }

    useEffect(() => {
        if (localStorage.getItem("i18nextLng")?.length > 2) {
            i18next.changeLanguage("en");
        }
    }, [])

    return (
        <footer className='footer' id="footer" className="dark">
            <div>
                <div className="box-container">
                    <div className="box-bottom">
                        <div className="content-wrapper">
                            <h>© BÜSHKA 2023</h>
                            <select 
                                name="language" 
                                onChange={languageChange}
                                value={localStorage.getItem("i18nextLng")}
                            >
                                <option value="en">EN (US)</option>
                                <option value="tw">繁體中文</option>
                            </select>
                            
                            <Link to="terms">
                                {t("TERMS & PRIVACY")}
                            </Link>

                            {/* Language selector moved to the right */}

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
