import {Component, OnInit, Compiler, ViewChild, ElementRef} from '@angular/core';
import {FormGroup, Validators, NgForm, FormArray, FormBuilder, FormControl} from '@angular/forms';
import {SiteContextProviderService} from '../../dev-tools/site-context-provider/services/site-context-provider.service';
import {StylesPanel01Service} from './styles-panel-01.service';
import {ShowHideContentService} from '../services/show-hide-content.service';
import {AdminService} from '../admin-dashboard/admin/admin.service';
import {Router} from '@angular/router';
import {CopyDataToClipboardService} from '../services/copy-to-clipboard.service';
declare var $: any;
@Component({
    selector: 'dev-styles-panel-01',
    templateUrl: './styles-panel-01.component.html',
    styleUrls: ['./styles-panel-01.component.css']
})
export class StylesPanel01Component implements OnInit {

    public account: string;
    public stylesPanel01Form: FormGroup;
    public sitecontext;
    public _showHideContent: ShowHideContentService;
    public _adminService: AdminService;
    public stylesPanel01Data;
    private stylesPanel01DataArray: any[] = [];

    //private deleteConfirmationArray: boolean[] = [];

    constructor(
        public _stylesPanel01Service: StylesPanel01Service,
        public _siteContextProviderService: SiteContextProviderService,
        public _copyDataToClipboardService: CopyDataToClipboardService,
        public _fb: FormBuilder,
        public _compiler: Compiler,
        public router: Router) {
        // this.stylesPanel01Form = new FormGroup({items: new FormArray([])});


        this.stylesPanel01Form = this._fb.group({
            /*builderName: [''],
            accountName: [''],*/
            // content
            //color0: [''],
            //color1: [''],
            //contentlineheight: [''],
            //contentfontsize: [''],
            // mainnav
            mainnavstyle: [''],
            // trigger: [''],
            //primary: [''],
            //secondary: [''],
            //mainnavfloat: [''],
            //mainnavmargintop: [''],
            //mainnavheight: [''],
            //mainnavitemmargin: [''],
           // dropdownlinkheight: [''],
           //dropdownoffset: [''],
            // logo
            //logomobilecenter: [''],
            //logowidth: [''],
            //logoheight: [''],
            // socialmedia icons
            //icondimensions: [''],
            //iconfontsize: [''],
            // slideshow
            slideshowstyle: [''],
            //slideshowheight: [''],
            // subnav
            subnavorientation: [''],
            //subnavlinkheight: [''],
            //subnavlinkfontsize: [''],
            //subnavtoppadding: [''],
            //subnavh2topicfontsize: [''],
            //subnavh2topicheight: [''],
            //subnavbottompadding: [''],
            // bd
            //bdcontainerwidth: [''],
            //bdcontentwidth: [''],
            //homepagebdcontainerwidth: [''],
            //homepagecontentwidth: [''],
            //homepagecontentfloat: [''],
            // sitemap
            //ullineheight: [''],
            //ulfontsize: [''],
            //ulullineheight: [''],
            //ululfontsize: [''],
            //sidebar
            //sidebarwidth: [''],
            // footer
            //ftaddresslineheight: [''],
            //ftaddressfontsize: [''],
            //ftphonelineheight: [''],
            //ftphonefontsize: [''],
            //ftmapmarkerstyle: [''],
            //ftmapmarkerfontsize: [''],
            // footer links
            //linksheight: [''],
            //linkslineheight: [''],
            //linksfontsize: [''],
            //sesame icons/links
            //sesameiconmono: [''],
            //sesameiconW: [''],
            //sesameiconH: [''],
            //sesameiconmarginright: [''],
            //bttfontsize: [''],
            //hrcolor: [''],
            //hrheight: [''],
            //hrwidth: 1[''],

            // contentText: [''],
            /*font1: [''],
            fontLink1: [''],
            font2: [''],
            fontLink2: [''],
            font3: [''],
            fontLink3: [''],
            font4: [''],
            fontLink4: [''],
            containerWidthHome: [''],
            containerWidthInternal: [''],*/
            // slideshowOption: [''],
            // heroBannerOption: [''],
            /*preloadFont1: [''],
            preloadFont2: [''],
            preloadFont3: [''],
            preloadFont4: [''],
            fullMob: ['']*/
        });
    }

    subnavOrientationOptionsArray = [
        {value: 'top', display: 'Top'},
        {value: 'sidebar', display: 'Sidebar'}
    ]
    slideshowOptionArray = [
        {value: 'video', display: 'Video'},
        {value: 'classic', display: 'Classic Images'}
    ]
    heroBannerOptionArray = [
        {value: 'true', display: 'True'},
        {value: 'false', display: 'False'}
    ]
    mainnavfloatArray = [
        {value: 'left', display: 'Left'},
        {value: 'right', display: 'Right'},
        {value: 'none', display: 'None'}
    ]
    mainnavstyleArray = [
        {value: 'standard', display: 'Standard'},
        {value: 'fullmob', display: 'Fullmob'},
    ]

    logomobilecenterArray = [
        {value: 'true', display: 'True'},
        {value: 'false', display: 'False'},
    ]

    homepagecontentfloatArray = [
        {value: 'left', display: 'True'},
        {value: 'center', display: 'Center'},
        {value: 'right', display: 'Right'},
    ]

    ftmapmarkerstyleArray = [
        {value: 'alt', display: 'Alt'},
        {value: 'classic', display: 'Classic'},
    ]

    sesameiconmonoArray = [
        {value: 'true', display: 'True'},
        {value: 'false', display: 'False'},

    ]



    ngOnInit() {
        this.onGetSiteContext();
        this.getStylesPanel01Data(null);
    }

    /**
     * Get account directory name on click event in site-context html
     * @returns {any}
     */
    onGetSiteContext() {
        this._siteContextProviderService.getCurrentContext().subscribe(
            data => {
                this.sitecontext = data;
                this.account = data.account;
                // Send account name to onGetLocalFormData
                this.getStylesPanel01Data(data.account);
                // this.onGetProductType(data.account)
            },
            error => console.log(error)
        );

        return this.sitecontext;
    }

    getStylesPanel01Data(account: string) {
        this._stylesPanel01Service.getData().subscribe(
            res => {
                let data;
                try {
                    data = res.json();
                } catch (e) {
                    return;
                }

                //console.log('StylesPanel01 data retrieved: ' + new Date().toUTCString());

                // Create an array from json data
                this.stylesPanel01DataArray = data.stylesPanel01;
                const item = data.stylesPanel01;

                // Create a form
                this.stylesPanel01Form = this._fb.group({
                    /*builderName: [item.builderName],
                    accountName: [item.accountName],*/
                    // content
                    // contentText: [item.contentText],
                    //contentfontsize: [item.contentfontsize],
                    //contentlineheight: [item.contentlineheight],
                    // mainnav
                    mainnavstyle: [item.mainnavstyle],
                    // trigger: [item.trigger],
                    //primary: [item.primary],
                    //secondary: [item.secondary],
                    //mainnavfloat: [item.mainnavfloat],
                    //mainnavmargintop: [item.mainnavmargintop],
                    //mainnavheight: [item.mainnavheight],
                    //mainnavitemmargin: [item.mainnavitemmargin],
                    //dropdownlinkheight: [item.dropdownlinkheight],
                    //dropdownoffset: [item.dropdownoffset],
                    // logo
                    //logomobilecenter: [item.logomobilecenter],
                    //logowidth: [item.logowidth],
                    //logoheight: [item.logoheight],
                    // socialmedia icons
                    //icondimensions: [item.icondimensions],
                    //iconfontsize: [item.iconfontsize],
                    // slideshow
                    slideshowstyle: [item.slideshowstyle],
                    //slideshowheight: [item.slideshowheight],
                    // subnav
                    subnavorientation: [item.subnavorientation],
                    //subnavlinkheight: [item.subnavlinkheight],
                    //subnavlinkfontsize: [item.subnavlinkfontsize],
                    //subnavtoppadding: [item.subnavtoppadding],
                    //subnavbottompadding: [item.subnavbottompadding],
                    //subnavh2topicfontsize: [item.subnavh2topicfontsize],
                    //subnavh2topicheight: [item.subnavh2topicheight],
                    // bd
                    //bdcontainerwidth: [item.bdcontainerwidth],
                    //bdcontentwidth: [item.bdcontentwidth],
                    //homepagebdcontainerwidth: [item.homepagebdcontainerwidth],
                    //homepagecontentwidth: [item.homepagecontentwidth],
                    //homepagecontentfloat: [item.homepagecontentfloat],
                    // sitemap
                    //ullineheight: [item.ullineheight],
                    //ulfontsize: [item.ulfontsize],
                    //ulullineheight: [item.ulullineheight],
                    //ululfontsize: [item.ululfontsize],
                    //sidebar
                    //sidebarwidth: [item.sidebarwidth],
                    // footer
                    //ftaddresslineheight: [item.ftaddresslineheight],
                    //ftaddressfontsize: [item.ftaddressfontsize],
                    //ftphonelineheight: [item.ftphonelineheight],
                    //ftphonefontsize: [item.ftphonefontsize],
                    //ftmapmarkerstyle: [item.ftmapmarkerstyle],
                    //ftmapmarkerfontsize: [item.ftmapmarkerfontsize],
                    // footer links
                    //linksheight: [item.linksheight],
                    //linkslineheight: [item.linkslineheight],
                    //linksfontsize: [item.linksfontsize],
                    //sesame icons/links
                    //sesameiconmono: [item.sesameiconmono],
                    //sesameiconW: [item.sesameiconW],
                    //sesameiconH: [item.sesameiconH],
                    //sesameiconmarginright: [item.sesameiconmarginright],
                    //bttfontsize: [item.bttfontsize],
                    //hrcolor: [item.hrcolor],
                    //hrheight: [item.hrheight],
                    //hrwidth: [item.hrwidth],


                    /*font1: [item.font1],
                    fontLink1: [item.fontLink1],
                    font2: [item.font2],
                    fontLink2: [item.fontLink2],
                    font3: [item.font3],
                    fontLink3: [item.fontLink3],
                    font4: [item.font4],
                    fontLink4: [item.fontLink4],*/
                    //color0: [item.color0],
                    //color1: [item.color1],
                    // containerWidthHome: [item.containerWidthHome],
                    // containerWidthInternal: [item.containerWidthInternal],

                   // slideshowOption: [item.slideshowOption],
                    //heroBannerOption: [item.heroBannerOption],
                    /*preloadFont1: [item.preloadFont1],
                    preloadFont2: [item.preloadFont2],
                    preloadFont3: [item.preloadFont3],
                    preloadFont4: [item.preloadFont4],
                    fullMob: [item.fullMob]*/
                });
            },
            error => console.log('OK - null value returned.')
        );
        this._compiler.clearCache();
        return this.stylesPanel01DataArray;
    }

    setStylePanel01(data: any) {
        const body = {
            account: this.account,
            stylesPanel01: data
        }

        this._stylesPanel01Service.setData(body).subscribe(ret => {

        });
        console.log(data);
    }

}
