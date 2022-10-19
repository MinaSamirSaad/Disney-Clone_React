import { Container, Content, BgImage, CTA, CTALogoOne, SignUp, Description, CTALogoTwo } from "./Login.styles"
import logoOne from "../../assets/images/cta-logo-one.svg"
import logoTwo from "../../assets/images/cta-logo-two.png"



const Login = () => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src={logoOne} alt="" />
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>
                        Get Premier Access to Raya and the Last Dragon for an additional fee
                        with a Disney+ subscription. As of 03/26/21, the price of Disney+
                        and The Disney Bundle will increase by $1.
                    </Description>
                    <CTALogoTwo src={logoTwo} alt=""/>
                </CTA>
                <BgImage />
            </Content>
        </Container>
    )
}

export default Login