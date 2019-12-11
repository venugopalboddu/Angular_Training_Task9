import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  fdata:any;
  results:any;
  submitted = false;
  emplye: any;
  searchText;
  fname1: any;
  lname1: any;
  constructor(private s: DataService, private fb: FormBuilder) {} 
    form = this.fb.group({
    id: [],
    fname: ['', Validators.required],
    password: ['', Validators.required] 
  })
ngOnInit() {
     this.getData();
  }

   getData()  {
    this.s.ge().subscribe(res=>this.fdata=res); 
    
  }
    get f() { return this.form.controls; }
    onSubmit() {
    this.submitted = true;
    this.fname1=this.form.controls['fname'].value;
    this.lname1=this.form.controls['password'].value;

    if (this.form.invalid) {
        return;
    }
    alert('Login successful')
    //this.form.reset();
    //this.submitted = false;
}
}

