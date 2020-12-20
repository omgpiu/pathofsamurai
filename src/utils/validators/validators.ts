export const required: FieldValidatorType = (value) => {
    return value ? undefined : 'Field is required';
};


export const maxLengthCreator = (maxLength: number):FieldValidatorType => (value) => {
    return value && value.length > maxLength ? `Must be less ${maxLength} symbols` : undefined;
};

export type FieldValidatorType = (value: string) => string | undefined
