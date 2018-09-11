import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'parent app';
  message = '';
  messageFromChild = '';
  @ViewChild('iframe') iframe: ElementRef;

  ngOnInit(): void {
    if (window.addEventListener) {
      window.addEventListener('message', (event) => {
        const dataFromChildIframe = event.data;
        console.log(dataFromChildIframe);
        this.messageFromChild = dataFromChildIframe.messageFromChild;
      });
    }

  }

  submit = () => {
    console.log(this.message);
    let destination =  this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentWindow;
    destination.postMessage({messageFromParent: this.message},'http://localhost:4200/');
    console.log('submitted from parent');
  }
}
