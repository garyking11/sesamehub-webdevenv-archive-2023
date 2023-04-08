import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchlibrarypages',
    pure: false
})
export class SearchLibraryPages implements PipeTransform {
    transform(pages: any, searchPages: any): any {
        if(searchPages == null) return pages;

        return pages.filter(function(searchjson){
            return searchjson.lib_page.toLowerCase().indexOf(searchPages.toLowerCase()) > -1;
        })
    }
}