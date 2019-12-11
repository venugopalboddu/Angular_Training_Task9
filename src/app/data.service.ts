import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private ht: HttpClient) { }
 // http://192.168.3.112/user/create
  ge() {
    return this.ht.get('http://localhost:3000/posts');
  }
  po(d) {
    return this.ht.post('http://localhost:3000/posts', d);
  }
 
}
