import * as React from "react";
import {
  MenuItem,
  Box,
  TextField,
  Stack,
  Typography,
  Switch,
  FormControlLabel,
} from "@mui/material";

export default function Formular() {
  const typeBien = [
    {
      value: "Apartment",
      label: "Apartment",
    },
    {
      value: "Villa",
      label: "Villa",
    },
    {
      value: "Building",
      label: "Building",
    },
  ];

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Box component="form" noValidate>
      <Stack direction="row" alignItems="center">
        <Typography sx={{ fontWeight: "bold", ml: 1 }} variant="h6">
          Formular
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
      </Stack>
      <Stack sx={{ my: 2 }}>
        <Box>
          <TextField
            fullWidth
            id="outlined-select-property"
            required
            select
            label="Type of property"
            // helperText="Please select the type of your property"
          >
            {typeBien.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Stack>

      <Stack sx={{ my: 2 }} direction={{ xs: "column", md: "row" }} spacing={3}>
        <Box sx={{ flexGrow: { xs: 1, md: 0.6 } }}>
          <TextField
            fullWidth
            id="outlined-select-adress"
            required
            label="Adress"
          />
        </Box>
        <Stack
          direction="row"
          spacing={3}
          sx={{ flexGrow: { xs: 1, md: 0.4 } }}
        >
          <Box sx={{ flexGrow: { xs: 1, md: 0.7 } }}>
            <TextField fullWidth id="outlined-city" required label="City" />
          </Box>
          <Box sx={{ flexGrow: { xs: 1, md: 0.3 } }}>
            <TextField
              fullWidth
              id="outlined-postal-code"
              required
              label="Postal code"
            />
          </Box>
        </Stack>
      </Stack>
      <Stack sx={{ my: 2 }} direction={{ xs: "column", md: "row" }} spacing={3}>
        <Box sx={{ flexGrow: { xs: 1, md: 0.5 } }}>
          <TextField
            fullWidth
            id="outlined-living-space"
            required
            label="What is the living area ?"
          />
        </Box>{" "}
        <Box sx={{ flexGrow: { xs: 1, md: 0.5 } }}>
          <TextField
            fullWidth
            id="outlined-number-of-pieces"
            required
            label="How many pieces are there ?"
          />
        </Box>
      </Stack>
      <Stack sx={{ my: 2 }} direction={{ xs: "column", md: "row" }} spacing={3}>
        <Box sx={{ flexGrow: { xs: 1, md: 0.25 } }}>
          <TextField
            fullWidth
            id="outlined-floor"
            required
            label="What floor is it on ?"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems:"center",
            justifyContent:'space-between',
            flexGrow: { xs: 1, md: 0.25 },
          }}
        >
          <Typography variant="text">Is there an elevator ?</Typography>
          <FormControlLabel
            control={<Switch checked={checked} onChange={handleChange} />}
            label={checked ? "Oui" : "Non"}
          />
        </Box>
        <Box sx={{ flexGrow: { xs: 1, md: 0.25 } }}>
        <TextField
            fullWidth
            id="outline-piscine-spa"
            required
            select
            label="Type of property"
            // helperText="Please select the type of your property"
          >
            {typeBien.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Stack>
    </Box>
  );
}
