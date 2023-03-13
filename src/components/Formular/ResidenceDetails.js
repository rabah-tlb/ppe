import { Form, Formik, Field, FormikProps } from "formik";
import {
  Button,
  Stack,
  Box,
  MenuItem,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useContext } from "react";
import { FormContext } from "../../App";
import AddFile from "./AddFile";
import * as yup from "yup";

function ResidenceDetails() {
  const [selectedFile, setSelectedFile] = React.useState();
  const MyInput = ({ field, form, ...props }) => {
    return <TextField {...field} {...props} />;
  };

  const typeofResidence = [
    {
      value: "Single family residence",
      label: "Single family residence",
    },
    {
      value: "Condo",
      label: "Condo",
    },
  ];

  const {
    activeStepIndex,
    setActiveStepIndex,
    formDataResidence,
    setFormDataResidence,
  } = useContext(FormContext);

  const ValidationSchema = yup.object().shape({
    name: yup.string(),
    adress: yup.string(),
    city: yup.string(),
    postalcode: yup.string().max(5),
    description: yup.string(),
    typeofresidence: yup.string(),
    price: yup.string(),
    constructionyear: yup.string().max(4),
    bedrooms: yup.string(),
    bathrooms: yup.string(),
    squarefeet: yup.string(),
  });

  const handleBack = () => {
    setActiveStepIndex((prevStep) => prevStep - 1);
  };

  const [fileUrl, setfileUrl] = React.useState(null);

  return (
    <Formik
      initialValues={{
        name: "",
        adress: "",
        city: "",
        postalcode: "",
        description: "",
        image: fileUrl,
        // attributes: [
        //   {
        //     trait_type: "Purchase Price",
        //     value: "",
        //   },
        //   {
        //     trait_type: "Type of Residence",
        //     value: "",
        //   },
        //   {
        //     trait_type: "Bed Rooms",
        //     value: "",
        //   },
        //   {
        //     trait_type: "Bathrooms",
        //     value: "",
        //   },
        //   {
        //     trait_type: "Square Feet",
        //     value: "",
        //   },
        //   {
        //     trait_type: "Year Built",
        //     value: "",
        //   },
        // ],
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values) => {
        const data = { ...formDataResidence, ...values };
        setFormDataResidence(data);
        setActiveStepIndex(activeStepIndex + 1);
        console.log(data);
        // data.attributes[0].value = data.price;
        // data.attributes[1].value = data.typeofresidence;
        // data.attributes[2].value = data.bedrooms;
        // data.attributes[3].value = data.bathrooms;
        // data.attributes[4].value = data.squarefeet;
        // data.attributes[5].value = data.constructionyear;
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
                name="typeofresidence"
                id="outlined-select-residence"
                select
                label="Type of residence"
                component={MyInput}
              >
                {typeofResidence.map((option) => (
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
                id="outlined-adress"
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
                name="squarefeet"
                fullWidth
                id="outlined-square-feet"
                label="What is the area of ​​the residence ?"
                component={MyInput}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <span style={{ fontWeight: "bold" }}>pi²</span>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>{" "}
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
                name="bedrooms"
                fullWidth
                id="outlined-number-of-bedrooms"
                label="How many bed rooms are there ?"
                component={MyInput}
              />
            </Box>
            <Box sx={{ flexGrow: { xs: 1, md: 0.5 } }}>
              <Field
                autoComplete="nope"
                required
                name="bathrooms"
                fullWidth
                id="outlined-number-of-bathrooms"
                label="How many bath rooms are there ?"
                component={MyInput}
              />
            </Box>
          </Stack>

          <Stack
            sx={{ my: 3 }}
            direction={{ xs: "column", md: "row" }}
            spacing={3}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "left",
                flexGrow: { xs: 1, md: 1 },
              }}
            >
              <AddFile
                setfileUrl={setfileUrl}
                fileUrl={fileUrl}
                setSelectedFile={setSelectedFile}
                selectedFile={selectedFile}
              />
            </Box>
          </Stack>

          <Stack
            sx={{ my: 3 }}
            direction={{ xs: "column", md: "row" }}
            spacing={3}
          >
            <Box sx={{ flexGrow: { xs: 1, md: 1 } }}>
              <Field
                id="outlined-multiline-residence-description"
                multiline
                maxRows={3}
                required
                fullWidth
                name="description"
                label="Description"
                component={MyInput}
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

export default ResidenceDetails;
