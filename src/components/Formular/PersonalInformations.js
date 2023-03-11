import { Form, Formik, Field, FormikProps } from "formik";
import {
  Button,
  Stack,
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import React, { useContext } from "react";
import { FormContext } from "../../App";
import * as yup from "yup";

function PersonalInformations() {
  const MyInput = ({ field, form, ...props }) => {
    return <TextField {...field} {...props} />;
  };


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
    phone: yup.string().max(10).min(10),
  });

  const handleBack = () => {
    setActiveStepIndex((prevStep) => prevStep - 1);
  };

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
        <Form autoComplete="nope">
          <Stack
            sx={{ my: 3 }}
            direction={{ xs: "column", md: "row" }}
            spacing={3}
          >
            <Box sx={{ flexGrow: { xs: 1, md: 0.5 } }}>
              <Field
                autoComplete="nope"
                name="firstname"
                fullWidth
                id="outlined-first-name"
                label="First name"
                component={MyInput}
              />
            </Box>{" "}
            <Box sx={{ flexGrow: { xs: 1, md: 0.5 } }}>
              <Field
                autoComplete="nope"
                name="lastname"
                fullWidth
                id="outlined-last-name"
                label="Last name"
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
                autoComplete="nope"
                name="email"
                type="email"
                fullWidth
                id="outlined-email"
                label="E-mail"
                component={MyInput}
              />
            </Box>{" "}
            <Box sx={{ flexGrow: { xs: 1, md: 0.5 } }}>
              <Field
                autoComplete="nope"
                name="phone"
                fullWidth
                id="outlined-phone"
                label="Phone"
                component={MyInput}
              />
            </Box>
          </Stack>
          <Stack
            sx={{
              my: 3,
            }}
            spacing={3}
          >
            <Box>
              <FormControlLabel
                control={<Checkbox required />}
                label="I have read and agree to the privacy policy, terms of service, and comunity guidlines."
              />
            </Box>
            <Box>
              <FormControlLabel
                control={<Checkbox />}
                label="I would like to receive news about annotation and Hypothesis."
              />
            </Box>
          </Stack>

          <Stack
            sx={{ my: 3 }}
            direction={{ xs: "column", md: "row" }}
            spacing={3}
          >
            <Box sx={{ flexGrow: { xs: 1, md: 0.5 } }}>
              <Button
                fullWidth
                variant="contained"
                sx={{
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
            </Box>
            <Box sx={{ flexGrow: { xs: 1, md: 0.5 } }}>
              <Button
                variant="contained"
                fullWidth
                sx={{
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
            </Box>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}

export default PersonalInformations;
