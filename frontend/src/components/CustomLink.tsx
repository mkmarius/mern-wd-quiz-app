import { Link } from "react-router-dom";

type LinkProps = {
    link: string;
    value: string;
    class?: string;
};

export default function CustomLink(props: LinkProps) {
    return (
        <Link
            className={`cta-btn text-white border-2 rounded-lg font-body font-bold hover:bg-medium-digital-blue hover:text-white bg-light-digital-blue border-light-digital-blue  px-5 py-2 text-[2.5rem] mt-[2.5rem] ${props.class}`}
            to={props.link}>
            {props.value}
        </Link>
    );
}
