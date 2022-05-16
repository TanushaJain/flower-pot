import { Component } from "react";
import "./card-list.component.css";
export default class CardList extends Component {
  render() {
    const { flowers } = this.props;
    return (
      <div className="card-list">
        {flowers.map((el) => {
          const { id, name, image, description } = el;
          return (
            <div className="card-container" key={id}>
              <img alt={name} src={image}></img>
              <h2>{name}</h2>
              <div className="desc">
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
