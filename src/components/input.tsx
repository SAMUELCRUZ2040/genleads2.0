import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type InputProps = {
    type?: InputHTMLAttributes<HTMLInputElement>["type"];
    name: string;
    placeholder?: string;
    inputType?: "input" | "textarea";
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "name" | "placeholder"> &
    Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "name" | "placeholder">;

export const Input: React.FC<InputProps> = ({
    type = "text",
    name,
    placeholder,
    inputType = "input",
    ...rest
}) => {
    return inputType === "textarea" ? (
        <textarea
            name={name}
            placeholder={placeholder}
            id={name}
            className="p-2 bg-transparent rounded-lg focus:outline-none focus:ring-0 border-2 h-64 w-full"
            {...rest}
        />
    ) : (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            id={name}
            className="p-2 bg-transparent rounded-lg focus:outline-none focus:ring-0 border-2 w-full"
            {...rest}
        />
    );
};