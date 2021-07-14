import React from 'react'
import {animateScroll as scroll} from 'react-scroll' 
import {
    FooterContainer
    ,FooterWrap
    ,FooterLinksContainer
    ,FooterLinksWrapper
    ,FooterLinkItems
    ,FooterLinkTitle
    ,FooterLink
    ,SocialMedia
    ,SocialMediaWrap
    ,SocialLogo
    ,SocialIcons
    ,SocialIconLink
    ,WebsiteRights
} from './FooterElenments'

import {FaFacebook,FaInstagram,FaYoutube,FaLinkedin,FaTwitter} from 'react-icons/fa'

const Footer = () => {

    const toggleHome = ()=>{
        scroll.scrollToTop();
    }

    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle> About Us </FooterLinkTitle>
                                <FooterLink to="/signup">How it works</FooterLink>
                                <FooterLink to="/">Testimonials</FooterLink>
                                <FooterLink to="/">Careers</FooterLink>
                                <FooterLink to="/">Investors</FooterLink>
                                <FooterLink to="/">Terms of Service</FooterLink>
                            </FooterLinkItems>

                            <FooterLinkItems>
                                <FooterLinkTitle> Videos </FooterLinkTitle>
                                <FooterLink to="/">Submit Video</FooterLink>
                                <FooterLink to="/">Ambassadors</FooterLink>
                                <FooterLink to="/">Agency</FooterLink>
                                <FooterLink to="/">Influencer</FooterLink>
                            </FooterLinkItems>

                            <FooterLinkItems>
                                <FooterLinkTitle> Constact Us </FooterLinkTitle>
                                <FooterLink to="/">Constact</FooterLink>
                                <FooterLink to="/">Support</FooterLink>
                                <FooterLink to="/">Destinations</FooterLink>
                                <FooterLink to="/">Sponsorships</FooterLink>
                            </FooterLinkItems>

                            <FooterLinkItems>
                                <FooterLinkTitle> Social Media </FooterLinkTitle>
                                <FooterLink to="/">Instagram</FooterLink>
                                <FooterLink to="/">Facebook</FooterLink>
                                <FooterLink to="/">YouTube</FooterLink>
                                <FooterLink to="/">Twitter</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/'
                                onClick={toggleHome}
                            >
                                dolla.
                            </SocialLogo>
                            <WebsiteRights>dolla. {new Date().getFullYear() } All right reserved</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="/" target="_blank" aria-lable="facebook">
                                    <FaFacebook />
                                </SocialIconLink>

                                <SocialIconLink href="/" target="_blank" aria-lable="Instagram">
                                    <FaInstagram />
                                </SocialIconLink>

                                <SocialIconLink href="/" target="_blank" aria-lable="Youtube">
                                    <FaYoutube />
                                </SocialIconLink>

                                <SocialIconLink href="/" target="_blank" aria-lable="Twitter">
                                    <FaTwitter />
                                </SocialIconLink>

                                <SocialIconLink href="/" target="_blank" aria-lable="Linkedin">
                                    <FaLinkedin />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>

                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer
