import React, { Component } from "react";
import "./card.scss";

const instagram = require("../../assets/black-instagram.svg").default;
const like = require("../../assets/empty-heart.svg").default;
const comment = require("../../assets/empty-comment.svg").default;

const time = new Date();
const date = new Intl.DateTimeFormat("fa-IR", {
  hour: "2-digit",
  minute: "2-digit",
}).format(time);

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-container">
          <div className="card-header">
            <div className="card-header-icon">
              {" "}
              <img src={instagram} width="18px" />{" "}
            </div>
          </div>
          <div className="card-body">
            بمب فردا یکشنبه 😍😍 تیشرت تک پسرانه با کیفیت عالی سایز :
            45-50-55-60 مناسب 4 سال تا 12 سال با قیمت استثنایی فقط 89 هزار تومان
          </div>
          <div className="card-footer">
            <div>
                <img className="card-footer-like" src={like} width="18px" />
              <span className="card-footer-comment">
                {" "}
                <img src={comment} width="18px" />{" "}
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
