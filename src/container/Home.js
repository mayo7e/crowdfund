// import "../components/button/button.css"
import {PrimaryButton, PrimaryButtonDisabled, SecondaryButton, SecondaryButtonDisabled,
     WhiteButton, WhiteButtonDisabled, ButtonAsLink, CounterButton} from "../components/button/button-component"


const Home = () => {
    return ( 

        <div>
            <h1 className="heading-lg-semibold">Hello World</h1>
            <PrimaryButton />
            <PrimaryButtonDisabled />
            <SecondaryButton />
            <SecondaryButtonDisabled />
            <WhiteButton />
            <WhiteButtonDisabled />
            <ButtonAsLink />
            <CounterButton />

        </div>
    );
}
 
export default Home;