import { Component, computed, signal, Input, input , Output, EventEmitter, output} from '@angular/core';

// import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomUserIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  // avatar = input.required<string>();
  // name = input.required<string>();

  // @Output() select = new EventEmitter<string>();
  select = output<string>();


  // imagePath=computed(()=>{
  //   return 'assets/users/' + this.avatar();
  // });

  get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    // const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[randomUserIndex];
    // this.selectedUser.set(DUMMY_USERS[randomUserIndex]);
    this.select.emit(this.id);
  }
}
