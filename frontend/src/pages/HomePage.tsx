import MainContainer from "../components/MainContainer";
import { MatrixAnimationOverlay } from "../components/MatrixAnimationOverlay";
import MainHeading from "../components/MainHeading";
import IntroDescription from "../components/IntroDescription";
import Button from "../components/Button";

export default function HomePage() {
    return (
        <MainContainer innerLayoutStyling="flex flex-col justify-center items-center">
            <div className="inner-container flex justify-center w-[90%] items-center">
                <MatrixAnimationOverlay />
                <div className="intro-container w-full flex flex-col items-center justify-between h-[90%]">
                    <MainHeading />
                    <IntroDescription />
                    <Button link="/quiz" value="Start" />
                </div>
                <MatrixAnimationOverlay />
            </div>
        </MainContainer>
    );
}
