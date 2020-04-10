import React from "react";
import { Field, ErrorMessage } from "formik";
import {
  Input,
  Text,
  Row,
  Col,
  Label,
  FormGroup,
  FormFeedback
} from "reactstrap";

import Util from "./Util";

export const VField = props => {
  return (
    <FormGroup row>
      <FormGroup>
        <Label>
          {Util.makeDescription(props.name)}
          <Input
            type="text"
            id={Util.firstCharacterLowerCase(props.name)}
            name={Util.firstCharacterLowerCase(props.name)}
            border={props.errors[props.name] && "1px solid red"}
            className={
              props.errors[props.name] && props.touched[props.name]
                ? "is-valid"
                : ""
            }
          />
          {props.errors[props.name] && (
            <Text color="red">{props.errors[props.name]}</Text>
          )}
        </Label>
      </FormGroup>
    </FormGroup>
  );
};
