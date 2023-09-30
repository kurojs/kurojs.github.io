import { getContactHref } from "@/utils";

describe("getContactHref", () => {
  test("successful return contact href", () => {
    expect(getContactHref("github", "#")).toBe("https://github.com/#");
    expect(getContactHref("linkedin", "#")).toBe(
      "https://www.linkedin.com/in/#",
    );
  });
});
