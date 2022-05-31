import React, { Component } from "react";
import "./card.scss";

const instagram = require("../../assets/Instagram.svg").default;
const like = require("../../assets/empty-heart.svg").default;
const comment = require("../../assets/empty-comment.svg").default;
const date = Date();

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-container">
          <div className="card-header">
            <div className="card-header-icon">
              {" "}
              <img src={instagram} width="20px" />{" "}
            </div>
          </div>
          <div className="card-body"></div>
          <div className="card-footer">
            <div>
              <span className="card-footer-like">
                <img src={like} width="20px" />
              </span>
              <span className="card-footer-comment">
                {" "}
                <img src={comment} width="20px" />{" "}
              </span>
            </div>
            <div className="card-footer-date">{date}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
