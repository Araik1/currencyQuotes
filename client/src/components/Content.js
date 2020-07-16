import React from "react";
import { Converter } from "./Converter";
import { Quotation } from "./Quotation";
import { ChangeSchedule } from "./ChangeSchedule";

export const Content = () => {
  return (
    <>
      <div className="container">
        <h3 className="pb-4 pt-4">Калькулятор иностранных валют</h3>

        <div className="row">
          <div className="col-4">
            <Converter />
          </div>

          <div className="col">
            <div className="row pb-4">
              <div className="col">
                <Quotation />
                <ChangeSchedule />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
