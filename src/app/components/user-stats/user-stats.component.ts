import { Component, OnInit } from '@angular/core';
import { NegativeParensPipe } from 'src/app/pipes/negative-parens.pipe';
import { User } from 'src/app/model/user';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { TestScheduler } from 'rxjs/testing';
import { UserStatsService } from 'src/app/services/user-stats.service';


@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.css']
})
export class UserStatsComponent implements OnInit {

  constructor(private userService: UserStatsService) {
    this.getUser();    
   }

  user?: User; 
  
  getUser() {
  this.userService.getUser().subscribe((response: any) => {this.user = response;
  
  })
  }
   
  ngOnInit(): void {}

}
