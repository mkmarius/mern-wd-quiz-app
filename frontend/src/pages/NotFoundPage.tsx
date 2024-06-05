import MainContainer from "../components/MainContainer";
import CustomLink from "../components/CustomLink";

export default function NotFoundPage() {
    return (
        <MainContainer innerLayoutStyling="flex flex-col justify-center items-center">
            <h1 className="text-5xl text-white font-body">404 not found</h1>
            <CustomLink link="/" value="Return Home" />
        </MainContainer>
    );
}
