import { Header, SectionName } from '../../styled/Components.styled';
import { Container, Body, Flex, Flex2, Content, Socials } from './Contact.styled'

const Contact: React.FunctionComponent = () => {

    return (
        <Container id='footer'>

            <Header>Contact.</Header>

            <SectionName
                initial={{ opacity: 0 }}
                whileInView={{ opacity: .2, transition: { duration: 4 } }}
                viewport={{ once: true }}>
                Contact.</SectionName>

            <Body>

                <Flex>
                    <Content>

                        <p>Lets talk about your next amazing idea.👇🏼</p>
                        <a href="mailto:gabrielogrima@gmail.com" rel="noopener" >Send me an email</a>

                    </Content>
                </Flex>
                <Flex2>
                    <Socials>
                        <a href="#null" target="_blank" rel="noreferrer" >LINKEDIN</a>
                        <a href="https://github.com/GabrielAbubakar" target="_blank" rel="noreferrer" >GITHUB</a>
                        <a href="https://twitter.com/GabeAbubakarr" target="_blank" rel="noreferrer" >TWITTER</a>
                    </Socials>
                    <p>
                        &copy; 2023 by GABRIEL ABUBAKAR.
                    </p>
                </Flex2>
            </Body>
        </Container>
    )
}

export default Contact;
