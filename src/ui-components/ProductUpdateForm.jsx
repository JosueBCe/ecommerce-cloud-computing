/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function ProductUpdateForm(props) {
  const {
    id,
    product,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Product: undefined,
    Price: undefined,
    Descrip: undefined,
    Photo: undefined,
    Deal: false,
    Category: undefined,
    Saved: false,
    Commentaries: undefined,
  };
  const [Product, setProduct] = React.useState(initialValues.Product);
  const [Price, setPrice] = React.useState(initialValues.Price);
  const [Descrip, setDescrip] = React.useState(initialValues.Descrip);
  const [Photo, setPhoto] = React.useState(initialValues.Photo);
  const [Deal, setDeal] = React.useState(initialValues.Deal);
  const [Category, setCategory] = React.useState(initialValues.Category);
  const [Saved, setSaved] = React.useState(initialValues.Saved);
  const [Commentaries, setCommentaries] = React.useState(
    initialValues.Commentaries
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...productRecord };
    setProduct(cleanValues.Product);
    setPrice(cleanValues.Price);
    setDescrip(cleanValues.Descrip);
    setPhoto(cleanValues.Photo);
    setDeal(cleanValues.Deal);
    setCategory(cleanValues.Category);
    setSaved(cleanValues.Saved);
    setCommentaries(cleanValues.Commentaries);
    setErrors({});
  };
  const [productRecord, setProductRecord] = React.useState(product);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Product, id) : product;
      setProductRecord(record);
    };
    queryData();
  }, [id, product]);
  React.useEffect(resetStateValues, [productRecord]);
  const validations = {
    Product: [{ type: "Required" }],
    Price: [{ type: "Required" }],
    Descrip: [{ type: "Required" }],
    Photo: [{ type: "Required" }, { type: "URL" }],
    Deal: [],
    Category: [],
    Saved: [],
    Commentaries: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Product,
          Price,
          Descrip,
          Photo: Photo || undefined,
          Deal,
          Category,
          Saved,
          Commentaries,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(
            Product.copyOf(productRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "ProductUpdateForm")}
    >
      <TextField
        label="Product"
        isRequired={true}
        isReadOnly={false}
        defaultValue={Product}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Product: value,
              Price,
              Descrip,
              Photo,
              Deal,
              Category,
              Saved,
              Commentaries,
            };
            const result = onChange(modelFields);
            value = result?.Product ?? value;
          }
          if (errors.Product?.hasError) {
            runValidationTasks("Product", value);
          }
          setProduct(value);
        }}
        onBlur={() => runValidationTasks("Product", Product)}
        errorMessage={errors.Product?.errorMessage}
        hasError={errors.Product?.hasError}
        {...getOverrideProps(overrides, "Product")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={Price}
        onChange={(e) => {
          let value = Number(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              Price: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              Product,
              Price: value,
              Descrip,
              Photo,
              Deal,
              Category,
              Saved,
              Commentaries,
            };
            const result = onChange(modelFields);
            value = result?.Price ?? value;
          }
          if (errors.Price?.hasError) {
            runValidationTasks("Price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("Price", Price)}
        errorMessage={errors.Price?.errorMessage}
        hasError={errors.Price?.hasError}
        {...getOverrideProps(overrides, "Price")}
      ></TextField>
      <TextField
        label="Descrip"
        isRequired={true}
        isReadOnly={false}
        defaultValue={Descrip}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Product,
              Price,
              Descrip: value,
              Photo,
              Deal,
              Category,
              Saved,
              Commentaries,
            };
            const result = onChange(modelFields);
            value = result?.Descrip ?? value;
          }
          if (errors.Descrip?.hasError) {
            runValidationTasks("Descrip", value);
          }
          setDescrip(value);
        }}
        onBlur={() => runValidationTasks("Descrip", Descrip)}
        errorMessage={errors.Descrip?.errorMessage}
        hasError={errors.Descrip?.hasError}
        {...getOverrideProps(overrides, "Descrip")}
      ></TextField>
      <TextField
        label="Photo"
        isRequired={true}
        isReadOnly={false}
        defaultValue={Photo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Product,
              Price,
              Descrip,
              Photo: value,
              Deal,
              Category,
              Saved,
              Commentaries,
            };
            const result = onChange(modelFields);
            value = result?.Photo ?? value;
          }
          if (errors.Photo?.hasError) {
            runValidationTasks("Photo", value);
          }
          setPhoto(value);
        }}
        onBlur={() => runValidationTasks("Photo", Photo)}
        errorMessage={errors.Photo?.errorMessage}
        hasError={errors.Photo?.hasError}
        {...getOverrideProps(overrides, "Photo")}
      ></TextField>
      <SwitchField
        label="Deal"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Deal}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Product,
              Price,
              Descrip,
              Photo,
              Deal: value,
              Category,
              Saved,
              Commentaries,
            };
            const result = onChange(modelFields);
            value = result?.Deal ?? value;
          }
          if (errors.Deal?.hasError) {
            runValidationTasks("Deal", value);
          }
          setDeal(value);
        }}
        onBlur={() => runValidationTasks("Deal", Deal)}
        errorMessage={errors.Deal?.errorMessage}
        hasError={errors.Deal?.hasError}
        {...getOverrideProps(overrides, "Deal")}
      ></SwitchField>
      <TextField
        label="Category"
        isRequired={false}
        isReadOnly={false}
        defaultValue={Category}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Product,
              Price,
              Descrip,
              Photo,
              Deal,
              Category: value,
              Saved,
              Commentaries,
            };
            const result = onChange(modelFields);
            value = result?.Category ?? value;
          }
          if (errors.Category?.hasError) {
            runValidationTasks("Category", value);
          }
          setCategory(value);
        }}
        onBlur={() => runValidationTasks("Category", Category)}
        errorMessage={errors.Category?.errorMessage}
        hasError={errors.Category?.hasError}
        {...getOverrideProps(overrides, "Category")}
      ></TextField>
      <SwitchField
        label="Saved"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Saved}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Product,
              Price,
              Descrip,
              Photo,
              Deal,
              Category,
              Saved: value,
              Commentaries,
            };
            const result = onChange(modelFields);
            value = result?.Saved ?? value;
          }
          if (errors.Saved?.hasError) {
            runValidationTasks("Saved", value);
          }
          setSaved(value);
        }}
        onBlur={() => runValidationTasks("Saved", Saved)}
        errorMessage={errors.Saved?.errorMessage}
        hasError={errors.Saved?.hasError}
        {...getOverrideProps(overrides, "Saved")}
      ></SwitchField>
      <TextField
        label="Commentaries"
        isRequired={false}
        isReadOnly={false}
        defaultValue={Commentaries}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Product,
              Price,
              Descrip,
              Photo,
              Deal,
              Category,
              Saved,
              Commentaries: value,
            };
            const result = onChange(modelFields);
            value = result?.Commentaries ?? value;
          }
          if (errors.Commentaries?.hasError) {
            runValidationTasks("Commentaries", value);
          }
          setCommentaries(value);
        }}
        onBlur={() => runValidationTasks("Commentaries", Commentaries)}
        errorMessage={errors.Commentaries?.errorMessage}
        hasError={errors.Commentaries?.hasError}
        {...getOverrideProps(overrides, "Commentaries")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
