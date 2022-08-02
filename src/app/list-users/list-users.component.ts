import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //users!:any;
  //users = ["Srinu","Ramesh","Hareeshwa"];
users=[
  {id:101, name:"Srinu", email:"srinu@gmail.com"},
  {id:102, name:"Ramesh", email:"r@gmail.com"},
  {id:103, name:"Hareeshwa", email:"hari@gmail.com"},
];

//Next Task:ListTaskComponent
tasks = [
  {id:1, name:"Install Java", status:"COMPLETED"},
  {id:2, name:"Install NodeJS", status:"PENDING"},
]
  deleteUser(){
    alert("Successfully Deleted");
  }

}
