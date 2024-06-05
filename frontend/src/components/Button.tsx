import { MouseEventHandler } from 'react';

type ButtonProps = {
    value: string;
    class: string;
    event: MouseEventHandler<HTMLButtonElement> | undefined;
};

export default function Button(props: ButtonProps) {
    return (
        <button onClick={props.event}
            className={`text-light-digital-blue border-2 rounded-lg font-body font-bold bg-medium-digital-blue border-light-digital-blue px-3 py-2 text-2xl w-full mt-5 hover:bg-light-digital-blue hover:text-white ${props.class}`}>
            {props.value}
        </button>
    );
}
