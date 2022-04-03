import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  // APP 컴포넌트 랜더링을 여기서 해줌. 랜더링을 해야지 밑에 있는 (learn react라는 텍스트가 있는 지)테스트를 할 수 있음. screen 객체를 사용하는 것을 추천
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  const lintTest = screen.getByRole("button", {
    name: "lintTestBtn",
    // 버튼에 'linteTestBtn 이라는 텍스트가 있는 지 테스트
  });

  // 비추천 코드
  // expect(lintTest.textContent).toBe("lintTestBtn");

  //추천 코드
  expect(lintTest).toHaveTextContent("lintTestBtn");
});
