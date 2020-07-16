import React from "react";
import { Answer } from "./Answer";

export const Converter = () => {
  return (
    <>
      <div className="card shadow-sm p-3 mb-5 bg-white rounded">
        <div className="card-header bg-white">
          <h5>Конвертация</h5>
        </div>

        <div className="card-body">
          <div className="form-group row">
            <label for="example-number-input" className="col-4 col-form-label">
              Сумма
            </label>
            <div className="col">
              <input
                className="form-control"
                type="number"
                value="42"
                id="example-number-input"
              />
            </div>
          </div>

          <div className="form-group row">
            <label for="exampleSelect1" className="col-4 col-form-label">
              Из
            </label>
            <div className="col">
              <select className="form-control" id="exampleSelect1">
                <option>RUB</option>
                <option>CNY</option>
                <option>PLN</option>
                <option>DKK</option>
                <option>BYN</option>
              </select>
            </div>
          </div>

          <div className="form-group row">
            <label for="exampleSelect1" className="col-4 col-form-label">
              В
            </label>
            <div className="col">
              <select className="form-control" id="exampleSelect1">
                <option>RUB</option>
                <option>CNY</option>
                <option>PLN</option>
                <option>DKK</option>
                <option>BYN</option>
              </select>
            </div>
          </div>

          <hr />

          <div className="form-group row">
            <label
              for="example-datetime-local-input"
              className="col-4 col-form-label"
            >
              Дата
            </label>
            <div className="col">
              <input
                className="form-control"
                type="date"
                value="2011-08-19"
                id="example-date-input"
              />
            </div>
          </div>

          <hr />

          <div className="d-flex justify-content-end">
            <button type="button" className="btn btn-primary">
              Показать
            </button>
          </div>
        </div>

        {/* <Answer /> */}
      </div>
    </>
  );
};
