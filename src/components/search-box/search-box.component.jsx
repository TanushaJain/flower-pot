import { Component } from "react";
import "./search-box.component.css";

export default class SearchBox extends Component {
  render() {
    const { placeholder, onSearchChange, className } = this.props;
    return (
      <div>
        <input
          className={className}
          type="search"
          placeholder={placeholder}
          onChange={onSearchChange}
        ></input>
      </div>
    );
  }
}
