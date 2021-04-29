import React from "react";
import { connect } from "react-redux";
import { gameDownload, cancelDownload } from "../redux/Game/actions";
const Content = (props) => {
  const counter = setTimeout(props.gameDownload, 10000);
  return (
    <>
      <div className="text-center py-4  bg-primary">
        <h3 className="text-white ">Download Tracker with Redux</h3>
      </div>
      <div className="container text-center my-5">
        <h2 className="display-2 text-primary"> Game Downloads</h2>
        <p className="display-4 text-danger">{props.downloads}</p>

        <button
          title="Click to increase downloads"
          onClick={props.gameDownload}
          className="btn btn-success m-2"
        >
          Download Game
        </button>
        <button
          title="Click to decrease downloads"
          onClick={props.cancelDownload}
          className="btn btn-secondary"
        >
          Cancel Download
        </button>
      </div>
      <div className="text-center py-4 mb-0  bg-secondary">
        <p className="text-white h3">Made with Next js </p>
        <a
          href="https://dotsimplify.com"
          target="_blank"
          className="text-warning"
        >
          by Dot Simplify{" "}
        </a>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    downloads: state.downloads,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    gameDownload: () => dispatch(gameDownload()),
    cancelDownload: () => dispatch(cancelDownload()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
