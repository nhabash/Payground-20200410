import React from "react";
import RDAppList from "./RDAppList";
import { Row, Col } from "reactstrap";
import RDAppListDetail from "./RDAppListDetail";
import Util from "../../Common/Util";
import TypeCategoryTypeForm from "./TypeCategoryTypeForm";
import TypeCategoryType from "../Model/TypeCategoryType";

export default class TypeCategoryTypeList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data:
        props.data &&
        props.data.type.map(t => {
          return t.typeCode;
        }),
      showDetail: false,
      detailItem: null
    };

    console.log(`type: ${JSON.stringify(props.data.type, null, 2)}`);
  }

  updateDetail(item) {
    this.setState({ showDetail: true, detailItem: item });
  }

  emptyDetail() {
    this.setState({ showDetail: false, detailItem: null });
  }

  onSelect(event, item) {
    console.log(`App: onSelect invoked with item=[${item}]`);

    let found = this.props.data.type.filter(t => {
      return t.typeCode === item;
    });

    if (found.length === 0) return;

    console.log(
      `selected: [${item}] found[0]: ${JSON.stringify(found[0], null, 2)}`
    );

    this.setState(
      this.emptyDetail.bind(this),
      this.updateDetail.bind(this, found[0])
    );
  }

  onAdd() {
    const { data } = this.state;

    let originalObject = this.props.data;

    let obj = new TypeCategoryType();
    obj.setTypeCode(Util.uuidv4());

    console.log(
      `onAdd: originalObject: ${JSON.stringify(originalObject, null, 2)}`
    );
    originalObject.type.push(obj);

    data.push(obj.typeCode);

    this.setState({ data: [...data] });
  }

  onDelete(event, item) {
    this.onCloseDetail();

    const { data } = this.state;
    let originalObject = this.props.data;

    let filtereddata = data.filter(i => i !== item);
    this.setState({ data: [...filtereddata] });

    let fd = originalObject.type.filter(i => i.typeCode !== item);
    originalObject.type = [...fd];

    event.preventDefault();
  }

  onCloseDetail() {
    this.emptyDetail();
  }

  render() {
    const { data, showDetail, detailItem } = this.state;
    let _colSize = {};

    if (showDetail) {
      _colSize["sm"] = 6;
    }

    return (
      <Row>
        <Col {..._colSize}>
          <RDAppList
            title="Type Codes"
            items={data}
            onAdd={this.onAdd.bind(this)}
            onDelete={this.onDelete.bind(this)}
            onSelect={this.onSelect.bind(this)}
          />
        </Col>
        {showDetail ? (
          <Col {..._colSize}>
            <RDAppListDetail
              showDetail={showDetail}
              detailItem={detailItem}
              onCloseDetail={this.onCloseDetail.bind(this)}
            >
              <TypeCategoryTypeForm data={detailItem} />
            </RDAppListDetail>
          </Col>
        ) : null}
      </Row>
    );
  }
}
