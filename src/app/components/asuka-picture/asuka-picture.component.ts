import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-asuka-picture',
  templateUrl: './asuka-picture.component.html',
  styleUrls: ['./asuka-picture.component.css']
})
export class AsukaPictureComponent {
  @Input() imgUrl:string='Image url';
  @Input() title:string='title of image';
  @Input() likes:number=0;
  @Input() hearts:number=0;
}
