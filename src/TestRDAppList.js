import React from "react";
import RDAppList from "./RDAppList";
import { Row, Col } from "reactstrap";
import RDAppListDetail from "./RDAppListDetail";
import Util from "./Util";
import TypeCategoryForm from "./TypeCategoryForm";

export default class TestRDAppList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ["item 11", "item 12", "item 13"],
      showDetail: false,
      detailItem: null
    };
  }

  onSelect(event, item) {
    event.preventDefault();
    console.log(`App: onSelect invoked with item=[${item}]`);
    this.setState({
      showDetail: true,
      detailItem: item
    });
  }

  onAdd() {
    const { data } = this.state;
    data.push(`Item ${Util.uuidv4()}`);
    this.setState({ data: [...data] });
  }

  onDelete(event, item) {
    const { data } = this.state;
    let filtereddata = data.filter(i => i !== item);
    this.setState({ data: [...filtereddata] });
    event.preventDefault();
  }

  onCloseDetail() {
    this.setState({ showDetail: false, detailItem: null });
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
            title="This is a list"
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
              <TypeCategoryForm />
            </RDAppListDetail>
          </Col>
        ) : null}
      </Row>
    );
  }
}
