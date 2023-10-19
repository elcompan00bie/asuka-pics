import { Component,OnInit,OnDestroy } from '@angular/core';
import { AsukaPicture } from '../../../models/AsukaPicture';

@Component({
  selector: 'app-data-asuka-pictures',
  templateUrl: './data-asuka-pictures.component.html',
  styleUrls: ['./data-asuka-pictures.component.css']
})
export class DataAsukaPicturesComponent implements OnInit,OnDestroy{
  private _asukaPictures:AsukaPicture[];
  private timeout:any;
  
  // set property _asukaPictures of array type
  constructor(){
    this._asukaPictures=[];
  }

  // init logic
  ngOnInit():void{
    this.loadPictures();
    this.setTitles();
    console.log(this.asukaPictures);
    this.timeout=setTimeout(()=>{
      this.randomMetrics();
    },3000);
  }

  // clear interval
  ngOnDestroy(): void {
      clearTimeout(this.timeout);
  }

  // get an asuka pictures array
  get asukaPictures():AsukaPicture[]{
    return this._asukaPictures;
  }

  // load all asuka pictures
  private loadPictures(){
    let pictureUrl='../../../assets/pictures/asuka-picture';
    for(let i=0;i<4;i++)
      this._asukaPictures.push(new AsukaPicture(pictureUrl+i+'.png'));
  }

  // set title to each picture
  private setTitles(){
    this._asukaPictures[0].title='on the desk';
    this._asukaPictures[1].title='under a BMW';
    this._asukaPictures[2].title='in the forest';
    this._asukaPictures[3].title='in the kitchen';
  }

  // set random metrics values
  private randomMetrics(){
    for(let asukaPicture of this._asukaPictures){
      asukaPicture.metrics={countLikes:this.randomValue(),countHearts:this.randomValue()};
    }
  }

  // set a random value
  private randomValue(maxValue:number=1000){
    return Math.floor(Math.random()*maxValue);
  }
}
