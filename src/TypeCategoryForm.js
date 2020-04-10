import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { VField } from "./FormUtils";
import { Card, CardHeader, CardBody } from "reactstrap";

const initialValues = {
  typeCategoryName: "",
  typeCategoryDescription: "",
  typeCategoryIdentifierText: "",
  systemIdentifierText: "",
  rightSystemName: "",
  defaultTypeCode: "",
  rightTypeCategoryName: ""
};

const validationSchema = Yup.object().shape({
  typeCategoryIdentifierText: Yup.string().required(
    "TypeCategoryIdentifierText is required"
  ),
  typeCategoryName: Yup.string().required("TypeCategoryName is required"),
  systemIdentifierText: Yup.string().required(
    "SystemIdentifierText is required"
  ),
  typeCategoryDescription: Yup.string(),
  rightSystemName: Yup.string(),
  defaultTypeCode: Yup.string(),
  rightTypeCategoryName: Yup.string()
});

export default class TypeCategoryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => {
          alert("SUCCESS!! :-)\n\n" + JSON.stringify(values));
        }}
      >
        {({ errors, status, touched }) => (
          <Card>
            <CardHeader />
            <CardBody>
              <Form>
                <VField
                  name="TypeCategoryIdentifierText"
                  errors={errors}
                  touched={touched}
                />
                <VField
                  name="TypeCategoryName"
                  errors={errors}
                  touched={touched}
                />
                <VField
                  name="SystemIdentifierText"
                  errors={errors}
                  touched={touched}
                />
                <VField
                  name="TypeCategoryDescription"
                  errors={errors}
                  touched={touched}
                />
                <VField
                  name="RightSystemName"
                  errors={errors}
                  touched={touched}
                />
                <VField
                  name="DefaultTypeCode"
                  errors={errors}
                  touched={touched}
                />
                <VField
                  name="RightTypeCategoryName"
                  errors={errors}
                  touched={touched}
                />
                <div className="form-group">
                  <button type="submit" className="btn btn-primary mr-2">
                    Save
                  </button>
                  <button type="reset" className="btn btn-secondary">
                    Reset
                  </button>
                </div>
              </Form>
            </CardBody>
          </Card>
        )}
      </Formik>
    );
  }
}
