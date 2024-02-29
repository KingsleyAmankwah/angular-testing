import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { FakeService } from "./fake.service";
import { environment } from "../environments/environment";

describe("FakeService", () => {
  let service: FakeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    // Set up TestBed configuration before each test
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FakeService],
    });

    // Get an instance of the FakeService and HttpTestingController
    service = TestBed.inject(FakeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  // Clean up the HTTP requests after each test
  afterEach(() => {
    httpMock.verify();
  });

  // Test: Check if the service is created successfully
  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  //! Test Case for get data method
  it("should fetch data", () => {
    // Mock data that will be used for the test
    const mockData = {
      userId: 1,
      id: 1,
      title: "Get data from API",
      completed: false,
    };

    // Subscribe to the getData method in the service and assert the received data
    service.getData().subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    // Expect a single HTTP request to the specified URL
    const req = httpMock.expectOne(`${environment.BASE_URL}/all`);
    // Expect that the request is a GET request
    expect(req.request.method).toBe("GET");
    // Simulate the backend response by flushing the mock data
    req.flush(mockData);
  });

  //! Test Case for Save data method
  it("should save data", () => {
    // Mock data that will be used for the test
    const mockData = {
      userId: 2,
      id: 2,
      title: "Save data to API",
      completed: true,
    };

    //subscribe to the saveData method in the service and assert the data
    service.saveData(mockData).subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    //Expect a single HTTP request to the specificied URL
    const req = httpMock.expectOne(`${environment.BASE_URL}/save`);
    // Expect that the request is a POST method
    expect(req.request.method).toBe("POST");

    //Simulate the backend response by flushing the mock data
    req.flush(mockData);
  });

  //! Test case for delete data method
  it("should delete data", () => {
    const mockData = {
      userId: 3,
      id: 3,
      title: "Delete data from API",
      completed: true,
    };

    //Subscribe the deleteData method method to the service and assert the data
    service.deleteData(3).subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    // Expect that a single request has been made to the specified URL
    const req = httpMock.expectOne(`${environment.BASE_URL}/delete/3`);
    // Expect that the request is a DELETE request
    expect(req.request.method).toBe("DELETE");
    // Simulate the backend response with the mock data
    req.flush(mockData);
  });

  //!Test case for update data method
  it("should update data", () => {
    //mock data to test the api
    const mockData = {
      userId: 4,
      id: 4,
      title: "Update data from API",
      completed: true,
    };

    //Subscribe the updateData method to the service and assert the data
    service.updateData(mockData).subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    //Expect that a single request has been made to the specified URL
    const req = httpMock.expectOne(`${environment.BASE_URL}/update`);
    // Expect that the request is a PUT request
    expect(req.request.method).toBe("PUT");
    // Simulate the backend response with the mock data
    req.flush(mockData);
  });

  //! Test case for the signUp method
  it("should sign up", () => {
    // Mock data representing the expected response from the API after signing up
    const mockData = {
      userId: 5,
      id: 5,
      title: "Sign up to API",
      completed: true,
    };

    // Subscribe to the signUp method and assert the received data
    service.signUp(mockData).subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    // Expect a single HTTP request to the specified URL for sign up
    const req = httpMock.expectOne(`${environment.BASE_URL}/signup`);
    // Verify that the request method is POST for sign up
    expect(req.request.method).toBe("POST");
    // Simulate the backend response by flushing the mock data
    req.flush(mockData);
  });

  //! Test case for the signIn method
  it("should sign in", () => {
    // Mock data representing the expected response from the API after signing in
    const mockData = {
      userId: 6,
      id: 6,
      title: "Sign in to API",
      completed: true,
    };

    // Subscribe to the signIn method and assert the received data
    service.signIn(mockData).subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    // Expect a single HTTP request to the specified URL for sign in
    const req = httpMock.expectOne(`${environment.BASE_URL}/signin`);
    // Verify that the request method is POST for sign in
    expect(req.request.method).toBe("POST");
    // Simulate the backend response by flushing the mock data
    req.flush(mockData);
  });

  //! Test case for the signOut method
  it("should sign out", () => {
    // Mock data representing the expected response from the API after signing out
    const mockData = {
      userId: 7,
      id: 7,
      title: "Sign out from API",
      completed: true,
    };

    // Subscribe to the signOut method and assert the received data
    service.signOut().subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    // Expect a single HTTP request to the specified URL for sign out
    const req = httpMock.expectOne(`${environment.BASE_URL}/signout`);
    // Verify that the request method is GET for sign out
    expect(req.request.method).toBe("GET");
    // Simulate the backend response by flushing the mock data
    req.flush(mockData);
  });
});
