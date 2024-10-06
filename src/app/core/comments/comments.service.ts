import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment.development";

@Injectable({
    providedIn: 'root',
})
export class CommnetService {
    constructor(private http: HttpClient) {}

    getComments(): Observable<any> {
        return this.http.get<any[]>(`${environment.API_URL}/comments`);
    }
}
