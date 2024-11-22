import React from "react";
import { useState } from "react";
import { Paper, TextField } from "@mui/material";

function SearchBar({ onFormSubmit }) {
  const [SearchTerm, SetSearchTerms] = useState("");
  const handleChange = (event) => {
    SetSearchTerms(event.target.value);
  };
  const HandleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(SearchTerm);
  };

  return (
    <>
      <Paper elevation={6} style={{ padding: "20px" }}>
        <form onSubmit={HandleSubmit}>
          <TextField
            fullWidth
            label="Search..."
            onChange={handleChange}
          ></TextField>
        </form>
      </Paper>
    </>
  );
}
export default SearchBar;
