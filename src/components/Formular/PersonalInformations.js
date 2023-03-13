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

  const { activeStepIndex, setActiveStepIndex, formDataOwner, setFormDataOwner } =
    useContext(FormContext);

  const ValidationSchema = yup.object().shape({
    firstname: yup.string(),
    lastname: yup.string(),
    email: yup.string(),
    phone: yup.string().min(10),
  });

  const handleBack = () => {
    setActiveStepIndex((prevStep) => prevStep - 1);
  };

  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values) => {
        const data = { ...formDataOwner, ...values };
        setFormDataOwner(data);
        setActiveStepIndex(activeStepIndex + 1);
      }}
    >
      {(props: FormikProps<any>) => (
        <Form>
          <Stack
            sx={{ my: 3 }}
            direction={{ xs: "column", md: "row" }}
            spacing={3}
          >
            <Box sx={{ flexGrow: { xs: 1, md: 0.5 } }}>
              <Field
                required
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
                required
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
                required
                autoComplete="nope"
                name="email"
                fullWidth
                id="outlined-email"
                label="E-mail"
                component={MyInput}
              />
            </Box>{" "}
            <Box sx={{ flexGrow: { xs: 1, md: 0.5 } }}>
              <Field
                required
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

export default PersonalInformations;
