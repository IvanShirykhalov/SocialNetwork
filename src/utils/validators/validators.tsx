export const requiredField = (value: string | undefined) => {
    if (value) {
        return undefined
    }
    return 'Fields is required'
}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if (value && value.length > maxLength) {
        return `Max length is ${maxLength} symbols`
    }
    return undefined
}