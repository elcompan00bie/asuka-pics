import { MetricPicture } from "./MetricPicture";

export class AsukaPicture{
    private _pictureUrl:string;
    private _title:string;
    private _metrics:MetricPicture;

    constructor(pictureUrl:string='../assets/pictures/asuka-picture0.png',
                title:string='Asuka picture title'){
        this._pictureUrl=pictureUrl;
        this._title=title;
        this._metrics={countLikes:0,countHearts:0};
    }

    // getters and setters
    get pictureUrl():string{
        return this._pictureUrl;
    }

    set pictureUrl(_pictureUrl:string){
        if(_pictureUrl)
            this._pictureUrl=_pictureUrl;
    }

    get title():string{
        return this._title;
    }

    set title(_title:string){
        this._title=_title;
    }

    get metrics():MetricPicture{
        return this._metrics;
    }

    set metrics(_metrics:MetricPicture){
        if(_metrics.countLikes>-1 && _metrics.countHearts>-1)
            this._metrics=_metrics;
    }
}