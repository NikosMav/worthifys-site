import * as React from "react";
import { styled } from "@mui/material/styles";
import Autocomplete, { autocompleteClasses } from "@mui/material/Autocomplete";
import TextField, { textFieldClasses } from "@mui/material/TextField";

const CustomAutocomplete = styled(Autocomplete)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    backgroundColor: "#302c3f",
    color: "white",
    fontFamily: "Thicccboi", // Ensure this font is loaded in your app
    transition: "background-color 0.3s ease", // Transition effect for background color
    "&:hover": {
      backgroundColor: "#1d1a27",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
  },
  [`& .${autocompleteClasses.clearIndicator}`]: {
    color: "white",
  },
  [`& .${autocompleteClasses.popupIndicator}`]: {
    color: "white",
  },
  "& .MuiAutocomplete-input": {
    color: "white", // Ensuring input text is white
  },
  "& .MuiAutocomplete-inputRoot": {
    color: "white", // Ensuring input placeholder text is white
    "& .MuiAutocomplete-placeholder": {
      color: "white", // Placeholder text color
      opacity: 1, // Placeholder text opacity
    },
  },
  "& .MuiAutocomplete-tag": {
    color: "white", // Ensuring tags inside autocomplete are white
  },
  // Additional styles for other states and elements can be added here
});

const CustomTextField = styled(TextField)({
  [`& .${textFieldClasses.root}`]: {
    color: "white", // Input text color
  },
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "gray",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
    "& .MuiSvgIcon-root": {
      // This targets all SVG icons inside the input
      color: "white",
    },
  },
  "& .MuiInputLabel-root": {
    color: "white", // Label color
  },
  "& .MuiInputBase-input": {
    color: "white", // Input text color
    fontSize: "1.25rem", // Increase font size
  },
  // More styles for the text field if needed
});

export default function GroupedAutocomplete({
  optionsData,
  label,
  value,
  onChange,
  disabled,
}) {
  const options = optionsData.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  // Handle change internally, passing event and value to parent's onChange
  const handleChange = (event, value) => {
    if (onChange) {
      onChange(event, value);
    }
  };

  // Add a custom comparison function
  const isOptionEqualToValue = (option, value) => {
    return option.title === value.title;
  };

  return (
    <CustomAutocomplete
      id="grouped-demo"
      options={options.sort(
        (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
      )}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.title}
      value={options.find((option) => option.title === value) || null} // Adjust this line
      isOptionEqualToValue={isOptionEqualToValue}
      renderInput={(params) => (
        <CustomTextField
          {...params}
          label={label}
          InputLabelProps={{
            style: { color: "white" },
          }}
        />
      )}
      onChange={handleChange} // Use internal handleChange
      disabled={disabled}
    />
  );
}
