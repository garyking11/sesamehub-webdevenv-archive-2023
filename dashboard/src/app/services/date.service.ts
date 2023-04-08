import {Injectable} from "@angular/core";
import 'rxjs/Rx';

@Injectable()

export class DateService {

    public today: any;
    public dd: any;
    public mm: any;
    public yyyy: any;

    constructor() {

      this.today = new Date();
    }

    getTodaysDate()  {

        var dateToday = {
            "today": new Date(),
            "dd": this.today.getDate(),
            "mm": this.today.getMonth() + 1, //January is 0!
            "yyyy": this.today.getFullYear()
        }

        if (dateToday.dd < 10) {
            dateToday.dd = '0' + dateToday.dd
        }

        if (dateToday.mm < 10) {
            dateToday.mm = '0' + dateToday.mm
        }

        // Example
        // today = dateToday.mm+'/'+dateToday.dd+'/'+dateToday.yyyy;

        return dateToday;
    }
}