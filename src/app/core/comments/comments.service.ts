import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root',
})
export class CommnetService {
    constructor(private http : HttpClient){
    }

    getComments(): Observable<Comment[]>{
        const comments = this.http.get<Comment[]>("https://jsonplaceholder.typicode.com/comments");
        console.log("comments:::",comments);
        return comments;
    }
}