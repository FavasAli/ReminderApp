import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

   index:any
  uid: any
  event: any
  formValue !:FormGroup
  constructor(private ds: DataService,private fb:FormBuilder,private router:Router) {
    this.uid = JSON.parse(localStorage.getItem('currentUid') || '')
    this.ds.history(this.uid)
      .subscribe((result: any) => {
        this.event = result.history
      }, (result) => {
        alert(result.message)

      }
      )
    //  console.log(this.event );


  }

  ngOnInit(): void {
  }

  deleteEvent(){
    
  }

  editItem(row:any){
    this.formValue.controls['date'].setValue(this.event["date"])
    this.formValue.controls['desc'].setValue(this.event["desc"])

    // this.router.navigateByUrl("dashboard")

  }
}
