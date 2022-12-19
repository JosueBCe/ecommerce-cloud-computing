/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SellCreateFormInputValues = {
    Thing?: string;
    Price?: number;
};
export declare type SellCreateFormValidationValues = {
    Thing?: ValidationFunction<string>;
    Price?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SellCreateFormOverridesProps = {
    SellCreateFormGrid?: FormProps<GridProps>;
    Thing?: FormProps<TextFieldProps>;
    Price?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SellCreateFormProps = React.PropsWithChildren<{
    overrides?: SellCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SellCreateFormInputValues) => SellCreateFormInputValues;
    onSuccess?: (fields: SellCreateFormInputValues) => void;
    onError?: (fields: SellCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: SellCreateFormInputValues) => SellCreateFormInputValues;
    onValidate?: SellCreateFormValidationValues;
} & React.CSSProperties>;
export default function SellCreateForm(props: SellCreateFormProps): React.ReactElement;
