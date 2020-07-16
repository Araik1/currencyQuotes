import React from "react";

export const Quotation = () => {
  return (
    <>
      <div className="card shadow-sm p-3 mb-3 bg-white rounded">
        <div className="card-header bg-white">
          <h5>Доллар США</h5>
        </div>

        <div className="card-body">
          <div className="row d-flex mb-2 text-center align-items-center">
            <div className="col">Валюта/RUB</div>
            <div className="col">Номинал</div>
            <div className="col">Цена</div>
          </div>

          <div className="row  d-flex text-center align-items-center">
            <div className="col">
              <select className="form-control" id="exampleSelect1">
                <option>RUB</option>
                <option>CNY</option>
                <option>PLN</option>
                <option>DKK</option>
                <option>BYN</option>
              </select>
            </div>
            <div className="col">1</div>
            <div className="col">70</div>
          </div>
        </div>

        <div className="card-footer bg-white">
          Котировки валют с <span>15.07.2020</span>
        </div>
      </div>
    </>
  );
};
