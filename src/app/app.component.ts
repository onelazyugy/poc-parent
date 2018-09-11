import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'parent app';
  message = '';
  messageFromChild = '';

  ngOnInit(): void {
    if (window.addEventListener) {
      window.addEventListener('message', (event) => {
        const dataFromChildIframe = event.data;
        console.log(dataFromChildIframe);
        this.messageFromChild = dataFromChildIframe.messageFromParent;
      });
    }

  }

  submit = () => {
    console.log(this.message);
    const destination = document.getElementById('destination');
    // destination.postMessage(data, 'http://localhost:4200/');
  }
}
