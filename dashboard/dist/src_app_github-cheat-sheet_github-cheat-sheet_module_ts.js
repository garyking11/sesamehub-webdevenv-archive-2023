(self["webpackChunkdashboard"] = self["webpackChunkdashboard"] || []).push([["src_app_github-cheat-sheet_github-cheat-sheet_module_ts"],{

/***/ 42090:
/*!********************************************************************!*\
  !*** ./src/app/github-cheat-sheet/github-cheat-sheet.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GithubCheatSheetComponent": () => (/* binding */ GithubCheatSheetComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _github_cheat_sheet_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./github-cheat-sheet.component.html?ngResource */ 1589);
/* harmony import */ var _github_cheat_sheet_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./github-cheat-sheet.component.css?ngResource */ 45220);
/* harmony import */ var _github_cheat_sheet_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_github_cheat_sheet_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let GithubCheatSheetComponent = (_class = class GithubCheatSheetComponent {
  constructor() {}
  ngOnInit() {}
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => []), _class);
GithubCheatSheetComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'dev-github-cheat-sheet',
  template: _github_cheat_sheet_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_github_cheat_sheet_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], GithubCheatSheetComponent);


/***/ }),

/***/ 11413:
/*!*****************************************************************!*\
  !*** ./src/app/github-cheat-sheet/github-cheat-sheet.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GithubCheatSheetModule": () => (/* binding */ GithubCheatSheetModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared-formatting/shared-formatting.module */ 82744);
/* harmony import */ var _github_cheat_sheet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./github-cheat-sheet.component */ 42090);
/* harmony import */ var _github_cheat_sheet_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./github-cheat-sheet.routes */ 92608);
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu/menu.module */ 32825);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let GithubCheatSheetModule = class GithubCheatSheetModule {};
GithubCheatSheetModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  providers: [],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _menu_menu_module__WEBPACK_IMPORTED_MODULE_3__.MenuModule, _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_0__.SharedFormattingModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(_github_cheat_sheet_routes__WEBPACK_IMPORTED_MODULE_2__.ROUTES)],
  declarations: [_github_cheat_sheet_component__WEBPACK_IMPORTED_MODULE_1__.GithubCheatSheetComponent],
  exports: [_github_cheat_sheet_component__WEBPACK_IMPORTED_MODULE_1__.GithubCheatSheetComponent],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.CUSTOM_ELEMENTS_SCHEMA]
})], GithubCheatSheetModule);


/***/ }),

/***/ 92608:
/*!*****************************************************************!*\
  !*** ./src/app/github-cheat-sheet/github-cheat-sheet.routes.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _github_cheat_sheet_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./github-cheat-sheet.component */ 42090);

const ROUTES = [{
  path: '',
  component: _github_cheat_sheet_component__WEBPACK_IMPORTED_MODULE_0__.GithubCheatSheetComponent
}];

/***/ }),

/***/ 45220:
/*!********************************************************************************!*\
  !*** ./src/app/github-cheat-sheet/github-cheat-sheet.component.css?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1589:
/*!*********************************************************************************!*\
  !*** ./src/app/github-cheat-sheet/github-cheat-sheet.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n\n    <div class=\"row\">\n\n        <h1>Github Cheat Sheet</h1>\n\n        <div class=\"col-lg-8 col-md-8 col-sm-12 wow fadeIn\">\n\n            <h4><a href=\"https://git-scm.com/doc\" target=\"_blank\">Github Documentation</a></h4>\n\n            <h4><a href=\"https://orga.cat/posts/most-useful-git-commands\" target=\"_blank\">Useful Github Commands</a>\n            </h4>\n\n            <h2>Initial Setup</h2>\n\n            <h3>Initialize a repo</h3>\n\n            <p>Create an empty git repo or reinitialize an existing one</p>\n\n            <code>$ git init</code>\n\n            <h3>Fork a repo</h3>\n\n            <p>Click the \"Fork\" button at the top-right of any repository's GitHub page.</p>\n\n            <h3>Clone a repo</h3>\n\n            <p>Clone the codepainter repo into a new directory called codepainter:</p>\n\n            <code>$ git clone https://github.com/jedhunsaker/codepainter.git codepainter</code>\n\n            <h3>Setup Remotes</h3>\n\n            <p>First, let's see a list of the repositories (remotes) whose branches you track:</p>\n\n            <code>$ git remote -v</code>\n\n            <p>Oh, it looks like we haven't setup upstream. Now is the time:</p>\n\n            <code>$ git remote add upstream https://github.com/username/codepainter.git<br/>\n                $ git fetch upstream</code>git\n\n\n            <h2>Every-day Workflow</h2>\n            <h3>Promote (copy) New Branch to Master</h3>\n            <div>git branch -m master old-master<br/>\n                git branch -m seotweaks master<br/>\n                git push -f origin master<br/>\n                This will remove commits in origin master, please check your origin master before running git push -f\n                origin master.<br/>\n                \"git push origin old-master\" Will copy old-master to new branch\n            </div>\n\n            <h3>Branching</h3>\n\n            <p>When working on a fork, you could be switching between different branches quite commonly. As such, you\n                generally want to stay off the master branch and work on your own feature branches so that master is\n                always\n                clean and you can base new branches off of it.</p>\n\n            <code>$ git checkout -b &lt;new_branch_name&gt;</code>\n\n            <p>If upstream has a special develop branch or something, you can checkout that branch separately, but setup\n                tracking so you can sync it up from time to time. Like the master branch, don't work directly on this\n                one.\n                Try to keep it clean.</p>\n\n            <code>$ git checkout -b &lt;new_branch_name&gt; --track upstream/&lt;remote_branch_to_track&gt;</code>\n\n            <p>Maybe you made some progress on a branch at work, but now you want to continue work at home. In that\n                case,\n                you're dealing with your own fork's branch, so you'll checkout from origin.</p>\n\n            <code>$ git checkout -b &lt;new_branch_name&gt; --track origin/&lt;remote_branch_to_track&gt;</code>\n\n            <p>Use the -B option flag to force it.</p>\n\n            <h3>Switching Branches</h3>\n\n            <p>First, you'll want to know what branches are available in your working directory:</p>\n\n            <code>$ git branch<br/>\n                develop<br/>\n                feature_x<br/>\n                master</code>\n\n            <p>Now, you can easily switch between branches with git checkout:</p>\n\n            <code>$ git checkout master<br/>\n                $ git checkout develop<br/>\n                $ git checkout feature_x<br/>\n                $ git config --global alias.co 'checkout'<br/>\n                $ git co master</code>\n\n            <h3>Status</h3>\n\n            <p>Not sure if you're working on a clean branch? Want to see what files have changed? Git status will show\n                you a\n                report.</p>\n\n            <code>$ git status</code>\n\n            <h3>Staging Changes</h3>\n\n            <p>Now that you've added or modified some files, you need to stage those commits into \"the staging area.\"\n                Think\n                of git commits like an array of airlock hatches on a space ship. On this space ship, you can only open\n                the\n                door to one airlock at a time. When you open the hatch, you can put stuff in or take stuff out at will.\n                Not\n                until you've closed the door have you committed those changes (git commit) and not until you hit the red\n                button do all those hatches open up into space (git push).</p>\n\n            <p>You can stage inidividual files or all files at once.</p>\n\n            <code>$ git add foo.js<br/>\n                $ git add .</code>\n\n            <h3>Unstaging Changes</h3>\n\n            <p>Maybe you accidentally staged some files that you don't want to commit.</p>\n\n            <code>$ git reset HEAD foo.js<br/>\n                $ git reset HEAD .<br/>\n                $ git config --global alias.unstage 'reset HEAD'<br/>\n                $ git unstage .</code>\n\n            <h3>Commits</h3>\n\n            <p>Commit often. You can always squash down your commits before a push.</p>\n\n            <code>$ git commit -m \"Fixed IE issues\"</code>\n\n            <p>Want to automatically stage files that have been modified and deleted, but new files you haven't told git\n                about will be unaffected? Pass the -a or --all option flag:</p>\n\n            <code>$ git commit -am \"Fixed IE issues\"</code>\n\n            <h3>Undoing Commits</h3>\n\n            <p>The following command will undo your most recent commit and put those changes back into staging, so you\n                don't\n                lose any work:</p>\n\n            <code> $ git reset --soft HEAD~1</code>\n\n            <p>The next one will completely delete the commit and throw away any changes. Be absolutely sure this is\n                what\n                you want:</p>\n\n            <code>$ git reset --hard HEAD~1</code>\n\n            <h3>Squashing Commits</h3>\n\n            <p>Maybe you have 4 commits, but you haven't pushed anything yet and you want to put everything into one\n                commit\n                so your boss doesn't have to read a bunch of garbage during code review.</p>\n\n            <code>$ git rebase -i HEAD~4</code>\n\n            <p>An interactive text file is displayed. You'll see the word \"pick\" to the left of each commit. Leave the\n                one\n                at the top alone and replace all the others with \"s\" for squash, save and close the file. This will\n                display\n                another interactive window where you can update your commit messages into one new commit message. I like\n                to\n                use \"f\" instead of \"s\", because I usually work in such a way that I name my first commit appropriately\n                from\n                the get-go. \"f\" just skips the 2nd interactive file and uses the first commit message.</p>\n\n            <h3>Pushing</h3>\n\n            <p>Push a local branch for the first time:</p>\n\n            <code>$ git push --set-upstream origin &lt;branch&gt;<br/>\n                $ git push</code>\n\n            <p>Push a local branch to a different remote branch:</p>\n\n            <code>$ git push origin &lt;local_branch&gt;:&lt;remote_branch&gt;</code>\n\n            <p>Use the -f option flag to force it.</p>\n\n            <h3>Undo Last Push</h3>\n\n            <p>Some would say this is bad practice. Once you push something you shouldn't overwrite those changes.\n                Instead,\n                you're supposed to create a new commit that reverts the changes in the last one. So, technically, you\n                shouldn't do this, but... you can?</p>\n\n            <code>$ git reset --hard HEAD~1 && git push -f origin master</code>\n\n            <h3>Fetching</h3>\n\n            <p>Fetch changes from upstream:</p>\n\n            <code>$ git fetch upstream</code>\n\n            <p>Fetch changes from both origin and upstream in the same shot:</p>\n\n            <code>$ git fetch --multiple origin upstream</code>\n\n            <h3>Merging</h3>\n\n            <p>To be honest, I haven't used this command in quite some time. In my experience, it has created merge\n                bubbles\n                that have overwritten mine or others' code. For a better workflow, refer to rebasing, below.</p>\n\n            <p>Nonetheless, here's how you merge-in changes from origin's feature_x branch:</p>\n\n            <code>$ git fetch origin<br/>\n                $ git merge origin/feature_x</code>\n\n            <h3>Pulling</h3>\n\n            <code>Pulling is just doing a fetch followed by a merge. If you know your branch is clean (e.g., master\n                branch),\n                go ahead and get the latest changes. There will be no merge conflicts as long as your branch is\n                clean.</code>\n\n            <code>$ git pull origin/feature_x</code>\n\n            <h3>Rebasing</h3>\n\n            <p>Rebasing is a way of rewriting history. In place of merge, what this does is stacks your commits on top\n                of\n                commits that are already pushed up. In this case, you want to stack your commits on top of\n                origin/feature_x:</p>\n\n            <code>$ git fetch origin<br/>\n                $ git rebase origin/feature_x</code>\n\n            <p>If you already have a local branch set to track feature_x then just do:</p>\n\n            <code>$ git rebase feature_x</code>\n\n            <p>Would you like to fetch, merge and then stack your changes on top, all in one shot? You can! If you have\n                tracking setup on the current branch, just do:</p>\n\n            <code>$ git pull --rebase</code>\n\n            <p>Another great use of rebasing is just rewriting commit messages. To get an interactive text editor for\n                the\n                most recent commit, do:</p>\n\n            <code>$ git rebase -i HEAD~1</code>\n\n            <p>Now, you can replace \"pick\" with \"r\" and just change the commit message.</p>\n\n            <h3>Manually Set Tracking</h3>\n\n            <p>Perhaps you forgot to setup tracking when you pulled down a remote branch. No worries:</p>\n\n            <code>$ git config branch.&lt;local_branch&gt;.remote origin<br/>\n                $ git config branch.&lt;local_branch&gt;.merge refs/heads/&lt;remote_branch&gt;</code>\n\n            <h3>Deleting Branches</h3>\n\n            <p>Delete a local branch:</p>\n\n            <code>$ git branch -d &lt;local_branch&gt;</code>\n\n            <p>Use the -D option flag to force it.</p>\n\n            <p>Delete a remote branch on origin:</p>\n\n            <code>$ git push origin : &lt;remote_branch&gt;</code>\n\n            <h3>Stashing</h3>\n\n            <p>Sometimes you need to stash your changes so you can be on a clean branch or maybe because you want to go\n                back\n                and try something before you make a commit with these changes. Here's how you do a stash:</p>\n\n            <code>$ git stash</code>\n\n            <p>Now, if you want to unstash those changes and bring them back into your working directory:</p>\n\n            <code>$ git stash pop</code>\n\n            <p>Or maybe you want to unstash your changes without popping them off the stack. In other words, you might\n                want\n                to apply these stashed changes multiple times. To do this:</p>\n\n            <code>$ git stash apply</code>\n\n            <p>For a list of stashes:</p>\n\n            <code>$ git stash list</code>\n\n            <h3>Working with Tags</h3>\n\n            <p>Create tags using Github.com dashboard</p>\n\n            <ul>\n                <li>On GitHub, navigate to the main page of the repository.</li>\n                <li>Under your repository name, click Releases.</li>\n                <li>At the top of the Releases page, click Tags.</li>\n                <li>Type a version number for your release. Versions are based on Git tags. We recommend naming tags\n                    that fit within semantic versioning.\n                </li>\n                <li>Select a branch that contains the project you want to release. Usually, you'll want to release\n                    against your master branch, unless you're releasing beta software.\n                </li>\n                <li>Type a title and description that describes your release.</li>\n                <li>If you'd like to include binary files along with your release, such as compiled programs, drag and\n                    drop or select files manually in the binaries box.\n                </li>\n                <li>If the release is unstable, select This is a pre-release to notify users that it's not ready for\n                    production.\n                </li>\n                <li>If you're ready to publicize your release, click Publish release. Otherwise, click Save draft to\n                    work on it later.\n                </li>\n\n            </ul>\n\n\n            <p>You can also push just one tag with your current branch commit:</p>\n\n            <code>git push origin : v1.0.0</code>\n\n            <code>git tag 2.0.0\n                <br/>git push origin &lt;tag_name&gt;</code>\n            Alternately:\n            <code>git push --tags</code>\n\n\n            <p>You can list the tags with: <code>$ git tag -l </code></p>\n\n            <code>You can list the tags with $ git tag -l and then checkout a specific tag:<br/>\n\n                $ git checkout tags/&lt;tag_name&gt;<br/>\n\n                Even better, checkout and create a branch (otherwise you will be on a branch named after the revision\n                number of tag):<br/>\n\n                $ git checkout tags/&lt;tag_name&gt; -b &lt;branch_name&gt;<br/>\n            </code>\n        </div>\n\n        <br/>\n\n    </div>\n\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_github-cheat-sheet_github-cheat-sheet_module_ts.js.map