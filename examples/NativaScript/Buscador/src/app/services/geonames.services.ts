import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders,HttpParams } from "@angular/common/http";

@Injectable()
export class geonamesService {
    public latitude  : string;
    public longitude : string;


    private serverUrl = "http://api.geonames.org/findNearbyPlaceNameJSON?";

    constructor(private http: HttpClient) { }

    getData() {
        let headers = this.createRequestHeader();
        let params  = this.createRequestParameter();
        return this.http.get(this.serverUrl, { headers: headers,params: params });
    }

    private createRequestHeader() {
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

    private createRequestParameter(){
        let params = new HttpParams().set('lat', this.latitude)
                                     .set('lng',this.longitude)
                                     .set('username','carincon');
        return params;
    }
}