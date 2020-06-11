import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Loading from "../components/Loading";
import { requestApiData, filterByValue, sortByAlphabet } from "../actions";

class LandingPage extends Component {
  componentDidMount() {
    this.props.requestApiData();
  }

  handleClick = (id) => {
    alert("ID of this Brewery is " + id);
  };
  stores = (x, i) => (
    <div
      key={x.id}
      className="card"
      style={{
        width: "450px",
        height: "130px",
        display: "inline-block",
        margin: "10px",
      }}
    >
      <div className="card-body">
        <h5 className="card-title">{x.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          <strong>Brewery Type</strong> {x.brewery_type}
        </h6>
        <p className="card-text">
          <strong>Country</strong> {x.country}
        </p>
        <button onClick={() => this.handleClick(x.id)}>Visit {x.id}</button>
      </div>
    </div>
  );

  filterByInput(e) {
    let input = e.target.value;
    this.props.filterByValue({ value: input });
  }

  sortByInput(e) {
    let value = e.target.value;
    let direction = value.endsWith("asc") ? "asc" : "desc";
    this.props.sortByAlphabet({ direction });
  }

  render() {
    const results = this.props.data;
    return results.length ? (
      <div className="container">
        <div className="row" style={{ margin: 20 }}>
          <div className="control">
            <div className="select">
              <select
                onChange={(e) => {
                  this.sortByInput(e);
                }}
              >
                <option value="" disabled selected>
                  Sort by
                </option>

                <option value="alphabet_asc">Name - Ascending</option>
                <option value="alphabet_desc">Name - Descending</option>
              </select>
            </div>
          </div>

          <div className="control" style={{ minWidth: "300px" }}>
            <input
              onChange={(e) => {
                this.filterByInput(e);
              }}
              style={{ width: "100%" }}
              placeholder="Filter by"
              type="text"
            />
          </div>
        </div>
        <div className="row">{results.map(this.stores)}</div>
      </div>
    ) : (
      <Loading />
    );
  }
}

const mapStateToProps = (state) => ({ data: state.data });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { requestApiData, sortByAlphabet, filterByValue },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
