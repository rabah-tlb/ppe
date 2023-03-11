import {
  Button,
  Stack,
  Box,
  ListItem,
  ListItemText,
  List,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { FormContext } from "../../App";

function ReviewInformations() {
  const { setActiveStepIndex, formData } = useContext(FormContext);

  const handleBack = () => {
    setActiveStepIndex((prevStep) => prevStep - 1);
  };

  console.log(formData);

  return (
    <>
      <Stack>
        <Typography
          sx={{ mt: 5, fontSize: "1rem", fontWeight: "bold" }}
          variant="overline"
        >
          Property Details
        </Typography>
        <List sx={{ display: "flex", flexDirection: "row" }}>
          <ListItem>
            <ListItemText
              primary="Type of property"
              secondary={formData.typeofproperty}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="Adress" secondary={formData.adress} />
          </ListItem>
          <ListItem>
            <ListItemText primary="City" secondary={formData.city} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Postal code"
              secondary={formData.postalcode}
            />
          </ListItem>
        </List>
        <List sx={{ display: "flex", flexDirection: "row" }}>
          <ListItem>
            <ListItemText
              primary="Living area"
              secondary={formData.livingspace}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="Land area" secondary={formData.landarea} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Year of construction"
              secondary={formData.constructionyear}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Number of pieces"
              secondary={formData.numberofpieces}
            />
          </ListItem>
        </List>
        <List sx={{ display: "flex", flexDirection: "row" }}>
          <ListItem>
            <ListItemText
              primary="State of the property"
              secondary={formData.propertystate}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Characteristics of the property"
              secondary={formData.propertycharacteristics}
            />
          </ListItem>
        </List>
      </Stack>

      <Stack>
        <Typography
          sx={{ mt: 5, fontSize: "1rem", fontWeight: "bold" }}
          variant="overline"
        >
          Personal Informations
        </Typography>
        <List sx={{ display: "flex", flexDirection: "row" }}>
          <ListItem>
            <ListItemText primary="First name" secondary={formData.firstname} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Last name" secondary={formData.lastname} />
          </ListItem>
        </List>
        <List sx={{ display: "flex", flexDirection: "row" }}>
          <ListItem>
            <ListItemText primary="E-mail" secondary={formData.email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Phone" secondary={formData.phone} />
          </ListItem>
        </List>
      </Stack>

      <Stack
            sx={{ flexGrow: { xs: 1 },mt:8, mb: 3, justifyContent: "space-between" }}
            direction={{ xs: "column", md: "row" }}
            spacing={3}
          >
            <Button
              variant="contained"
              sx={{
                width: 200,
                p: 1.5,
                color: "grey",
                backgroundColor: "#D8D8D8",
                "&:hover": {
                  color: "white",
                  backgroundColor: "#868686",
                },
                fontSize: "1rem",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
              onClick={handleBack}
            >
              Back
            </Button>

            <Button
              variant="contained"
              sx={{
                width: 380,
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
              Receive my estimation
            </Button>
          </Stack>
    </>
  );
}

export default ReviewInformations;
