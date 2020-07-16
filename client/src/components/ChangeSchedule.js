import React from "react";

export const ChangeSchedule = () => {
  return (
    <>
      <div className="card shadow-sm p-3 mb-3rounded">
        <div className="card-header bg-white ">
          <h5>График изменения котировок</h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-7">
              <div className="form-group row">
                <label for="exampleSelect1" className="col-3 col-form-label">
                  Валюта
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
            </div>
          </div>
          <hr />

          <div className="row">
            <div className="col">
              <div className="form-group row">
                <label
                  for="example-datetime-local-input"
                  className="col col-form-label"
                >
                  Период с
                </label>
                <div className="col-8">
                  <input
                    className="form-control"
                    type="date"
                    value="2011-08-19"
                    id="example-date-input"
                  />
                </div>
              </div>
            </div>

            <div className="col">
              <div className="form-group row">
                <label
                  for="example-datetime-local-input"
                  className="col col-form-label"
                >
                  до
                </label>
                <div className="col-9">
                  <input
                    className="form-control"
                    type="date"
                    value="2011-08-19"
                    id="example-date-input"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="d-flex justify-content-end">
                <button type="button" class="btn btn-primary">
                  Показать
                </button>
              </div>
            </div>
          </div>
          <hr />

          <div className="row">
            <div className="col">
              {/* <img src="graphic.png" width="100%" height="100%" alt="" /> */}
            </div>
          </div>
        </div>

        <div className="card-footer text-right bg-white">
          <a href="/">Таблица изменения котировок</a>
          <br />
          <a href="/">Распечатать</a>
        </div>
      </div>
    </>
  );
};
