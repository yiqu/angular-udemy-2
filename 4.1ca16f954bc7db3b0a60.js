(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Yj9t:function(t,e,n){"use strict";n.r(e),n.d(e,"AuthModule",function(){return F});var r=n("ofXK"),s=n("3Pt+"),o=n("UmVK"),c=n("tyNb"),i=n("fXoL");let a=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["app-auth"]],decls:1,vars:0,template:function(t,e){1&t&&i.Nb(0,"router-outlet")},directives:[c.c],styles:[""]}),t})(),u=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["app-login"]],decls:1,vars:0,template:function(t,e){1&t&&i.zc(0,"Login\n")},styles:[""]}),t})();function l(t,e,n=[],r=[]){return new s.e({value:t,disabled:e},n,r)}class p{isErrorState(t,e){return!!(t&&t.invalid&&(t.dirty||t.touched||e&&e.submitted))}}function f(t){const e=t.value;if(!(e&&""!==(""+e).trim()&&(e+"").trim().length>3))return{fieldTooShort:!0}}var g=n("XiUz"),b=n("bTqV"),d=n("kmnG"),m=n("qFsG");function h(t,e){1&t&&(i.Sb(0,"mat-error"),i.zc(1," User name is "),i.Sb(2,"strong"),i.zc(3,"required"),i.Rb(),i.Rb())}function w(t,e){1&t&&(i.Sb(0,"mat-error"),i.zc(1," Password is "),i.Sb(2,"strong"),i.zc(3,"required"),i.Rb(),i.Rb())}function x(t,e){if(1&t&&(i.Sb(0,"mat-hint",11),i.zc(1),i.Rb()),2&t){const t=i.ec(2);i.Bb(1),i.Bc(" ",t.passwordCtrlValue?t.passwordCtrlValue.split("").length:0,"/4 ")}}function y(t,e){if(1&t&&(i.Sb(0,"section",6),i.Sb(1,"form",7),i.Sb(2,"mat-form-field",8),i.Nb(3,"input",9),i.yc(4,h,4,0,"mat-error",10),i.Sb(5,"mat-hint",11),i.zc(6,"Required"),i.Rb(),i.Rb(),i.Sb(7,"mat-form-field",8),i.Nb(8,"input",12),i.yc(9,w,4,0,"mat-error",10),i.Sb(10,"mat-hint",13),i.zc(11,"Password has to be least 4 characters long"),i.Rb(),i.yc(12,x,2,1,"mat-hint",14),i.Rb(),i.Rb(),i.Rb()),2&t){const t=i.ec();i.Bb(1),i.jc("formGroup",t.signupFg),i.Bb(2),i.jc("errorStateMatcher",t.matcher),i.Bb(1),i.jc("ngIf",t.signupFg.get("name").hasError("required")),i.Bb(4),i.jc("errorStateMatcher",t.matcher),i.Bb(1),i.jc("ngIf",t.signupFg.get("password").hasError("required")),i.Bb(3),i.jc("ngIf",t.signupFg.get("password").hasError("fieldTooShort"))}}const S=[{path:"",component:a,children:[{path:"",redirectTo:"signin",pathMatch:"full"},{path:"signin",component:u},{path:"signup",component:(()=>{class t{constructor(t){this.fb=t,this.matcher=new p,this.signupFg=this.fb.group({name:l(null,!1,[s.p.required]),password:l(null,!1,[s.p.required,f])})}get passwordCtrlValue(){var t;return null===(t=this.signupFg.get("password"))||void 0===t?void 0:t.value}ngOnInit(){this.signupFg.get("password").valueChanges.subscribe(t=>{let e=this.signupFg.get("password").value?this.signupFg.get("password").value.split(""):[];e&&e.length>0&&" "===e[e.length-1]&&this.signupFg.get("password").setValue(e.slice(0,-1).join(""),{emitEvent:!1})})}onRegister(){}onReset(){this.signupFg.reset()}}return t.\u0275fac=function(e){return new(e||t)(i.Mb(s.d))},t.\u0275cmp=i.Gb({type:t,selectors:[["app-auth-signup"]],decls:9,vars:1,consts:[["fxLayout","column","fxLayoutAlign","center center"],["fxFlexOffset","15px",1,"title"],["fxFlexOffset","15px","class","signup-form",4,"ngIf"],["fxFlexOffset","35px","fxLayout","row","fxLayoutAlign","space-between",1,"actions"],["mat-flat-button","","color","primary",3,"click"],["mat-flat-button","","color","accent",3,"click"],["fxFlexOffset","15px",1,"signup-form"],["fxLayout","column","fxLayoutAlign","start",3,"formGroup"],["fxFlexOffset","15px",1,""],["type","text","matInput","","placeholder","User name","formControlName","name",3,"errorStateMatcher"],[4,"ngIf"],["align","end"],["type","password","matInput","","placeholder","Password","formControlName","password",3,"errorStateMatcher"],["align","start"],["align","end",4,"ngIf"]],template:function(t,e){1&t&&(i.Sb(0,"div",0),i.Sb(1,"div",1),i.zc(2," Sign up for a new account. "),i.Rb(),i.yc(3,y,13,6,"section",2),i.Sb(4,"section",3),i.Sb(5,"button",4),i.ac("click",function(){return e.onRegister()}),i.zc(6,"Register"),i.Rb(),i.Sb(7,"button",5),i.ac("click",function(){return e.onReset()}),i.zc(8,"Reset"),i.Rb(),i.Rb(),i.Rb()),2&t&&(i.Bb(3),i.jc("ngIf",e.signupFg))},directives:[g.c,g.b,g.a,r.k,b.a,s.q,s.m,s.g,d.c,m.b,s.c,s.l,s.f,d.f,d.b],styles:[".signup-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:300px}.actions[_ngcontent-%COMP%]{width:300px}.title[_ngcontent-%COMP%]{font-size:20px}"]}),t})()}]}];let R=(()=>{class t{}return t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({factory:function(e){return new(e||t)},imports:[[c.b.forChild(S)],c.b]}),t})();var v=n("YUcS");let F=(()=>{class t{}return t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({factory:function(e){return new(e||t)},providers:[],imports:[[R,o.a,s.h,s.o,r.c,v.a]]}),t})()}}]);