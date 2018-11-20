import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-people-list',
  template: `
    <ul>
      <li *ngFor="let person of people">
        {{ person.name }}
      </li>
    </ul>
    <div>
      <input type="text" #personName>
      <button (click)="onAddPerson(personName)">Add</button>
    </div>
  `
})
export class PeopleListComponent implements OnInit {
  people;

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.people = this.peopleService.getPeople();
  }

  onAddPerson(personTextBox) {
    this.peopleService.addPerson(personTextBox.value);
    personTextBox.value = '';
  }
}
