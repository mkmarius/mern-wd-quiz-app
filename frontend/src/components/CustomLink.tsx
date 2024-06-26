import { Link } from "react-router-dom";

type LinkProps = {
    link: string;
    value: string;
};

export default function CustomLink(props: LinkProps) {
    return (
        <Link
            className="cta-btn text-white border-2 rounded-lg font-body font-bold border-light-digital-blue bg-medium-digital-blue px-5 py-2 text-[2.5rem] mt-[2.5rem]"
            to={props.link}>
            {props.value}
        </Link>
    );
}
