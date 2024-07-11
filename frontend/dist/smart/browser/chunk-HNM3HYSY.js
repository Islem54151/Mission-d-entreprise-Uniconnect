import{a as be,b as _t,c as ht}from"./chunk-BUGJA7TN.js";import{a as vt,b as St}from"./chunk-JPO2T5NP.js";import{a as Se,b as ft,c as Et,d as Mt,e as yt,f as wt,g as Tt,h as kt,i as At,j as It,k as Ft,l as Nt,m as Vt}from"./chunk-G3UYJ7KD.js";import{e as De,f as Ee,g as Ct,h as Me,i as xt,j as ye,k as gt}from"./chunk-PYXIOY77.js";import{a as Ie}from"./chunk-ICNULXYG.js";import{a as pt,b as ut}from"./chunk-5OAQTMCX.js";import{a as we,b as Te,c as ke,d as Ae}from"./chunk-IAMQOFEL.js";import{a as bt,b as Dt}from"./chunk-V7NX5QN6.js";import{a as ne,c as ae}from"./chunk-VWQMDOKW.js";import{b as K,c as W,f as ee,i as te,j as ie,l as re,m as oe}from"./chunk-COAJZBPY.js";import{a as nt}from"./chunk-YMQHLQQG.js";import{a as xe}from"./chunk-CVRMQBZG.js";import{a as J}from"./chunk-REFGTADN.js";import{a as rt}from"./chunk-GDWYHEG7.js";import{a as ot,b as lt,c as mt,d as ge,e as dt}from"./chunk-IS433M2G.js";import{a as R,b as P}from"./chunk-JM2T3LY5.js";import"./chunk-EAYECSYI.js";import{a as at,f as Re}from"./chunk-7AZQAPTC.js";import"./chunk-FJKUMJHP.js";import"./chunk-RGNDWIHZ.js";import"./chunk-5K3JXRT5.js";import{$a as Z,B as O,C as $,H as We,Ia as et,J as H,M as L,N as j,Qa as tt,R as G,Ra as it,S as U,T as z,U as Q,Ya as X,c as Ce,cb as q,fb as ct,gb as ve,hb as k,ib as st,x as Y,z as x}from"./chunk-DOQV7324.js";import{$c as Ze,A as He,Bb as p,D as Le,Db as s,Eb as ue,Gb as qe,Ib as S,Jb as fe,Kb as _e,Lb as he,Mb as t,Nb as e,Ob as f,Pb as y,Qb as w,Sb as b,Vb as u,Xb as v,_c as Xe,ac as me,ad as Je,bc as de,ca as je,cc as ce,dc as B,ec as i,fc as N,g as pe,gb as m,gc as V,ha as Ge,hb as g,jd as Ke,lc as ze,ma as M,mc as T,nc as Qe,t as $e,wb as Ue,xa as _,ya as h}from"./chunk-OEOMCRY6.js";import"./chunk-UGUGGRN7.js";var A=(()=>{let o=class o extends xe{constructor(l){super(),this.httpClient=l,this.API_URL="http://localhost:8089/departement-rest-controller",this.isTblLoading=!0,this.dataChange=new pe([])}get data(){return this.dataChange.value}getDialogData(){return this.dialogData}getAllDepartments(){this.subs.sink=this.httpClient.get(`${this.API_URL}/departement`).subscribe({next:l=>{this.isTblLoading=!1,this.dataChange.next(l)},error:l=>{this.isTblLoading=!1,console.error(l.name+" "+l.message)}})}addDepartment(l){return this.httpClient.post(`${this.API_URL}/departement`,l)}updateDepartment(l){this.httpClient.put(`${this.API_URL}/departement`,l).subscribe({next:a=>{this.dialogData=a},error:a=>{console.error("Error updating department: "+a.message)}})}deleteDepartment(l){this.httpClient.delete(`${this.API_URL}/departement/${l}`).subscribe({next:()=>{console.log(`Department with ID ${l} deleted.`)},error:a=>{console.error("Error deleting department: "+a.message)}})}};o.\u0275fac=function(a){return new(a||o)(Ge(Ce))},o.\u0275prov=je({token:o,factory:o.\u0275fac,providedIn:"root"});let n=o;return n})();var Ne=class{constructor(o){this.id=o.id||this.getRandomID(),this.dName=o.dName??"",this.hod=o.hod??"",this.phone=o.phone??"",this.email=o.email??"",this.sYear=o.sYear?new Date(o.sYear):new Date,this.sCapacity=o.sCapacity??""}getRandomID(){let o=()=>(1+Math.random())*65536|0;return o()+o()}formattedStartDate(){return this.sYear?this.sYear.toDateString():""}};function Gt(n,o){n&1&&(t(0,"mat-error"),i(1," Select Any Department "),e())}function Ut(n,o){n&1&&(t(0,"mat-error"),i(1," HOD name required "),e())}function zt(n,o){n&1&&(t(0,"mat-error"),i(1," Phone is required "),e())}function Qt(n,o){n&1&&(t(0,"mat-error"),i(1," Please enter a valid email address "),e())}function Xt(n,o){n&1&&(t(0,"mat-error"),i(1," Department Start Year is required "),e())}function Zt(n,o){n&1&&(t(0,"mat-error"),i(1," Student Capacity is required "),e())}var Ye=(()=>{let o=class o{constructor(l,a,r,c){if(this.dialogRef=l,this.data=a,this.departmentService=r,this.fb=c,this.formControl=new We("",[x.required]),this.action=a.action,this.action==="edit")this.dialogTitle=a.department.dName,this.department=a.department;else{this.dialogTitle="New Department";let C={};this.department=new Ne(C)}this.departmentForm=this.createContactForm()}getErrorMessage(){return this.formControl.hasError("required")?"Required field":this.formControl.hasError("email")?"Not a valid email":""}createContactForm(){return this.fb.group({id:[this.department.id],dName:[this.department.dName,[x.required]],hod:[this.department.hod,[x.required]],phone:[this.department.phone,[x.required]],email:[this.department.email,[x.required,x.email,x.minLength(5)]],sYear:[this.department.sYear,[x.required]],sCapacity:[this.department.sCapacity,[x.required]]})}submit(){}onNoClick(){this.dialogRef.close()}confirmAdd(){this.departmentService.addDepartment(this.departmentForm.getRawValue())}};o.\u0275fac=function(a){return new(a||o)(g(De),g(Ee),g(A),g(U))},o.\u0275cmp=M({type:o,selectors:[["app-form-dialog",5,"a"]],standalone:!0,features:[ze([{provide:et,useValue:"en-GB"}]),T],decls:81,vars:17,consts:[[1,"addContainer"],[1,"modalHeader"],[1,"editRowModal"],[1,"modalHeader","clearfix"],[1,"modal-about"],["mat-icon-button","","aria-label","Close dialog",1,"modal-close-button",3,"click"],["mat-dialog-content",""],[1,"register-form","m-4",3,"ngSubmit","formGroup"],[1,"row"],[1,"col-xl-6","col-lg-6","col-md-12","col-sm-12","mb-2"],["appearance","outline",1,"example-full-width","mb-3"],["formControlName","dName","required",""],[3,"value"],["matInput","","formControlName","hod","required",""],["matSuffix","",1,"material-icons-outlined","color-icon","p-3"],["matInput","","formControlName","phone"],["matInput","","formControlName","email","required",""],["matInput","","formControlName","sYear","required",""],["matInput","","formControlName","sCapacity","required",""],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","mb-2"],[1,"example-button-row"],["mat-flat-button","","color","accent",3,"click","disabled","mat-dialog-close"],["mat-flat-button","","color","warn","tabindex","-1",3,"click"]],template:function(a,r){if(a&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),i(5),e()()(),t(6,"button",5),u("click",function(){return r.dialogRef.close()}),t(7,"mat-icon"),i(8,"close"),e()()(),t(9,"div",6)(10,"form",7),u("ngSubmit",function(){return r.submit}),t(11,"div",8)(12,"div",9)(13,"mat-form-field",10)(14,"mat-label"),i(15,"Department"),e(),t(16,"mat-select",11)(17,"mat-option",12),i(18," Mechanical "),e(),t(19,"mat-option",12),i(20," Science "),e(),t(21,"mat-option",12),i(22," Mathematics "),e(),t(23,"mat-option",12),i(24," Computer "),e(),t(25,"mat-option",12),i(26," Civil "),e(),t(27,"mat-option",12),i(28," Automobile "),e(),t(29,"mat-option",12),i(30," Management "),e()(),p(31,Gt,2,0,"mat-error"),e()(),t(32,"div",9)(33,"mat-form-field",10)(34,"mat-label"),i(35,"Head Of Department"),e(),f(36,"input",13),t(37,"mat-icon",14),i(38,"person"),e(),p(39,Ut,2,0,"mat-error"),e()()(),t(40,"div",8)(41,"div",9)(42,"mat-form-field",10)(43,"mat-label"),i(44,"Phone"),e(),f(45,"input",15),t(46,"mat-icon",14),i(47,"phone"),e(),p(48,zt,2,0,"mat-error"),e()(),t(49,"div",9)(50,"mat-form-field",10)(51,"mat-label"),i(52,"Email"),e(),f(53,"input",16),t(54,"mat-icon",14),i(55,"email"),e(),p(56,Qt,2,0,"mat-error"),e()()(),t(57,"div",8)(58,"div",9)(59,"mat-form-field",10)(60,"mat-label"),i(61,"Department Start Year"),e(),f(62,"input",17),t(63,"mat-icon",14),i(64,"query_builder"),e(),p(65,Xt,2,0,"mat-error"),e()(),t(66,"div",9)(67,"mat-form-field",10)(68,"mat-label"),i(69,"Student Capacity"),e(),f(70,"input",18),t(71,"mat-icon",14),i(72,"group"),e(),p(73,Zt,2,0,"mat-error"),e()()(),t(74,"div",8)(75,"div",19)(76,"div",20)(77,"button",21),u("click",function(){return r.confirmAdd()}),i(78,"Save"),e(),t(79,"button",22),u("click",function(){return r.onNoClick()}),i(80,"Cancel"),e()()()()()()()),a&2){let c,C,E,D,I,F;m(5),V(" ",r.dialogTitle," "),m(5),s("formGroup",r.departmentForm),m(7),s("value","mechanical"),m(2),s("value","science"),m(2),s("value","mathematics"),m(2),s("value","computer"),m(2),s("value","civil"),m(2),s("value","automobile"),m(2),s("value","management"),m(2),S((c=r.departmentForm.get("dName"))!=null&&c.hasError("required")?31:-1),m(8),S((C=r.departmentForm.get("hod"))!=null&&C.hasError("required")?39:-1),m(9),S((E=r.departmentForm.get("phone"))!=null&&E.hasError("required")?48:-1),m(8),S((D=r.departmentForm.get("email"))!=null&&D.hasError("required")||(D=r.departmentForm.get("email"))!=null&&D.touched?56:-1),m(9),S((I=r.departmentForm.get("sYear"))!=null&&I.hasError("required")?65:-1),m(8),S((F=r.departmentForm.get("sCapacity"))!=null&&F.hasError("required")?73:-1),m(4),s("disabled",!r.departmentForm.valid)("mat-dialog-close",1)}},dependencies:[k,q,ve,P,R,ye,z,H,Y,O,$,G,Q,L,j,ie,te,K,W,ee,ae,ne,X,Z,oe,re,Me]});let n=o;return n})();var Ot=(()=>{let o=class o{constructor(l,a,r){this.dialogRef=l,this.data=a,this.departmentService=r}onNoClick(){this.dialogRef.close()}confirmDelete(){this.departmentService.deleteDepartment(this.data.id)}};o.\u0275fac=function(a){return new(a||o)(g(De),g(Ee),g(A))},o.\u0275cmp=M({type:o,selectors:[["app-delete",5,"a"]],standalone:!0,features:[T],decls:25,vars:4,consts:[[1,"container"],["mat-dialog-title",""],["mat-dialog-content",""],[1,"clearfix"],[1,"font-weight-bold"],["mat-dialog-actions","",1,"mb-1"],["mat-flat-button","","color","warn",3,"click","mat-dialog-close"],["mat-flat-button","","tabindex","-1",3,"click"]],template:function(a,r){a&1&&(t(0,"div",0)(1,"h3",1),i(2,"Are you sure?"),e(),t(3,"div",2)(4,"ul",3)(5,"li")(6,"p")(7,"span",4),i(8," Department Name: "),e(),i(9),e()(),t(10,"li")(11,"p")(12,"span",4),i(13," HOD: "),e(),i(14),e()(),t(15,"li")(16,"p")(17,"span",4),i(18,"Mobile: "),e(),i(19),e()()()(),t(20,"div",5)(21,"button",6),u("click",function(){return r.confirmDelete()}),i(22," Delete "),e(),t(23,"button",7),u("click",function(){return r.onNoClick()}),i(24,"Cancel"),e()()()),a&2&&(m(9),N(r.data.dName),m(5),N(r.data.hod),m(5),V("",r.data.phone," "),m(2),s("mat-dialog-close",1))},dependencies:[xt,ye,gt,k,q,Me]});let n=o;return n})();var Kt=["filter"],Wt=()=>[5,10,25,100];function ei(n,o){if(n&1&&(t(0,"div",6),f(1,"app-breadcrumb",55),e()),n&2){let d=o.$implicit;m(),s("title",d.title)("items",d.items)("active_item",d.active)}}function ti(n,o){if(n&1){let d=b();t(0,"mat-header-cell",56)(1,"mat-checkbox",57),u("change",function(a){_(d);let r=v();return h(a?r.masterToggle():null)}),e()()}if(n&2){let d=v();s("ngClass","tbl-col-width-per-7"),m(),s("checked",d.selection.hasValue()&&d.isAllSelected())("indeterminate",d.selection.hasValue()&&!d.isAllSelected())("ngClass","tbl-checkbox")}}function ii(n,o){if(n&1){let d=b();t(0,"mat-cell",56)(1,"mat-checkbox",58),u("click",function(a){return _(d),h(a.stopPropagation())})("change",function(a){let r=_(d).$implicit,c=v();return h(a?c.selection.toggle(r):null)}),e()()}if(n&2){let d=o.$implicit,l=v();s("ngClass","tbl-col-width-per-7"),m(),s("checked",l.selection.isSelected(d))("ngClass","tbl-checkbox")}}function ni(n,o){n&1&&(t(0,"mat-header-cell",59),i(1,"Id"),e())}function ai(n,o){if(n&1&&(t(0,"mat-cell"),i(1),e()),n&2){let d=o.$implicit;m(),N(d.id)}}function ri(n,o){n&1&&(t(0,"mat-header-cell",59),i(1,"Department Name"),e())}function oi(n,o){if(n&1){let d=b();t(0,"mat-cell",60),u("contextmenu",function(a){let r=_(d).$implicit,c=v();return h(c.onContextMenu(a,r))}),t(1,"span",61),i(2,"Department Name:"),e(),i(3),e()}if(n&2){let d=o.$implicit;m(3),V(" ",d.dName,"")}}function li(n,o){n&1&&(t(0,"mat-header-cell",59),i(1,"Head Of Department "),e())}function mi(n,o){if(n&1){let d=b();t(0,"mat-cell",60),u("contextmenu",function(a){let r=_(d).$implicit,c=v();return h(c.onContextMenu(a,r))}),t(1,"span",61),i(2,"Head Of Department:"),e(),i(3),e()}if(n&2){let d=o.$implicit;m(3),N(d.hod)}}function di(n,o){n&1&&(t(0,"mat-header-cell",59),i(1,"Phone"),e())}function ci(n,o){if(n&1){let d=b();t(0,"mat-cell",60),u("contextmenu",function(a){let r=_(d).$implicit,c=v();return h(c.onContextMenu(a,r))}),t(1,"span",61),i(2,"Phone:"),e(),i(3),e()}if(n&2){let d=o.$implicit;m(3),V(" ",d.phone," ")}}function si(n,o){n&1&&(t(0,"mat-header-cell",59),i(1,"Email"),e())}function pi(n,o){if(n&1){let d=b();t(0,"mat-cell",60),u("contextmenu",function(a){let r=_(d).$implicit,c=v();return h(c.onContextMenu(a,r))}),t(1,"span",61),i(2,"Email:"),e(),i(3),e()}if(n&2){let d=o.$implicit;m(3),N(d.email)}}function ui(n,o){n&1&&(t(0,"mat-header-cell",59),i(1,"Start Year"),e())}function fi(n,o){if(n&1){let d=b();t(0,"mat-cell",60),u("contextmenu",function(a){let r=_(d).$implicit,c=v();return h(c.onContextMenu(a,r))}),t(1,"span",61),i(2,"Start Year:"),e(),i(3),e()}if(n&2){let d=o.$implicit;m(3),V("",d.sYear," ")}}function _i(n,o){n&1&&(t(0,"mat-header-cell",59),i(1,"Students Capacity "),e())}function hi(n,o){if(n&1){let d=b();t(0,"mat-cell",60),u("contextmenu",function(a){let r=_(d).$implicit,c=v();return h(c.onContextMenu(a,r))}),t(1,"span",61),i(2,"Students Capacity:"),e(),i(3),e()}if(n&2){let d=o.$implicit;m(3),N(d.sCapacity)}}function Ci(n,o){n&1&&(t(0,"mat-header-cell",62),i(1,"Actions"),e())}function xi(n,o){if(n&1){let d=b();t(0,"mat-cell",62)(1,"button",63),u("click",function(a){return _(d),h(a.stopPropagation())})("click",function(){let a=_(d).$implicit,r=v();return h(r.editCall(a))}),f(2,"app-feather-icons",64),e(),t(3,"button",63),u("click",function(a){return _(d),h(a.stopPropagation())})("click",function(){let a=_(d).$implicit,r=v();return h(r.deleteItem(a))}),f(4,"app-feather-icons",64),e()()}n&2&&(m(2),qe("tbl-fav-edit"),s("icon","edit"),m(2),qe("tbl-fav-delete"),s("icon","trash-2"))}function gi(n,o){n&1&&f(0,"mat-header-row")}function vi(n,o){if(n&1){let d=b();t(0,"mat-row",65),u("click",function(){let a=_(d).$implicit,r=v();return h(r.editCall(a))}),e()}n&2&&ue("cursor","pointer")}function Si(n,o){n&1&&(t(0,"div",49),f(1,"mat-progress-spinner",66),e()),n&2&&(m(),s("diameter",40))}function bi(n,o){if(n&1){let d=b();t(0,"button",67),u("click",function(){_(d);let a=v();return h(a.addNew())}),t(1,"mat-icon"),i(2,"add_box"),e(),t(3,"span"),i(4,"Add Record"),e()(),t(5,"button",67),u("click",function(){let a=_(d).item,r=v();return h(r.editCall(a))}),t(6,"mat-icon"),i(7,"create"),e(),t(8,"span"),i(9,"Edit Record"),e()(),t(10,"button",67),u("click",function(){let a=_(d).item,r=v();return h(r.deleteItem(a))}),t(11,"mat-icon"),i(12,"delete"),e(),t(13,"span"),i(14,"Delete Record"),e()(),t(15,"button",67),u("click",function(){_(d);let a=v();return h(a.refresh())}),t(16,"mat-icon"),i(17,"refresh"),e(),t(18,"span"),i(19,"Refresh Record"),e()(),t(20,"button",68)(21,"mat-icon"),i(22,"no_encryption"),e(),t(23,"span"),i(24,"Disable"),e()(),t(25,"button",69)(26,"mat-icon"),i(27,"list_alt"),e(),t(28,"span"),i(29," Nested Menu"),e()()}if(n&2){v();let d=B(77);m(25),s("matMenuTriggerFor",d)}}function Di(n,o){if(n&1&&(t(0,"div",70),i(1," No results "),e()),n&2){let d=v();ue("display",d.dataSource.renderedData.length===0?"":"none")}}var $t=(()=>{let o=class o extends xe{constructor(l,a,r,c){super(),this.httpClient=l,this.dialog=a,this.departmentService=r,this.snackBar=c,this.displayedColumns=["select","dName","hod","phone","email","sYear","sCapacity","actions"],this.selection=new Re(!0,[]),this.breadscrums=[{title:"All Departments",items:["Department"],active:"All"}],this.contextMenuPosition={x:"0px",y:"0px"}}ngOnInit(){this.loadData()}refresh(){this.loadData()}addNew(){let l=localStorage.getItem("isRtl")==="true"?"rtl":"ltr",a=this.dialog.open(Ye,{data:{department:this.department,action:"add"},direction:l});this.subs.sink=a.afterClosed().subscribe(r=>{r===1&&this.exampleDatabase&&(this.exampleDatabase.dataChange.value.unshift(this.departmentService.getDialogData()),this.refreshTable(),this.showNotification("snackbar-success","Add Record Successfully...!!!","bottom","center"))})}editCall(l){this.id=l.id;let a=localStorage.getItem("isRtl")==="true"?"rtl":"ltr",r=this.dialog.open(Ye,{data:{department:l,action:"edit"},direction:a});this.subs.sink=r.afterClosed().subscribe(c=>{if(c===1&&this.exampleDatabase){let C=this.exampleDatabase.dataChange.value.findIndex(E=>E.id===this.id);C!=null&&(this.exampleDatabase.dataChange.value[C]=this.departmentService.getDialogData(),this.refreshTable(),this.showNotification("black","Edit Record Successfully...!!!","bottom","center"))}})}deleteItem(l){this.id=l.id;let a=localStorage.getItem("isRtl")==="true"?"rtl":"ltr",r=this.dialog.open(Ot,{data:l,direction:a});this.subs.sink=r.afterClosed().subscribe(c=>{if(c===1&&this.exampleDatabase){let C=this.exampleDatabase.dataChange.value.findIndex(E=>E.id===this.id);C!=null&&(this.exampleDatabase.dataChange.value.splice(C,1),this.refreshTable(),this.showNotification("snackbar-danger","Delete Record Successfully...!!!","bottom","center"))}})}refreshTable(){this.paginator._changePageSize(this.paginator.pageSize)}isAllSelected(){let l=this.selection.selected.length,a=this.dataSource.renderedData.length;return l===a}masterToggle(){this.isAllSelected()?this.selection.clear():this.dataSource.renderedData.forEach(l=>this.selection.select(l))}removeSelectedRows(){let l=this.selection.selected.length;this.selection.selected.forEach(a=>{let r=this.dataSource.renderedData.findIndex(c=>c===a);this.exampleDatabase&&(this.exampleDatabase.dataChange.value.splice(r,1),this.refreshTable()),this.selection=new Re(!0,[])}),this.showNotification("snackbar-danger",l+" Record Delete Successfully...!!!","bottom","center")}loadData(){this.exampleDatabase=new A(this.httpClient),this.dataSource=new Oe(this.exampleDatabase,this.paginator,this.sort),this.subs.sink=He(this.filter.nativeElement,"keyup").subscribe(()=>{this.dataSource&&(this.dataSource.filter=this.filter.nativeElement.value)})}exportExcel(){let l=this.dataSource.filteredData.map(a=>({"Department Name":a.dName||"N/A","Head Of Department":a.hod||"N/A",Phone:a.phone||"N/A",Email:a.email||"N/A","Start Year":a.sYear?a.sYear.toString():"N/A","Students Capacity":a.sCapacity||"N/A"}));nt.exportToExcel(l,"excel")}showNotification(l,a,r,c){this.snackBar.open(a,"",{duration:2e3,verticalPosition:r,horizontalPosition:c,panelClass:l})}onContextMenu(l,a){l.preventDefault(),this.contextMenuPosition.x=l.clientX+"px",this.contextMenuPosition.y=l.clientY+"px",this.contextMenu&&this.contextMenu.menu&&(this.contextMenu.menuData={item:a},this.contextMenu.menu.focusFirstItem("mouse"),this.contextMenu.openMenu())}};o.\u0275fac=function(a){return new(a||o)(g(Ce),g(Ct),g(A),g(Ie))},o.\u0275cmp=M({type:o,selectors:[["app-all-departments"]],viewQuery:function(a,r){if(a&1&&(me(Se,7),me(be,7),me(Kt,7),me(ge,5)),a&2){let c;de(c=ce())&&(r.paginator=c.first),de(c=ce())&&(r.sort=c.first),de(c=ce())&&(r.filter=c.first),de(c=ce())&&(r.contextMenu=c.first)}},standalone:!0,features:[Ue,T],decls:96,vars:16,consts:[["filter",""],["contextMenu","matMenu"],["nestedmenu","matMenu"],["paginator",""],[1,"content"],[1,"content-block"],[1,"block-header"],[1,"row"],[1,"col-lg-12","col-md-12","col-sm-12","col-xs-12"],[1,"card"],[1,"materialTableHeader"],[1,"left"],[1,"header-buttons-left","ms-0"],[1,"tbl-title"],[1,"tbl-search-box"],["for","search-input"],[1,"material-icons","search-icon"],["placeholder","Search","type","text","aria-label","Search box",1,"browser-default","search-field"],[1,"right"],[1,"tbl-export-btn"],[1,"tbl-header-btn"],["matTooltip","ADD",1,"m-l-10"],["mat-mini-fab","","color","primary",3,"click"],["matTooltip","REFRESH",1,"m-l-10"],["matTooltip","DELETE",1,"m-l-10",3,"hidden"],["mat-mini-fab","","color","warn",3,"click"],["matTooltip","XLSX",1,"export-button","m-l-10"],["src","assets/images/icons/xlsx.png","alt","",3,"click"],[1,"body","overflow-auto"],[1,"responsive_table"],["mat-table","","matSort","",1,"mat-cell","advance-table",3,"dataSource"],["matColumnDef","select"],[3,"ngClass",4,"matHeaderCellDef"],[3,"ngClass",4,"matCellDef"],["matColumnDef","id"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","dName"],[3,"contextmenu",4,"matCellDef"],["matColumnDef","hod"],["matColumnDef","phone"],["matColumnDef","email"],["matColumnDef","sYear"],["matColumnDef","sCapacity"],["matColumnDef","actions"],["class","pr-0",4,"matHeaderCellDef"],["class","pr-0",4,"matCellDef"],[4,"matHeaderRowDef"],["matRipple","",3,"cursor","click",4,"matRowDef","matRowDefColumns"],[1,"tbl-spinner"],[2,"visibility","hidden","position","fixed",3,"matMenuTriggerFor"],["matMenuContent",""],["mat-menu-item",""],[1,"no-results",3,"display"],[3,"length","pageIndex","pageSize","pageSizeOptions"],[3,"title","items","active_item"],[3,"ngClass"],[3,"change","checked","indeterminate","ngClass"],[3,"click","change","checked","ngClass"],["mat-sort-header",""],[3,"contextmenu"],[1,"mobile-label"],[1,"pr-0"],["mat-icon-button","",1,"tbl-action-btn",3,"click"],[3,"icon"],["matRipple","",3,"click"],["color","primary","mode","indeterminate",3,"diameter"],["mat-menu-item","",3,"click"],["mat-menu-item","","disabled",""],["mat-menu-item","",3,"matMenuTriggerFor"],[1,"no-results"]],template:function(a,r){if(a&1){let c=b();t(0,"section",4)(1,"div",5),_e(2,ei,2,3,"div",6,fe),t(4,"div",7)(5,"div",8)(6,"div",9)(7,"div",10)(8,"div",11)(9,"ul",12)(10,"li",13)(11,"h2"),i(12,"Departments"),e()(),t(13,"li",14)(14,"label",15)(15,"i",16),i(16,"search"),e()(),f(17,"input",17,0),e()()(),t(19,"div",18)(20,"ul",19)(21,"li",20)(22,"div",21)(23,"button",22),u("click",function(){return _(c),h(r.addNew())}),t(24,"mat-icon"),i(25,"add"),e()()()(),t(26,"li",20)(27,"div",23)(28,"button",22),u("click",function(){return _(c),h(r.refresh())}),t(29,"mat-icon"),i(30,"refresh"),e()()()(),t(31,"li",20)(32,"div",24)(33,"button",25),u("click",function(){return _(c),h(r.removeSelectedRows())}),t(34,"mat-icon"),i(35,"delete "),e()()()(),t(36,"li")(37,"div",26)(38,"img",27),u("click",function(){return _(c),h(r.exportExcel())}),e()()()()()(),t(39,"div",28)(40,"div",29)(41,"table",30),y(42,31),p(43,ti,2,4,"mat-header-cell",32)(44,ii,2,3,"mat-cell",33),w(),y(45,34),p(46,ni,2,0,"mat-header-cell",35)(47,ai,2,1,"mat-cell",36),w(),y(48,37),p(49,ri,2,0,"mat-header-cell",35)(50,oi,4,1,"mat-cell",38),w(),y(51,39),p(52,li,2,0,"mat-header-cell",35)(53,mi,4,1,"mat-cell",38),w(),y(54,40),p(55,di,2,0,"mat-header-cell",35)(56,ci,4,1,"mat-cell",38),w(),y(57,41),p(58,si,2,0,"mat-header-cell",35)(59,pi,4,1,"mat-cell",38),w(),y(60,42),p(61,ui,2,0,"mat-header-cell",35)(62,fi,4,1,"mat-cell",38),w(),y(63,43),p(64,_i,2,0,"mat-header-cell",35)(65,hi,4,1,"mat-cell",38),w(),y(66,44),p(67,Ci,2,0,"mat-header-cell",45)(68,xi,5,6,"mat-cell",46),w(),p(69,gi,1,0,"mat-header-row",47)(70,vi,1,2,"mat-row",48),e(),p(71,Si,2,1,"div",49),f(72,"div",50),t(73,"mat-menu",null,1),p(75,bi,30,1,"ng-template",51),e(),t(76,"mat-menu",null,2)(78,"button",52)(79,"mat-icon"),i(80,"mail_outline"),e(),t(81,"span"),i(82,"Item 1"),e()(),t(83,"button",52)(84,"mat-icon"),i(85,"call"),e(),t(86,"span"),i(87,"Item 2"),e()(),t(88,"button",52)(89,"mat-icon"),i(90,"chat"),e(),t(91,"span"),i(92,"Item 3"),e()()(),p(93,Di,2,2,"div",53),f(94,"mat-paginator",54,3),e()()()()()()()}if(a&2){let c=B(74);m(2),he(r.breadscrums),m(30),s("hidden",!r.selection.hasValue()),m(9),s("dataSource",r.dataSource),m(28),s("matHeaderRowDef",r.displayedColumns),m(),s("matRowDefColumns",r.displayedColumns),m(),S(r.exampleDatabase!=null&&r.exampleDatabase.isTblLoading?71:-1),m(),ue("left",r.contextMenuPosition.x)("top",r.contextMenuPosition.y),s("matMenuTriggerFor",c),m(21),S(r.exampleDatabase!=null&&r.exampleDatabase.isTblLoading?-1:93),m(),s("length",r.dataSource.filteredData.length)("pageIndex",0)("pageSize",10)("pageSizeOptions",Qe(15,Wt))}},dependencies:[J,ut,pt,k,ve,ct,P,R,Vt,Et,yt,At,wt,Mt,It,Tt,kt,Ft,Nt,ht,be,_t,Xe,Dt,bt,rt,it,tt,St,vt,dt,mt,ot,lt,ge,ft,Se]});let n=o;return n})(),Oe=class extends at{get filter(){return this.filterChange.value}set filter(o){this.filterChange.next(o)}constructor(o,d,l){super(),this.exampleDatabase=o,this.paginator=d,this.sort=l,this.filterChange=new pe(""),this.filteredData=[],this.renderedData=[],this.filterChange.subscribe(()=>this.paginator.pageIndex=0)}connect(){let o=[this.exampleDatabase.dataChange,this.sort.sortChange,this.filterChange,this.paginator.page];return this.exampleDatabase.getAllDepartments(),Le(...o).pipe($e(()=>{this.filteredData=this.exampleDatabase.data.slice().filter(a=>((a.dName||"")+(a.hod||"")+(a.phone?a.phone.toString():"")+(a.email||"")+(a.sYear?a.sYear.toString():"")+(a.sCapacity>=0?a.sCapacity.toString():"")).toLowerCase().includes(this.filter.toLowerCase()));let d=this.sortData(this.filteredData.slice()),l=this.paginator.pageIndex*this.paginator.pageSize;return this.renderedData=d.splice(l,this.paginator.pageSize),this.renderedData}))}disconnect(){}sortData(o){return!this.sort.active||this.sort.direction===""?o:o.sort((d,l)=>{let a="",r="";switch(this.sort.active){case"id":[a,r]=[d.id,l.id];break;case"dName":[a,r]=[d.dName,l.dName];break;case"hod":[a,r]=[d.hod,l.hod];break;case"phone":[a,r]=[d.phone,l.phone];break;case"email":[a,r]=[d.email,l.email];break}let c=isNaN(+a)?a:+a,C=isNaN(+r)?r:+r;return(c<C?-1:1)*(this.sort.direction==="asc"?1:-1)})}};function Mi(n,o){if(n&1&&f(0,"app-breadcrumb",27),n&2){let d=o.$implicit;s("title",d.title)("items",d.items)("active_item",d.active)}}function yi(n,o){n&1&&(t(0,"mat-error"),i(1," Select Any Department "),e())}function wi(n,o){n&1&&(t(0,"mat-error"),i(1," HOD name required "),e())}function Ti(n,o){n&1&&(t(0,"mat-error"),i(1," Phone is required "),e())}function ki(n,o){n&1&&(t(0,"mat-error"),i(1," Please enter a valid email address "),e())}function Ai(n,o){n&1&&(t(0,"mat-error"),i(1," Please select date "),e())}function Ii(n,o){n&1&&(t(0,"mat-error"),i(1," Student Capacity is required "),e())}var Ht=(()=>{let o=class o{constructor(l,a,r){this.fb=l,this.departmentService=a,this.snackBar=r,this.breadscrums=[{title:"Add Department",items:["Department"],active:"Add"}],this.departmentForm=this.fb.group({dName:["",[x.required]],hod:["",[x.required]],phone:["",[x.required]],email:["",[x.required,x.email,x.minLength(5)]],sYear:[""],sCapacity:["",[x.required]]})}onSubmit(){this.departmentService.addDepartment(this.departmentForm.value).subscribe({next:l=>{console.log("Department added successfully",l),this.showNotification("snackbar-success","Add Record Successfully...!!!","bottom","center"),this.departmentForm.reset()},error:l=>{console.error("Error adding department:",l)}})}showNotification(l,a,r,c){this.snackBar.open(a,"",{duration:2e3,verticalPosition:r,horizontalPosition:c,panelClass:l})}};o.\u0275fac=function(a){return new(a||o)(g(U),g(A),g(Ie))},o.\u0275cmp=M({type:o,selectors:[["app-add-department"]],standalone:!0,features:[T],decls:82,vars:18,consts:[["picker",""],[1,"content"],[1,"content-block"],[1,"block-header"],[3,"title","items","active_item",4,"ngFor","ngForOf"],[1,"row","clearfix"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12"],[1,"card"],[1,"header"],[1,"body"],[1,"m-4",3,"ngSubmit","formGroup"],[1,"row"],[1,"col-xl-6","col-lg-6","col-md-6","col-sm-12","mb-2"],["appearance","outline",1,"example-full-width","mb-3"],["formControlName","dName","required",""],[3,"value"],[4,"ngIf"],["matInput","","formControlName","hod","required",""],["matSuffix","",1,"material-icons-outlined","color-icon","p-3"],["matInput","","formControlName","phone"],["matInput","","formControlName","email","required",""],["matInput","","formControlName","sYear","required","",3,"matDatepicker"],["matSuffix","",3,"for"],["matInput","","formControlName","sCapacity","required",""],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","mb-2"],["type","submit","mat-flat-button","","color","accent",1,"btn-space",3,"disabled"],["type","button","mat-flat-button","","color","warn"],[3,"title","items","active_item"]],template:function(a,r){if(a&1){let c=b();t(0,"section",1)(1,"div",2)(2,"div",3),p(3,Mi,1,3,"app-breadcrumb",4),e(),t(4,"div",5)(5,"div",6)(6,"div",7)(7,"div",8)(8,"h2"),i(9,"Add Department"),e()(),t(10,"div",9)(11,"form",10),u("ngSubmit",function(){return _(c),h(r.onSubmit())}),t(12,"div",11)(13,"div",12)(14,"mat-form-field",13)(15,"mat-label"),i(16,"Department"),e(),t(17,"mat-select",14)(18,"mat-option",15),i(19,"Mechanical"),e(),t(20,"mat-option",15),i(21,"Science"),e(),t(22,"mat-option",15),i(23,"Mathematics"),e(),t(24,"mat-option",15),i(25,"Computer"),e(),t(26,"mat-option",15),i(27,"Civil"),e(),t(28,"mat-option",15),i(29,"Automobile"),e(),t(30,"mat-option",15),i(31,"Management"),e()(),p(32,yi,2,0,"mat-error",16),e()(),t(33,"div",12)(34,"mat-form-field",13)(35,"mat-label"),i(36,"Head Of Department"),e(),f(37,"input",17),t(38,"mat-icon",18),i(39,"person"),e(),p(40,wi,2,0,"mat-error",16),e()()(),t(41,"div",11)(42,"div",12)(43,"mat-form-field",13)(44,"mat-label"),i(45,"Phone"),e(),f(46,"input",19),t(47,"mat-icon",18),i(48,"phone"),e(),p(49,Ti,2,0,"mat-error",16),e()(),t(50,"div",12)(51,"mat-form-field",13)(52,"mat-label"),i(53,"Email"),e(),f(54,"input",20),t(55,"mat-icon",18),i(56,"email"),e(),p(57,ki,2,0,"mat-error",16),e()()(),t(58,"div",11)(59,"div",12)(60,"mat-form-field",13)(61,"mat-label"),i(62,"Department Start Date"),e(),f(63,"input",21)(64,"mat-datepicker-toggle",22)(65,"mat-datepicker",null,0),p(67,Ai,2,0,"mat-error",16),e()(),t(68,"div",12)(69,"mat-form-field",13)(70,"mat-label"),i(71,"Student Capacity"),e(),f(72,"input",23),t(73,"mat-icon",18),i(74,"group"),e(),p(75,Ii,2,0,"mat-error",16),e()()(),t(76,"div",11)(77,"div",24)(78,"button",25),i(79,"Submit"),e(),t(80,"button",26),i(81,"Cancel"),e()()()()()()()()()()}if(a&2){let c,C,E,D,I,F,le=B(66);m(3),s("ngForOf",r.breadscrums),m(8),s("formGroup",r.departmentForm),m(7),s("value","mechanical"),m(2),s("value","science"),m(2),s("value","mathematics"),m(2),s("value","computer"),m(2),s("value","civil"),m(2),s("value","automobile"),m(2),s("value","management"),m(2),s("ngIf",(c=r.departmentForm.get("dName"))==null?null:c.hasError("required")),m(8),s("ngIf",(C=r.departmentForm.get("hod"))==null?null:C.hasError("required")),m(9),s("ngIf",(E=r.departmentForm.get("phone"))==null?null:E.hasError("required")),m(8),s("ngIf",((D=r.departmentForm.get("email"))==null?null:D.hasError("required"))||((D=r.departmentForm.get("email"))==null?null:D.hasError("email"))),m(6),s("matDatepicker",le),m(),s("for",le),m(3),s("ngIf",(I=r.departmentForm.get("sYear"))==null?null:I.hasError("required")),m(8),s("ngIf",(F=r.departmentForm.get("sCapacity"))==null?null:F.hasError("required")),m(3),s("disabled",!r.departmentForm.valid)}},dependencies:[J,z,H,Y,O,$,G,Q,L,j,ie,te,K,W,ee,ae,ne,X,Z,oe,re,P,R,Ae,we,Te,ke,k,q,Ke,Ze,Je]});let n=o;return n})();function Fi(n,o){if(n&1&&(t(0,"div",3),f(1,"app-breadcrumb",25),e()),n&2){let d=o.$implicit;m(),s("title",d.title)("items",d.items)("active_item",d.active)}}function Ni(n,o){n&1&&(t(0,"mat-error"),i(1," Select Any Department "),e())}function Vi(n,o){n&1&&(t(0,"mat-error"),i(1," HOD name required "),e())}function qi(n,o){n&1&&(t(0,"mat-error"),i(1," Phone is required "),e())}function Ri(n,o){n&1&&(t(0,"mat-error"),i(1," Please enter a valid email address "),e())}function Pi(n,o){n&1&&(t(0,"mat-error"),i(1," Please select date "),e())}function Bi(n,o){n&1&&(t(0,"mat-error"),i(1," Student Capacity is required "),e())}var Lt=(()=>{let o=class o{constructor(l){this.fb=l,this.formdata={dName:"mathematics",hod:"Sanjay Shah",phone:"123456789",email:"test@example.com",sYear:"1987-02-17T14:22:18Z",sCapacity:"230",details:"Learn fashion designing course with proper guideline."},this.breadscrums=[{title:"Edit Department",items:["Department"],active:"Edit"}],this.departmentForm=this.createContactForm()}onSubmit(){console.log("Form Value",this.departmentForm.value)}createContactForm(){return this.fb.group({dName:[this.formdata.dName,[x.required]],hod:[this.formdata.hod],phone:[this.formdata.phone,[x.required]],email:[this.formdata.email,[x.required,x.email,x.minLength(5)]],sYear:[this.formdata.sYear],sCapacity:[this.formdata.sCapacity],details:[this.formdata.details]})}};o.\u0275fac=function(a){return new(a||o)(g(U))},o.\u0275cmp=M({type:o,selectors:[["app-edit-department"]],standalone:!0,features:[T],decls:91,vars:17,consts:[["picker",""],[1,"content"],[1,"content-block"],[1,"block-header"],[1,"row","clearfix"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12"],[1,"card"],[1,"header"],[1,"body"],[1,"m-4",3,"ngSubmit","formGroup"],[1,"row"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","mb-2"],["appearance","outline",1,"example-full-width","mb-3"],["formControlName","dName","required",""],[3,"value"],["matInput","","formControlName","hod","required",""],["matSuffix","",1,"material-icons-outlined","color-icon","p-3"],["matInput","","formControlName","phone"],["matInput","","formControlName","email","required",""],["matInput","","formControlName","sYear","required","",3,"matDatepicker"],["matSuffix","",3,"for"],["matInput","","formControlName","sCapacity","required",""],["matInput","","formControlName","details"],["mat-flat-button","","color","accent",1,"btn-space",3,"disabled"],["type","button","mat-flat-button","","color","warn"],[3,"title","items","active_item"]],template:function(a,r){if(a&1){let c=b();t(0,"section",1)(1,"div",2),_e(2,Fi,2,3,"div",3,fe),t(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"h2"),i(9,"Edit Department"),e()(),t(10,"div",8)(11,"form",9),u("ngSubmit",function(){return _(c),h(r.onSubmit())}),t(12,"div",10)(13,"div",11)(14,"mat-form-field",12)(15,"mat-label"),i(16,"Department"),e(),t(17,"mat-select",13)(18,"mat-option",14),i(19," Mechanical "),e(),t(20,"mat-option",14),i(21," Science "),e(),t(22,"mat-option",14),i(23," Mathematics "),e(),t(24,"mat-option",14),i(25," Computer "),e(),t(26,"mat-option",14),i(27," Civil "),e(),t(28,"mat-option",14),i(29," Automobile "),e(),t(30,"mat-option",14),i(31," Management "),e()(),p(32,Ni,2,0,"mat-error"),e()()(),t(33,"div",10)(34,"div",11)(35,"mat-form-field",12)(36,"mat-label"),i(37,"Head Of Department"),e(),f(38,"input",15),t(39,"mat-icon",16),i(40,"person"),e(),p(41,Vi,2,0,"mat-error"),e()()(),t(42,"div",10)(43,"div",11)(44,"mat-form-field",12)(45,"mat-label"),i(46,"Phone"),e(),f(47,"input",17),t(48,"mat-icon",16),i(49,"phone"),e(),p(50,qi,2,0,"mat-error"),e()()(),t(51,"div",10)(52,"div",11)(53,"mat-form-field",12)(54,"mat-label"),i(55,"Email"),e(),f(56,"input",18),t(57,"mat-icon",16),i(58,"email"),e(),p(59,Ri,2,0,"mat-error"),e()()(),t(60,"div",10)(61,"div",11)(62,"mat-form-field",12)(63,"mat-label"),i(64,"Department Start Date"),e(),f(65,"input",19)(66,"mat-datepicker-toggle",20)(67,"mat-datepicker",null,0),p(69,Pi,2,0,"mat-error"),e()()(),t(70,"div",10)(71,"div",11)(72,"mat-form-field",12)(73,"mat-label"),i(74,"Student Capacity"),e(),f(75,"input",21),t(76,"mat-icon",16),i(77,"group"),e(),p(78,Bi,2,0,"mat-error"),e()()(),t(79,"div",10)(80,"div",11)(81,"mat-form-field",12)(82,"mat-label"),i(83,"Details"),e(),f(84,"textarea",22),e()()(),t(85,"div",10)(86,"div",11)(87,"button",23),i(88,"Submit"),e(),t(89,"button",24),i(90,"Cancel"),e()()()()()()()()()()}if(a&2){let c,C,E,D,I,F,le=B(68);m(2),he(r.breadscrums),m(9),s("formGroup",r.departmentForm),m(7),s("value","mechanical"),m(2),s("value","science"),m(2),s("value","mathematics"),m(2),s("value","computer"),m(2),s("value","civil"),m(2),s("value","automobile"),m(2),s("value","management"),m(2),S((c=r.departmentForm.get("dName"))!=null&&c.hasError("required")?32:-1),m(9),S((C=r.departmentForm.get("hod"))!=null&&C.hasError("required")?41:-1),m(9),S((E=r.departmentForm.get("phone"))!=null&&E.hasError("required")?50:-1),m(9),S((D=r.departmentForm.get("email"))!=null&&D.hasError("required")||(D=r.departmentForm.get("email"))!=null&&D.touched?59:-1),m(6),s("matDatepicker",le),m(),s("for",le),m(3),S((I=r.departmentForm.get("sYear"))!=null&&I.hasError("required")?69:-1),m(9),S((F=r.departmentForm.get("sCapacity"))!=null&&F.hasError("required")?78:-1),m(9),s("disabled",!r.departmentForm.valid)}},dependencies:[J,z,H,Y,O,$,G,Q,L,j,ie,te,K,W,ee,ae,ne,X,Z,oe,re,P,R,Ae,we,Te,ke,k,q]});let n=o;return n})();var aa=[{path:"all-departments",component:$t},{path:"add-department",component:Ht},{path:"edit-department",component:Lt},{path:"**",component:st}];export{aa as DEPARTMENT_ROUTE};