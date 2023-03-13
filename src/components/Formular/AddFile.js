import React, { useState } from "react";
import {
  Typography,
  CardActionArea,
  Stack,
  styled,
  Box,
  Modal,
} from "@mui/material";

//Icons
import AddIcon from "@mui/icons-material/Add";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

const Input = styled("input")({
  display: "none",
});

const style = {
  display: "flex",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

function AddFile(props) {
  const selectedFile = props.selectedFile;
  const setSelectedFile = props.setSelectedFile;
  const setfileUrl = props.setfileUrl;
  const fileUrl = props.fileUrl;
  setSelectedFile(selectedFile);
  setfileUrl(fileUrl);
  const [IsSelected, setIsSelected] = useState(false);
  // const [fileUrl, setfileUrl] = useState(null);
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setfileUrl(URL.createObjectURL(event.target.files[0]));
    setIsSelected(true);
  };

  const [open, setOpen] = React.useState(false);
  const openFile = () => setOpen((v) => !v);

  return (
    <Stack sx={{ display: "flex", flexDirection: "row-reverse" }}>
      {IsSelected ? (
        <CardActionArea
          onClick={openFile}
          sx={{
            width: 570,
            ml: 2.5,
            py: 0.7,
            px: 3,
            display: "flex",
            alignItems: "centre",
            border: "1px solid #C4C4C4",
            borderRadius: "0.3rem",
            justifyContent: "left",
            minWidth: 380,
          }}
        >
          <Box
            sx={{
              display: "grid",
              placeItems: "center",
              backgroundColor: "#E5E4FC",
              p: 1,
              borderRadius: "50%",
              mr: 2,
            }}
          >
            <InsertDriveFileIcon sx={{ color: "#6C63FF" }} />
          </Box>
          <Box display="flex" justifyContent="center" flexDirection="column">
            <Typography sx={{ fontWeight: "bold" }}>
              {selectedFile.name}
            </Typography>
            <Typography variant="caption" component="p">
              {selectedFile.type} ({selectedFile.size} Bytes)
            </Typography>
          </Box>

          {open && (
            <Modal open={setOpen}>
              <Box sx={style}>
                <embed src={fileUrl} width="700px" height="700px"></embed>
              </Box>
            </Modal>
          )}
        </CardActionArea>
      ) : null}
      <Box sx={{ flexGrow: { xs: 1, md: 0.5 } }}>
        <CardActionArea
          sx={{
            width: 570,
            py: 0.7,
            px: 3,
            display: "flex",
            alignItems: "cente",
            border: "1px solid #C4C4C4",
            borderRadius: "0.3rem",
            justifyContent: "left",
          }}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <label htmlFor="contained-button-file">
              <Input
                accept="*"
                id="contained-button-file"
                multiple
                type="file"
                onChange={changeHandler}
              />
              <Box
                sx={{
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: "#6C63FF",
                  p: 1,
                  borderRadius: "50%",
                  mx: 1,
                }}
              >
                <AddIcon sx={{ color: "#FFFFFF" }} />
              </Box>
            </label>
          </Stack>

          <Box display="flex" justifyContent="center" flexDirection="column">
            <Typography sx={{ fontWeight: "bold", color: "#6C63FF" }}>
              Add a file
            </Typography>
            <Typography variant="caption" component="p">
              Image or PDF - Up to 300KB
            </Typography>
          </Box>
        </CardActionArea>
      </Box>
    </Stack>
  );
}

export default AddFile;
