import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: 'servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit  {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server Created : ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log('event : ', event);
    // We know the on the event that the value is in event.target.value
    // typescript lint will trigger because 'target' is of type input element though
    // We explicate inform the type in typescript by adding <HTMLInputElement> in front of it
    // it's just need to inform typescript that we know that the type of the html element
    // will be this <HTMLInputElement>, so that's why we do this explicit casting with the syntax
    // with the opening and closing of the tag of the <> sign the type in between
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
