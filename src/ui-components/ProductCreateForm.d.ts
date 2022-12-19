/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProductCreateFormInputValues = {
    Product?: string;
    Price?: number;
    Descrip?: string;
    Photo?: string;
    Deal?: boolean;
    Category?: string;
    Saved?: boolean;
    Commentaries?: string;
};
export declare type ProductCreateFormValidationValues = {
    Product?: ValidationFunction<string>;
    Price?: ValidationFunction<number>;
    Descrip?: ValidationFunction<string>;
    Photo?: ValidationFunction<string>;
    Deal?: ValidationFunction<boolean>;
    Category?: ValidationFunction<string>;
    Saved?: ValidationFunction<boolean>;
    Commentaries?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductCreateFormOverridesProps = {
    ProductCreateFormGrid?: FormProps<GridProps>;
    Product?: FormProps<TextFieldProps>;
    Price?: FormProps<TextFieldProps>;
    Descrip?: FormProps<TextFieldProps>;
    Photo?: FormProps<TextFieldProps>;
    Deal?: FormProps<SwitchFieldProps>;
    Category?: FormProps<TextFieldProps>;
    Saved?: FormProps<SwitchFieldProps>;
    Commentaries?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductCreateFormProps = React.PropsWithChildren<{
    overrides?: ProductCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProductCreateFormInputValues) => ProductCreateFormInputValues;
    onSuccess?: (fields: ProductCreateFormInputValues) => void;
    onError?: (fields: ProductCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ProductCreateFormInputValues) => ProductCreateFormInputValues;
    onValidate?: ProductCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProductCreateForm(props: ProductCreateFormProps): React.ReactElement;
