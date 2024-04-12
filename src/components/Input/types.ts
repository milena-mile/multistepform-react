import React from "react";
interface IInput {
    type: string,
    name: string,
    data: {[key: string]: string | string[]},
    icon: string,
    placeholder: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export type {IInput};