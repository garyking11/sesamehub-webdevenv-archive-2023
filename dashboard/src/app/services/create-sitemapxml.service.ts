import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CreateSitemapXmlService {

    constructor(private _http: HttpClient) {
    }

    /*createSitemapXml(siteContext, localUrl, results) {

        var sitemap = "";
        forEach(results, function (results) {
            sitemap += '    <url>\n        <loc>' + localUrl + results.loc + '</loc>\n        <lastmod>' + results.lastmod + '</lastmod>\n        <changefreq>' + results.changefreq + '</changefreq>\n        <priority>' + results.priority + '</priority>\n    </url>\n';
        });

        var sitemapXmlData = {
            account: siteContext,
            sitemapXml: '<?xml version="1.0" encoding="UTF-8" ?>\n' + '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"' + ' xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n' + sitemap + '</urlset>'
        }

        const body = sitemapXmlData;
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/dashboard/endpoints/sitemap-xml-endpoint.php', body, {headers: headers});
    }*/
}

