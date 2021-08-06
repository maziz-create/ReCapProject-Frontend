import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/Entity/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  userDetail$: Observable<User | undefined> = this.authService.userDetail$;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
