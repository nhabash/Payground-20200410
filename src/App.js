import React from "react";
import "./App.scss";
import "./styles.css";
import typeCategory from "../_testdata/NT_ISOJurisdictionType";
import TypeCategoryWizard from "./views/TypeCategory/Forms/TypeCategoryWizard";
import Util from "../views/Common/Util";

export default function App() {
    
     // item === typeCode
  onSelect(event, selectedTypeCode) {
    console.log(`App: onSelect invoked with item=[${selectedTypeCode}]`);
  }

  // item === typeCode
  onAddType() {
    let originalObject = typeCategory;

    let obj = new TypeCategoryType();
    obj.setTypeCode(Util.uuidv4());

    console.log(
      `onAddType: originalObject: ${JSON.stringify(originalObject, null, 2)}`
    );
      
    originalObject.type.push(obj);
  }

  // item === typeCode
  onDelete(event, item) {
    let originalObject = typeCategory;

    let fd = originalObject.type.filter(i => i.typeCode !== item);

    originalObject.type = [...fd];

    event.preventDefault();
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <TypeCategoryWizard typeCategory={typeCategory} 
                          onSelect={this.onSelect.bind(this)
                          onAddType={this.onAdd.bind(this)
                          onDelete={this.onDelete.bind(this)
    />
    </div>
  );
}
