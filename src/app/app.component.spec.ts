import { AppComponent } from "./app.component";

describe("App Component", () => {
  // Variable to hold an instance of the AppComponent
  let fixture: AppComponent;

  // beforeEach: A setup function that runs before each test in the describe block
  beforeEach(() => {
    fixture = new AppComponent();
  });

  // Test case: It verifies that the component has a specific title.
  it("should have a title Angular Testing", () => {
    expect(fixture.title).toEqual("Angular Test");
  });

  // Another test case: It verifies the sum method of the component.
  it("should add 1 + 2 equal to 3", () => {
    expect(fixture.sum(1, 2)).toBe(3);
  });
});
