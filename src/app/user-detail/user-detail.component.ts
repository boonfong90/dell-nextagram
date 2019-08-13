import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { UserService } from '../user.service'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  images: string[] = []
  username: string

  constructor(private userService: UserService,private route: ActivatedRoute) { }
    
  ngOnInit() {
    const userId = this.route.snapshot.params.userId
    this.username = this.route.snapshot.params.username
    this.userService.getUserImages(userId).subscribe(response => {
      this.images = response as string[]
    })
  }

}
