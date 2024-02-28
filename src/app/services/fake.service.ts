import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { dataDetails } from "../interfaces";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root",
})
export class FakeService {
  API_URL = environment.BASE_URL;
  http = inject(HttpClient);

  getData() {
    const url = `${this.API_URL}+ /all`;
    return this.http.get<dataDetails>(url);
  }
}
