export interface FormBuilderInterface {
    account: string;
    pageName: string;
    formFieldArray: FormField[];
}

export interface FormField {
    type: string;
    name: string;
    label: string;
    required: boolean;
    options?: SelectFormFieldOption[]
}

export interface SelectFormFieldOption {
    display: string;

}