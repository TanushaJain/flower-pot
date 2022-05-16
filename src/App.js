/* eslint-disable no-useless-constructor */
import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      flowers: [],
      search: "",
    };
  }

  componentDidMount() {
    fetch("https://my-json-server.typicode.com/TanushaJain/flower-pot/flowers")
      .then((res) => {
        return res.json();
      })
      .then((users) =>
        this.setState(() => {
          return { flowers: users };
        })
      );
  }

  render() {
    const { flowers, search } = this.state;
    const filteredFlowers = flowers.filter((el) =>
      el.name.toLocaleLowerCase().includes(search)
    );
    return (
      <div className="App">
        <h1 className="heading">Flower Pot</h1>
        <SearchBox
          onSearchChange={this.onSearchChange}
          placeholder="search flowers"
          className="search-box"
        ></SearchBox>

        <CardList flowers={filteredFlowers}></CardList>
      </div>
    );
  }

  onSearchChange = (event) => {
    const search = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { search };
    });
  };
}
