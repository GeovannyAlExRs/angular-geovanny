import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuList: { accessLink: Array<any> } = { accessLink: [] }

  @Output() menuToggle = new EventEmitter<void>()
  @Output() signOut = new EventEmitter<void>()
  @Input() isAuthorized!: boolean | null
  //@Input() users!: UsersResponse | null

  constructor() {}

  ngOnInit(): void {
    this.menuList.accessLink = [
      { name: 'Home', icon: 'uil uil-estate', router: ['/home'], band: !this.isAuthorized },
      { name: 'Profile', icon: 'uil uil-brightness-plus', router: ['/profile'], band: false },
      { name: 'Register', icon: 'uil uil-user-plus', router: ['/auth/register'], band: this.isAuthorized },
      { name: 'Login', icon: 'uil uil-signin', router: ['/auth/login'], band: this.isAuthorized },
      { name: 'Sign out', icon: 'uil uil-signout', router: ['/home'], band: !this.isAuthorized }
    ]
  }

  closeMenu() :void {
    this.menuToggle.emit()
  }

  logoutUser(menu: string): void {
    if(menu === 'Sign out') {
      this.signOut.emit()
      //console.log('Menu: SOY', menu)
    }
  }
}
