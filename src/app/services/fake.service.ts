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
    const url = `${this.API_URL}/all`;
    console.log(url);
    return this.http.get<dataDetails>(url);
  }
  saveData(data: dataDetails) {
    const url = `${this.API_URL}/save`;
    console.log(data);
    return this.http.post<dataDetails>(url, data);
  }

  deleteData(id: number) {
    const url = `${this.API_URL}/delete/${id}`;
    return this.http.delete<dataDetails>(url);
  }

  updateData(data: dataDetails) {
    const url = `${this.API_URL}/update`;
    console.log(data);
    return this.http.put<dataDetails>(url, data);
  }

  signUp(data: dataDetails) {
    const url = `${this.API_URL}/signup`;
    console.log(data);
    return this.http.post<dataDetails>(url, data);
  }

  signIn(data: dataDetails) {
    const url = `${this.API_URL}/signin`;
    console.log(data);
    return this.http.post<dataDetails>(url, data);
  }

  signOut() {
    const url = `${this.API_URL}/signout`;
    console.log(url);
    return this.http.get<dataDetails>(url);
  }
}
