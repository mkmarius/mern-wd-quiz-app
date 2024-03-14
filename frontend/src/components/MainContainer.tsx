type MainContainerProps = {
    children: React.ReactNode;
    innerLayoutStyling: string;
};

export default function MainContainer(props: MainContainerProps) {
    return (
        <>
            <div className="main-container p-10 bg-dark-digital-blue h-[100vh] flex justify-center items-center">
                <div
                    className={`inner-container p-5 border-2 border-light-digital-blue rounded-lg h-[95vh] w-[100vw] ${props.innerLayoutStyling}`}
                >
                    {props.children}
                </div>
            </div>
        </>
    );
}
