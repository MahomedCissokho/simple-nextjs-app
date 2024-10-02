/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "./page";

it("App Router: Works with Server Components", () => {
  render(<Page />);
  expect(screen.getByRole("heading")).toHaveTextContent("Hello, my name is Mahomed CISSOKHO, T'ES LE BEST . Don't forget to check out the other pages!");
});
