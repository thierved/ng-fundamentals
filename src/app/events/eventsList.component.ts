import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    template: `
        <div>
            <h1>Upcomming Angular Events</h1>
            <hr>
            <event-thumbnail #thumbnail [event]="event1"></event-thumbnail>
            <button class="btn btn-primary" (click)="thumbnail.LogFoo()">Logfoo</button>
        </div>
    `
    
})
export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '9/10/2019',
        time: '10:25',
        price: 200,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }

    
}