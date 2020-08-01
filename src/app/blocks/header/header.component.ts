import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/core/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  user: User;

  @Output()
  logoutEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
