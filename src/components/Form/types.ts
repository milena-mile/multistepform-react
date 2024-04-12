interface FormSteps {
    data: {[key: string]: string | string[]},
    checked?: boolean,
    handleChange: (name: string, value: string | string[]) => void
}

export type { FormSteps };