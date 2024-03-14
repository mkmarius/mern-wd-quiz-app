import { useRef, useEffect } from "react";

export function MatrixAnimationOverlay() {
    const canvasRef = useRef(null);
    const katakana =
        "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    const alphabet: string = katakana + latin + nums;
    const fontSize = 50;

    useEffect(() => {
        if (canvasRef.current) {
            const canvas: HTMLCanvasElement = canvasRef.current;
            const context: CanvasRenderingContext2D | null =
                canvas.getContext("2d");
            setInterval(() => {
                draw(canvas, context, fontSize, alphabet);
            }, 100);
        }
    });

    return <canvas ref={canvasRef}></canvas>;
}

function draw(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D | null,
    fontSize: number,
    alphabet: string
) {
    canvas.width = fontSize;
    canvas.height = window.innerHeight / 1.3;

    const columns: number = 20;
    const rainDrops: number[] = [];

    for (let x = 0; x < columns; x++) {
        rainDrops[x] = 0;
    }

    if (context) {
        context.fillStyle = "#000C24";
        context.fillRect(0, 0, canvas.height, canvas.height);
        context.fillStyle = "#3F9DCE";
        context.font = fontSize + "px monospace";
    }

    for (let i = 0; i < rainDrops.length; i++) {
        const text: string = alphabet.charAt(
            Math.floor(Math.random() * alphabet.length)
        );

        context?.fillText(text, rainDrops[i] * fontSize, i * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }

        rainDrops[i]++;
    }
}
