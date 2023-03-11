import { Form, Formik, Field, FormikProps, ErrorMessage } from "formik";
import {
  Button,
  Stack,
  Box,
  MenuItem,
  InputAdornment,
  TextField,
  Checkbox,
  Autocomplete,
} from "@mui/material";
import React, { useContext } from "react";
import { FormContext } from "../../App";
import * as yup from "yup";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

function PropertyDetails() {
  const MyInput = ({ field, form, ...props }) => {
    return <TextField {...field} {...props} />;
  };

  const propertyType = [
    {
      value: "Residential",
      label: "Residential",
    },
    {
      value: "Commercial",
      label: "Commercial",
    },
    {
      value: "Industrial",
      label: "Industrial",
    },
    {
      value: "Special purpose",
      label: "Special purpose",
    },
  ];

  const propertyCharacteristics = [
    {
      value: "Swimming Pool",
      label: "Swimming Pool",
    },
    {
      value: "SPA",
      label: "SPA",
    },
    {
      value: "Garage",
      label: "Garage",
    },
    {
      value: "Cellar",
      label: "Cellar",
    },
    {
      value: "Veranda",
      label: "Veranda",
    },
  ];

  const propertystate = [
    {
      value: "Refurbished (- 2 years)",
      label: "Refurbished (- 2 years)",
    },
    {
      value: "Very good state",
      label: "Very good state",
    },
    {
      value: "Good condition",
      label: "Good condition",
    },
    {
      value: "To refresh",
      label: "To refresh",
    },
    {
      value: "To renovate",
      label: "To renovate",
    },
  ];
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const ValidationSchema = yup.object().shape({
    typeofproperty: yup.string(),
    adress: yup.string(),
    city: yup.string(),
    postalcode: yup.string().max(5),
    livingspace: yup.string(),
    landarea: yup.string(),
    constructionyear: yup.string().max(4),
    numberofpieces: yup.string(),
    firstname: yup.string(),
    lastname: yup.string(),
    email: yup.string(),
    phone: yup.string().min(10),
  });

  const handleBack = () => {
    setActiveStepIndex((prevStep) => prevStep - 1);
  };

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  return (
    <Formik
      initialValues={{
        typeofproperty: "",
        adress: "",
        city: "",
        postalcode: "",
        livingspace: "",
        landarea: "",
        constructionyear: "",
        numberofpieces: "",
        propertystate: "",
        propertycharacteristics: [],
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values) => {
        const data = { ...formData, ...values };
        setFormData(data);
        setActiveStepIndex(activeStepIndex + 1);
        console.log(data);
      }}
    >
      {(props: FormikProps<any>) => (
        <Form>
          <Stack sx={{ mt: 5, mb: 3 }}>
            <Box sx={{ flexGrow: { xs: 1, md: 1 } }}>
              <Field
                autoComplete="nope"
                fullWidth
                required
                name="typeofproperty"
                id="outlined-select-property"
                select
                label="Type of property"
                component={MyInput}
              >
                {propertyType.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Field>
            </Box>
          </Stack>
          <Stack
            sx={{ my: 3 }}
            direction={{ xs: "column", md: "row" }}
            spacing={3}
          >
            <Box sx={{ flexGrow: { xs: 1, md: 0.6 } }}>
              <Field
                autoComplete="nope"
                required
                name="adress"
                fullWidth
                id="outlined-select-adress"
                label="Adress"
                component={MyInput}
              />
            </Box>

            <Stack
              direction="row"
              spacing={3}
              sx={{ flexGrow: { xs: 1, md: 0.4 } }}
            >
              <Box sx={{ flexGrow: { xs: 1, md: 0.7 } }}>
                <Field
                  autoComplete="nope"
                  required
                  name="city"
                  fullWidth
                  id="outlined-city"
                  label="City"
                  component={MyInput}
                />
              </Box>

              <Box sx={{ flexGrow: { xs: 1, md: 0.3 } }}>
                <Field
                  autoComplete="nope"
                  required
                  name="postalcode"
                  fullWidth
                  id="outlined-postal-code"
                  label="Postal code"
                  component={MyInput}
                />
              </Box>
            </Stack>
          </Stack>
          <Stack
            sx={{ my: 3 }}
            direction={{ xs: "column", md: "row" }}
            spacing={3}
          >
            <Box sx={{ flexGrow: { xs: 1, md: 0.5 } }}>
              <Field
                autoComplete="nope"
                required
                name="livingspace"
                fullWidth
                id="outlined-living-space"
                label="What is the living area ?"
                component={MyInput}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <span style={{ fontWeight: "bold" }}>m²</span>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>{" "}
            <Box sx={{ flexGrow: { xs: 1, md: 0.5 } }}>
              <Field
                autoComplete="nope"
                required
                name="landarea"
                fullWidth
                id="outlined-land-area"
                label="What is the land area ?"
                component={MyInput}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <span style={{ fontWeight: "bold" }}>m²</span>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Stack>

          <Stack
            sx={{ my: 3 }}
            direction={{ xs: "column", md: "row" }}
            spacing={3}
          >
            <Box sx={{ flexGrow: { xs: 1, md: 0.5 } }}>
              <Field
                autoComplete="nope"
                required
                name="constructionyear"
                fullWidth
                id="outlined-contruction-year"
                label="Year of construction"
                component={MyInput}
              />
            </Box>{" "}
            <Box sx={{ flexGrow: { xs: 1, md: 0.5 } }}>
              <Field
                autoComplete="nope"
                required
                name="numberofpieces"
                fullWidth
                id="outlined-number-of-pieces"
                label="How many pieces are there ?"
                component={MyInput}
              />
            </Box>
          </Stack>

          <Stack
            sx={{ my: 3 }}
            direction={{ xs: "column", md: "row" }}
            spacing={3}
          >
            <Box sx={{ flexGrow: { xs: 1, md: 0.5 } }}>
              <Field
                required
                fullWidth
                name="propertystate"
                id="outline-proprety-state"
                select
                label="State of the property"
                component={MyInput}
              >
                {propertystate.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Field>
            </Box>
            <Box sx={{ flexGrow: { xs: 1, md: 0.5 } }}>
              <Autocomplete
                multiple
                id="outline-property-characteristics"
                options={propertyCharacteristics}
                disableCloseOnSelect
                getOptionLabel={(option) => option.label}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                      
                    />
                    {option.label}
                  </li>
                )}
                renderInput={(params) => (
                  <Field
                name="propertycharacteristics"
                    fullWidth
                    component={MyInput}
                    {...params}
                    label="Characteristics of the property"
                  />
                )}
              />
            </Box>
          </Stack>

          <Stack
            sx={{ flexGrow: { xs: 1 }, my: 3, justifyContent: "space-between" }}
            direction={{ xs: "column", md: "row" }}
            spacing={3}
          >
            <Button
              variant="contained"
              sx={{
                width: 200,
                color: "grey",
                backgroundColor: "#D8D8D8",
                "&:hover": {
                  color: "white",
                  backgroundColor: "#868686",
                },
                p: 1.5,
                fontSize: "1rem",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
              disabled={activeStepIndex === 0}
              onClick={handleBack}
            >
              Back
            </Button>

            <Button
              variant="contained"
              sx={{
                width: 200,
                color: "white",
                backgroundColor: "#6C63FF",
                "&:hover": {
                  backgroundColor: "#4c46b6",
                },

                p: 1.5,
                fontSize: "1rem",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
              type="submit"
            >
              Next
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}

export default PropertyDetails;
