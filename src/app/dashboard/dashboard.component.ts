import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  aim="YOUR REMINDER PARTNER"

  userName=""
  userID=""

  homeForm=this.fb.group(
    {
      udate:['',[Validators.required]],
      desc:['',[Validators.required]],

    }
  )
  constructor(private fb:FormBuilder,private ds:DataService,private router:Router) {
    if (localStorage.getItem('currentUid')) {
      this.userName = JSON.parse(localStorage.getItem('currentUser') || '')
      this.userID = JSON.parse(localStorage.getItem('currentUid') || '')

    }
   }

  ngOnInit(): void {
  }

  
addEvent(){
  var date=this.homeForm.value.udate
  var desc=this.homeForm.value.desc


  if(this.homeForm.valid){
          //asynchronous Call -addEvent
          this.ds.addEvent(this.userID,date,desc)
          .subscribe((result:any)=>{
            if(result){
              alert(result.message)

            }
          },
          res=>{
            alert(res.error.message)
          })
          this.homeForm.reset()
  }
  else{
    alert("Invalid Form")
  }
}


logout() {
  localStorage.removeItem("currentAcno")
  localStorage.removeItem("currentUser")
  localStorage.removeItem("token")
  this.router.navigateByUrl("")
}

}
