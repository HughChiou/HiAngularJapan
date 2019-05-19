import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {

  sample = '<span>This is a sample!!!abcdefapoidjfalsdkj</span>';

  myClass = 'sample';

  sample2;'';

  myFunc(str: string) {
    prompt(str);
  }

  myStr() {
    return '這是一段字…';
  }
}
