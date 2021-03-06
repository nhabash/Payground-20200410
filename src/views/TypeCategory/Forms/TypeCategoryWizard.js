import React from "react";
import { Card, CardHeader, CardBody, CardFooter, FormGroup } from "reactstrap";
import TypeCategoryForm from "./TypeCategoryForm";
import typeCategory from "../_testdata/NT_ISOJurisdictionType";
import TypeCategoryTypeList from "./TypeCategoryTypeList";

export default class TypeCategoryWizard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: [true, false]
    };
  }

  getCurrentPage() {
    const { steps } = this.state;
    let curr = -1;
    steps.filter((s, i) => {
      if (s) {
        curr = i;
        return i;
      } else return -1;
    });

    console.log(`curr = [${curr}]`);

    return curr;
  }

  isPrevActive() {
    let c = this.getCurrentPage();
    let p = c - 1;
    console.log(`isPrevActive: c=${c} p=${p}`);
    return p < 0;
  }

  isNextActive() {
    let c = this.getCurrentPage();
    let p = c + 1;
    console.log(`isNextActive: c=${c} p=${p}`);
    return p >= this.state.steps.length;
  }

  isCurrentStep(step) {
    const { steps } = this.state;
    return steps[step];
  }

  showStep(step) {
    const { steps } = this.state;

    for (var i = 0; i < steps.length; i++) {
      if (i === step) steps[i] = true;
      else steps[i] = false;
    }

    this.setState({ steps: [...steps] });
  }

  nextStep() {
    const { steps } = this.state;

    let curr = this.getCurrentPage();

    if (curr + 1 >= steps.length) return;

    this.showStep(curr + 1);
  }

  prevStep() {
    let curr = this.getCurrentPage();

    if (curr - 1 < 0) return;

    console.log(`showing step ${curr - 1}`);

    this.showStep(curr - 1);
  }

  showTypeCategoryForm() {
    return <TypeCategoryForm data={typeCategory} />;
  }

  showTypeCategoryTypeForm() {
    return (
      <FormGroup row>
        <div className="w-100">
          <TypeCategoryTypeList data={typeCategory} />
        </div>
      </FormGroup>
    );
  }

  render() {
    let nButtonProps = {
      type: "button",
      className: "btn btn-secondary mr-2"
    };
    let pButtonProps = {
      type: "button",
      className: "btn btn-secondary mr-2"
    };

    pButtonProps["disabled"] = this.isPrevActive();
    nButtonProps["disabled"] = this.isNextActive();

    return (
      <Card>
        <CardHeader>
          <strong>Edit TypeCategory Wizard</strong>
        </CardHeader>
        <CardBody>
          {this.isCurrentStep(0) ? this.showTypeCategoryForm() : null}
          {this.isCurrentStep(1) ? this.showTypeCategoryTypeForm() : null}
        </CardBody>
        <CardFooter>
          <div className="form-group text-right">
            <button
              {...pButtonProps}
              onClick={() => {
                this.prevStep();
              }}
            >
              Prev
            </button>
            <button
              {...nButtonProps}
              onClick={() => {
                this.nextStep();
              }}
            >
              Next
            </button>
          </div>
        </CardFooter>
      </Card>
    );
  }
}
