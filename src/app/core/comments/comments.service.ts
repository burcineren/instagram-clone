import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Comment } from "./comments.model";

@Injectable({
    providedIn: 'root',
})
export class CommnetService {
    constructor(private http: HttpClient) {}

    getComments(): Observable<any> {
        return this.http.get<any[]>("https://jsonplaceholder.typicode.com/comments");
    }
}
