import React, { Component } from "react";
import FilterIngredient from "./filter-ingredient";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import PropTypes from "prop-types";

class ContextProvider extends Component {
  static childContextTypes = {
    myContext: PropTypes.object,
  };

  getChildContext = () => ({
    myContext: {
      ingred: [{ name: "" }, { name: "" }, { name: "" }, { name: "" }],
    },
  });
  render() {
    return this.props.children;
  }
}

describe(`FilterIngredient component`, () => {
  it("FilterIngredient snapshot test", () => {
    const tree = shallow(
      <ContextProvider>
        <FilterIngredient />
      </ContextProvider>
    );
    expect(toJson(tree)).toMatchSnapshot();
  });
});
