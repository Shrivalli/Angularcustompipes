import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @ViewChild('f',{static:false}) courseForm: NgForm;
 // courseForm:NgForm;

  onSubmit(form: NgForm) {
	console.log("Course Name is : " + form.value.courseName);
	console.log("Course Desc is : " + form.value.courseDesc);
	console.log("Course Amount is : " + form.value.courseAmount);    
  }

  onClear() {
	// Now that we have access to the form via the 'ViewChild', we can access the form and clear it.
	this.courseForm.reset();
  }

  onDelete() {
  }

  ngOnDestroy() {    
  }

}




