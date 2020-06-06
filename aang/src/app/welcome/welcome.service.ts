import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import 'rxjs';
import{python} from '../host'

@Injectable()
export class WelcomeService { 

    constructor(private http: HttpClient) { }

    getrider(number) {
        return this.http.post( python+"/getrider",{'number':number}).pipe(map(res => res));
    }

    getimage(num){
        return this.http.post("http://127.0.0.1:8888/getimage",{'number':num},{responseType: 'blob'}).pipe(map(res => res));
    }
}