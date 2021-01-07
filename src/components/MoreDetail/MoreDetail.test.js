import React from "react";
import { render } from "@testing-library/react";
import MoreDetail from "./MoreDetail";

describe("MoreDetail tests", () => {
  it("should render", () => {
    expect(render(<MoreDetail />)).toBeTruthy();
  });
});
