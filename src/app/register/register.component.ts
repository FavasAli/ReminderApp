import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  registerForm=this.fb.group(
    {
      uname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      uid:['',[Validators.required,Validators.pattern('[0-9]*')]],
      pass:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]],
    }
  )

  constructor(private fb:FormBuilder, private ds:DataService, private router:Router) { }

  ngOnInit(): void {
  }

  register()
  {
    var uname = this.registerForm.value.uname
    var uid = this.registerForm.value.uid
    var pass = this.registerForm.value.pass

    if(this.registerForm.valid){

      //asynchronouns
     this.ds.register(uname,uid,pass)
    //  const result= this.ds.register(uname,uid,pass)
    //  if(result)
    //  {
    //    alert("successfully f Registered")
    //  }
    //  else{
    //    alert("please Login....")
    //  }


      .subscribe((result:any)=>{
        if(result)
        {
          alert(result.message)
          this.router.navigateByUrl("")
        }
      },
      
        (res)=>{
          alert(res.error.message)
          this.router.navigateByUrl("")
      })
    }
    

  }
}
