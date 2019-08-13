import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

interface User {
  id: number
  username: string
  profileImage: string
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[]
  id: number
  username: String

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(response => {
      this.users = response as User[]
    })
  }

  onSubmit(event){
    var data = event.target.id;
    // var data2 = document.getElementById(data).getAttribute("name")
    // this.id = data;
    // this.username = data2;
    this.userService.getUserImages(data)
    console.log(data)
  }

}
