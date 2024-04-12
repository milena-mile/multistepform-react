import React from "react";

interface InputRadio {
    name: string,
    text: string,
    checked: boolean,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export type {InputRadio};