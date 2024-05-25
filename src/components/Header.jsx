import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import Box from "@material-ui/core/Box";

function Header() {
  return (
    <header>
      <h1>
        <Box display="inline-block" mr={1}>
          <QuestionAnswerIcon />
        </Box>
        NoteSync
      </h1>
    </header>
  );
}

export default Header;
