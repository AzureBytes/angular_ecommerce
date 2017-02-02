import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Address, AddressResponse } from './../models/address.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class BrochureService {
    private postUrl: string = "http://airal-brochure-api.azurewebsites.net/tables/BrochureRequests";

    constructor(private http: Http) { }

    public submitBrochure(mailingAddress: Address) : Observable<AddressResponse> {
        let options: RequestOptions = new RequestOptions({
            headers: new Headers({ 'ZUMO-API-VERSION': '2.0.0' })
        });
        
        return this.http.post(this.postUrl, mailingAddress, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}