import { Main } from "../components/containers/Main"
import { Wrapper } from "../components/containers/Wrapper"
import { Title } from "../components/typography/pageTitle"


export const Home = () => {
    return(
        <Wrapper>
          <Main height= '100vh' flexDirection="column" marginTop="80px">
            <Title>Acumulado Grilla</Title>
          </Main>
        </Wrapper>
    )
}