import { TestBed } from "@angular/core/testing";

import { FakeService } from "./fake.service";
import { HttpClientModule } from "@angular/common/http";

describe("FakeService", () => {
  let service: FakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(FakeService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should test getData method", () => {});
});
