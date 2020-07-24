import React from "react";
// import { Answer } from "./Answer";

export class Converter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sumInput: 0,
      convertFromSelect: "",
      convertToSelect: "",
      dateInput: "",
    };
  }

  changeInputHandler = (event) => {
    event.persist();
    this.setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  };

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <>
        <div className="card shadow-sm p-3 mb-5 bg-white rounded">
          <div className="card-header bg-white">
            <h5>Конвертация</h5>
          </div>

          <div className="card-body">
            <form onSubmit={this.submitHandler}>
              <div className="row">
                <label htmlFor="sumInput" className="col-4 col-form-label">
                  Сумма
                </label>
                <div className="col">
                  <input
                    className="form-control"
                    type="number"
                    step="0.01"
                    defaultValue="0"
                    id="sumInput"
                    name="sumInput"
                    onChange={this.changeInputHandler}
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <label
                  htmlFor="convertFromSelect"
                  className="col-4 col-form-label"
                >
                  Из
                </label>
                <div className="col">
                  <select
                    className="form-control"
                    id="convertFromSelect"
                    name="convertFromSelect"
                    onChange={this.changeInputHandler}
                  >
                    <option>RUB</option>
                    <option>CNY</option>
                    <option>PLN</option>
                    <option>DKK</option>
                    <option>BYN</option>
                  </select>
                </div>
              </div>
              <br />
              <div className="row">
                <label
                  htmlFor="convertToSelect"
                  className="col-4 col-form-label"
                >
                  В
                </label>
                <div className="col">
                  <select
                    className="form-control"
                    id="convertToSelect"
                    name="convertToSelect"
                    onChange={this.changeInputHandler}
                  >
                    <option>RUB</option>
                    <option>CNY</option>
                    <option>PLN</option>
                    <option>DKK</option>
                    <option>BYN</option>
                  </select>
                </div>
              </div>
              <hr />
              <div className="row">
                <label htmlFor="dateInput" className="col-4 col-form-label">
                  Дата
                </label>
                <div className="col">
                  <input
                    className="form-control"
                    type="date"
                    defaultValue={Date.now}
                    id="dateInput"
                    name="dateInput"
                    onChange={this.changeInputHandler}
                  />
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">
                  Показать
                </button>
              </div>
            </form>
          </div>

          {/* <Answer /> */}
        </div>
      </>
    );
  }
}
