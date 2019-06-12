import * as React from "react";
import styled from "styled-components";

class exercise extends React.Component {
  render() {
    return (
      <div>
        <CreateProgramButton> Create a new program!</CreateProgramButton>
      </div>
    );
  }
}

const CreateProgramButton = styled.button`
  height: 200px;
  width: 200px;
  border: 2px solid black;
`;

export default exercise;
