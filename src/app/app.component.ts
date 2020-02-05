import { Component, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'BenchBook';
  public message;
 @Output() public childevent=new EventEmitter()
}
