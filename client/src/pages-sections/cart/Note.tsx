"use client";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
// import debounce from "@mui/material/utils/debounce";
import useCart from "@/hooks/useCart";

const Note = () => {
  const { state, dispatch } = useCart();

  const [text, setText] = useState(state.note);

  // useEffect(() => {
  //   debounce(() => {
  //     // dispatch("CHANGE_NOTE", text);
  //   }, 2000)();
  // }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
    dispatch({ type: "CHANGE_NOTE", payload: text });
  };

  console.log("text", text, state);
  return (
    <TextField
      variant="outlined"
      rows={6}
      fullWidth
      multiline
      value={text}
      onChange={handleChange}
    />
  );
};

export default Note;
