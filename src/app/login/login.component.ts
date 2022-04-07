import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm=this.fb.group(
    {
      uid:['',[Validators.required,Validators.pattern('[0-9]*')]],
      pass:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]],

    }
  )
  constructor(private fb:FormBuilder,private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  login(){

    var uid=this.loginForm.value.uid
    var pass=this.loginForm.value.pass

    if(this.loginForm.valid){
      //asynchronous Call -Login
      this.ds.login(uid,pass)
      .subscribe((result:any)=>{
        if(result)
        {
          // console.log(result)
          localStorage.setItem('currentUser',JSON.stringify(result.currentUser))
          localStorage.setItem('currentUid',JSON.stringify(result.cUid))
          localStorage.setItem('token',JSON.stringify(result.token))
          alert(result.message)
          this.router.navigateByUrl("dashboard")
          
        }
      },
      (result)=>{
        alert(result.error.message)
      })

    }
    else{
      alert("invalid Form")
    }
  
    // .subscribe((result:any)=>{
    //   if(result)
    //   {
    //     alert(result.message)
    //   }
    // },
    // (result)=>{
    //   alert(result.error.message)
    // })
  }
}
