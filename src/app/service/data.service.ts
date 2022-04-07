import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const options = {
  headers: new HttpHeaders()
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  //register
  register(uname: any, uid: any, pass: any) {
    //json data
    const data = {
      uname, uid, pass     //keys should b as the thunder clint body keys  .other wise we should put that
                           //key-value pair
    }
    //register API
    return this.http.post('http://localhost:3000/register', data)
  }

  //Login
  login(uid:any,pass:any){
    const data={
      uid,pass
    }
    //login API
    return this.http.post('http://localhost:3000/login', data)
  }


  //addEvent
  addEvent(uid:any,date:any,desc:any){
    const data={
      uid,date,desc
    }
    return this.http.post('http://localhost:3000/dashboard', data,this.getOption())

  }

  
  //History
  history(uid:any){
    const data={
      uid
    }
    return this.http.post('http://localhost:3000/history', data,this.getOption())
  }

  getOption() {   //to add token in request header
    //token fetch
    const token = JSON.parse(localStorage.getItem('token') || '')

    //to create request header
    let headers = new HttpHeaders()
    if (token) {
      headers = headers.append('x-access-token', token)
      options.headers = headers
    }
    return options
  }


}
