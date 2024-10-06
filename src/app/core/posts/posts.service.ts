import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "./posts.model";
import { environment } from "../../../environments/environment.development";

@Injectable({
    providedIn: 'root',
})
export class PostService {
    constructor(private http: HttpClient) {}

    public getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(`${environment.API_URL}/posts`);
    }
}
