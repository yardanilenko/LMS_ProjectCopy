import React, { useState } from "react";
import MDEditor from '@uiw/react-md-editor';
import { Button } from "@mui/material";
import { Form } from "react-router-dom";

export default function MyApp() {
  const [value, setValue] = useState("**Hello world!!!**");

  // const putCurrentArr = async (input, value) => {
        
  //     if (input !== "" && value !== "") {
  //     await fetch(
  //       `http://localhost:3100/createWiki`,
  //         {
  //             method: "POST",
  //             headers: {
  //                 "Content-Type": "application/json",
  //             },
  //             body: JSON.stringify({
  //               name: input,
  //               page: value
  //             }),
  //         }
  //         )
  //       }
  // };

  // const initialState = {text: ""}
    
  // const [input, setInput] = useState(initialState);  
  
  // const handleClick = (value) => {
  //   putCurrentArr(value);
  // }

  return (
    <div className="container">
        {/* <Form.Control value={setInput(input.text)} name="text" placeholder="Введите название раздела" id="comment" /> */}
      <MDEditor
        value={value}
        onChange={setValue}
      />
      <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
      {/* <Button onClick={() => {handleClick(input, value)}}></Button> */}
    </div>
  );
}