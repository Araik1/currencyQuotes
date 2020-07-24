import React, { useEffect } from "react";
import { Converter } from "./Converter";
import { Quotation } from "./Quotation";
import { ChangeSchedule } from "./ChangeSchedule";
import { useDispatch, useSelector } from "react-redux";

import { fetchQuotes } from "../store/actions/fetchQuotes";
import { Loader } from "./Loader";

export const Content = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.fetchQuotes);

  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(fetchQuotes());
  }, [fetchQuotes, loading]);

  if (loading) {
    return (
      <div className="container d-flex justify-content-center align-items-center vh-100 p-7">
        <Loader />
      </div>
    );
  }

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
