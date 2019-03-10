import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import 'rxjs/Rx';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class hipoUniversityService{
    public  search  : string;
    private serverUrl = "http://universities.hipolabs.com/search?name=";

    constructor(private http: HttpClient) { }

    getData() {
        let headers = this.createRequestHeader();
        return this.http.get(this.serverUrl+this.search, { headers: headers });
    }

    private createRequestHeader() {
        // set headers here e.g.
        let headers = new HttpHeaders({
            "AuthKey": "my-key",
            "AuthToken": "my-token",
            "Content-Type": "application/json",
            "X-Requested-With":"XMLHttpRequest",
            "Access-Control-Allow-Origin":"*",
            "Access-Control-Allow-Methods":"GET,POST,OPTIONS,DELETE,PUT",
            'Access-Control-Allow-Headers':'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
            'Access-Control-Expose-Headers':'Content-Length,Content-Range'
         });

        return headers;
    }
}