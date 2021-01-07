import React from "react";
import { render } from "@testing-library/react";
import NoneFound from "./NoneFound";

describe("NoneFound tests", () => {
  it("should render", () => {
    expect(render(<NoneFound />)).toBeTruthy();
  });
});
