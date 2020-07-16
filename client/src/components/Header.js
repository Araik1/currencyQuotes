import React from "react";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top shadow-sm p-3 bg-white">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex justify-content-between align-items-center">
            <i className="material-icons bg-primary text-white mr-2 md-36 ">
              swap_vert
            </i>
            <h4>Курсы валют</h4>
          </div>
        </a>
        <form>
          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              className="custom-control-input"
              id="switch1"
            />
            <label className="custom-control-label" for="switch1">
              Темная тема
            </label>
          </div>
        </form>
      </div>
    </nav>
  );
};
