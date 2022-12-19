/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Sell } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SellUpdateFormInputValues = {
    Thing?: string;
    Price?: number;
};
export declare type SellUpdateFormValidationValues = {
    Thing?: ValidationFunction<string>;
    Price?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SellUpdateFormOverridesProps = {
    SellUpdateFormGrid?: FormProps<GridProps>;
    Thing?: FormProps<TextFieldProps>;
    Price?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SellUpdateFormProps = React.PropsWithChildren<{
    overrides?: SellUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sell?: Sell;
    onSubmit?: (fields: SellUpdateFormInputValues) => SellUpdateFormInputValues;
    onSuccess?: (fields: SellUpdateFormInputValues) => void;
    onError?: (fields: SellUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: SellUpdateFormInputValues) => SellUpdateFormInputValues;
    onValidate?: SellUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SellUpdateForm(props: SellUpdateFormProps): React.ReactElement;
