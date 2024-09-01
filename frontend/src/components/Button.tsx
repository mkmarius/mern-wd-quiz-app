import { MouseEventHandler } from "react";

type ButtonProps = {
    value: string;
    class: string;
    event: MouseEventHandler<HTMLButtonElement> | undefined;
};

export default function Button(props: ButtonProps) {
    return (
        <button
            onClick={props.event}
            className={`text-dark-digital-blue border-2 rounded-lg font-body font-bold bg-light-digital-blue border-light-digital-blue hover:border-light-digital-blue hover:text-white hover:bg-medium-digital-blue px-3 py-2 text-2xl w-full ${props.class}`}>
            {props.value}
        </button>
    );
}
