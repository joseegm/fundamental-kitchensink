import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) { }

    public getUsers() {
        return this.http.get('https://jsonplaceholder.typicode.com/users');
    }

    public getUser(id) {
        return this.http.get('https://jsonplaceholder.typicode.com/users/' +  id);
    }

    public getBlock() {
        return this.http.get('/data/block.json');
    }


}