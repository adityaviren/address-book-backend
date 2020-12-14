import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getContactList(){
    console.log("Fetching contacts");
    return this.http.get('http://localhost:8080/address-book/get')
  }

  delete(id){
    console.log("Deleting Contact");
    return this.http.delete('http://localhost:8080/address-book/delete/'+id);
  }
  
  create(data){
    console.log("creating contact");
    return this.http.post('http://localhost:8080/address-book/create/',data);
  }

  update(data){
    console.log("updating employee");
    return this.http.put('http://locallhost:8080/address-book/update',data);
  }

}
