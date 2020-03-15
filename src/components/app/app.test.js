import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {films} from "../../mocks/mocks-test.js";
import {ALL_GENRES} from "../../const.js";

const mockStore = configureStore([]);

it(`Render App`, () => {
  const store = mockStore({
    films,
    activeGenre: ALL_GENRES,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <App
          films={store.getState().films}
          activeGenre={store.getState().activeGenre}
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
