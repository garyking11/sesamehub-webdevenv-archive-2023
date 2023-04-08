<div id="sm-forms" xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html">

    <h2 class="site-heading">{{ pageData.page_data[11].name }}</h2>

    <form id="sm-members" name="forms" novalidate data-ng-submit='forms.$valid && SaveForm();'>

        <button data-ng-click='AddItem( pageData.page_data[11]);'>
            <i class="fa fa-plus"></i> Add
        </button>

        <button type="submit"
                ng-model="buttonState"
                data-ng-class="{
                'btncomplete' : buttonState == true,
                'btnready' : buttonState ==  false,
                'error': members.$invalid
                }">

            <i class="fa fa-floppy-o"></i> Save {{ msg }}
        </button>

        <div class="error-wrapper">

            <div class="error small" data-ng-show="forms.$invalid">{{error}}
                <div>There is an empty field.</div>
            </div>

            <div class="warning small">
                <div>{{ status }}</div>
            </div>

        </div>
        <!-- end error-wrapper -->


        <div class="form-control">

            <ul class="forms-data">

                <div ng-model="pageData.page_data[11].items" ui-sortable="forms-data">

                    <li data-ng-repeat="form in pageData.page_data[11].items"
                        class="light-green">

                        <data-ng-form name="formForm">

                            <div class="row">
                                <div class="span12">

                                <i class="fa fa-arrow-circle-right"
                                   data-placement="top-left" title="{{popover[18].title}}"
                                   data-content="{{popover[18].content}}" data-trigger="hover" bs-popover>
                                </i>

                                <i class="fa fa-arrows-alt drag-item"></i>
                                <a class="remove-item" data-ng-click="RemoveItem(pageData.page_data[11], form)">
                                    <i class="fa fa-trash-o sm-callout-icon"></i></a>
                                    ({{ form.url | getExtension | uppercase}})

                                    </div>
                                </div>
                            <div class="row">
                                <div class="span6">

                                    <label>#{{$index + 1 }} - {{form.name}}
                                        <span class="label-instructions">Patient Information Form</span></label>

                                    <input type="text"
                                           name=docname"
                                           data-ng-model="form.name"
                                           placeholder="form Name"
                                           data-ng-change="clearMsg();"
                                           ng-trim="true"
                                           required
                                           value="{{ form.name }}"/>


                                    <div class="error "
                                         data-ng-show="formForm.formname.$error.required">
                                        Name can't be empty.
                                    </div>

                                </div>
                                <div class="span6">

                                    <label> Form URL  <span data-ng-hide="form.url == ''"></span> <span class="label-instructions">/assets/docs/form-name.doc</span> </label>
                                    <input type="text"
                                           name="docurl"
                                           data-ng-model="form.url"
                                           placeholder="Form URL"
                                           data-ng-change="clearMsg();"
                                           ng-trim="true"
                                           value="{{ form.url }}"/>

                                    <div class="error "
                                         data-ng-show="formForm.docurl.$error.required">
                                        Name can't be empty.
                                    </div>
                                </div>

                                <!-- end span6 -->
                                <div class="clear"></div>
                            </div>
                            <!-- end row -->

                        </data-ng-form>

                    </li>

                </div>
                <!-- end sortable -->

            </ul>

            <h4><i class="fa fa-arrow-circle-right" style="color: #333;" data-placement="top-left"
                   title="{{popover[8].title}}" data-content="{{popover[8].content}}" data-trigger="hover" bs-popover>
                </i> Grab your HTML</h4>

            <code class="code">

                &lt;ul&gt;

                <div data-ng-repeat="form in pageData.page_data[11].items">

                    <span data-ng-hide="form.name == ''">

                        &lt;li&gt;

                        <span data-ng-hide="form.url == ''">{{form.name}} &lt;a target="_blank" class="external" href="{{ form.url}}">{{ form.url | getExtension | uppercase }}  &lt;/a&gt;</span>

<!--                        <span data-ng-hide="form.docurl == ''">| &lt;a target="_blank" class="external" href="{{ form.docurl }}"&gt;DOC&lt;/a&gt;</span>-->

                        &lt;/li&gt;
                    </span>

                   <!-- <span data-ng-hide="form.name == ''">
                        &lt;img class="img-right" src="/assets/uploads/images/{{form.image}}" alt="{{form.name}}"/&gt;
                    </span>-->

                </div>
                &lt;/ul&gt;

                &lt;p&gt;If you&#39;re unable to open PDF files, you can &lt;a href="http://adobe.com/products/acrobat/readstep2.html">get Adobe Reader&reg;&lt;/a&gt; for free. &lt;/p&gt;

            </code><!-- end form control -->

    </form>

</div><!-- end form-control -->


</div><!-- end forms -->

