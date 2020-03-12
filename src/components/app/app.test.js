import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {films} from "../../mocks/mocks-test.js";

const mockStore = configureStore([]);
const ALL_GENRES = `All genres`;

it(`Render App`, () => {
  const store = mockStore({
    films,
    filteredGenre: ALL_GENRES,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <App
          films={store.getState().films}
          filteredGenre={store.getState().filteredGenre}
          onGenreChange={() => {}}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
