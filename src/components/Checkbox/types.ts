import React from "react";

interface InputCheckbox {
    icon: string,
    name: string,
    checked: boolean,
    text: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export type {InputCheckbox};