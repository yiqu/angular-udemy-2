(self.webpackChunkangular_udemy_again=self.webpackChunkangular_udemy_again||[]).push([[557],{3557:(t,e,r)=>{"use strict";r.r(e),r.d(e,{AuthModule:()=>tt});var n=r(1116),a=r(1041),o=r(6514),i=r(766),s=r(3835),l=r(3530),u=r(9996),g=r(5366),c=r(3873);let p=(()=>{class t{constructor(t,e){this.as=t,this.router=e}canActivate(t,e){return this.as.currentUser$.pipe((0,s.h)(t=>null!==t),(0,l.P)(),(0,u.U)(t=>!t||this.router.createUrlTree(["/"])))}}return t.\u0275fac=function(e){return new(e||t)(g.LFG(c.e),g.LFG(i.F0))},t.\u0275prov=g.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),d=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-auth"]],decls:2,vars:0,consts:[[1,"container-fluid","my-5"]],template:function(t,e){1&t&&(g.TgZ(0,"div",0),g._UZ(1,"router-outlet"),g.qZA())},directives:[i.lC],styles:[""]}),t})();var m=r(8639),f=r(2935),h=r(5965),Z=r(3070),x=r(9550),v=r(4369),A=r(3817);function q(t,e){1&t&&(g.TgZ(0,"mat-error"),g._uU(1," Please enter a valid email address "),g.qZA())}function y(t,e){1&t&&(g.TgZ(0,"mat-error"),g._uU(1," Email is "),g.TgZ(2,"strong"),g._uU(3,"required"),g.qZA(),g.qZA())}function T(t,e){1&t&&(g.TgZ(0,"div"),g._UZ(1,"app-shared-loading-spinner",7),g.qZA()),2&t&&(g.xp6(1),g.Q6J("diamter",25))}let w=(()=>{class t{constructor(t,e,r){this.dialogRef=t,this.data=e,this.as=r,this.emailFc=m.j2(this.data.email,!1,[a.kI.required,a.kI.email])}ngOnInit(){}onSubmit(){this.data.email&&this.as.sendUserLoginReset(this.data.email)}}return t.\u0275fac=function(e){return new(e||t)(g.Y36(f.so),g.Y36(f.WI),g.Y36(c.e))},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-auth-reset-dialog"]],decls:21,vars:9,consts:[["mat-dialog-title",""],["mat-dialog-content","","fxLayout","column","fxLayoutAlign","center start","fxLayoutGap","20px"],[1,"full-w"],["type","email","matInput","","placeholder","Ex. pat@example.com",3,"formControl"],[4,"ngIf"],["mat-dialog-actions",""],["mat-flat-button","","color","primary",1,"mr-2",3,"disabled","click"],[3,"diamter"]],template:function(t,e){1&t&&(g.TgZ(0,"div"),g.TgZ(1,"h1",0),g._uU(2," Reset Password "),g.qZA(),g._UZ(3,"hr"),g.TgZ(4,"div",1),g.TgZ(5,"div"),g._uU(6," Enter your email address, a recovery email will be sent to you. "),g.qZA(),g.TgZ(7,"div",2),g.TgZ(8,"form",2),g.TgZ(9,"mat-form-field",2),g.TgZ(10,"mat-label"),g._uU(11,"Email"),g.qZA(),g._UZ(12,"input",3),g.YNc(13,q,2,0,"mat-error",4),g.YNc(14,y,4,0,"mat-error",4),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(15,"div",5),g.TgZ(16,"button",6),g.NdJ("click",function(){return e.onSubmit()}),g.ALo(17,"async"),g._uU(18,"Send"),g.qZA(),g.YNc(19,T,2,1,"div",4),g.ALo(20,"async"),g.qZA(),g.qZA()),2&t&&(g.xp6(12),g.Q6J("formControl",e.emailFc),g.xp6(1),g.Q6J("ngIf",e.emailFc.hasError("email")&&!e.emailFc.hasError("required")),g.xp6(1),g.Q6J("ngIf",e.emailFc.hasError("required")),g.xp6(2),g.Q6J("disabled",g.lcZ(17,5,e.as.userResetLoginLoading$)),g.xp6(3),g.Q6J("ngIf",g.lcZ(20,7,e.as.userResetLoginLoading$)))},directives:[f.uh,f.xY,h.xw,h.Wh,h.SQ,a._Y,a.JL,a.F,Z.KE,Z.hX,x.Nt,a.Fj,a.JJ,a.oH,n.O5,f.H8,v.lW,Z.TO,A.r],pipes:[n.Ov],styles:[""]}),t})();var _=r(611),b=r(1293);const U=function(){return["/","auth","signup"]};function F(t,e){if(1&t&&(g.ynx(0),g.TgZ(1,"div",12),g._uU(2),g.TgZ(3,"div",13),g.TgZ(4,"a",14),g._uU(5,"I don't have an account."),g.qZA(),g.qZA(),g.qZA(),g.BQk()),2&t){const t=e.ngIf;g.xp6(1),g.Tol("alert "+(t.error?"alert-danger":"alert-success")),g.xp6(1),g.hij(" ",t.error?t.errorMsg:"Sign in using your Health Manager account."," "),g.xp6(2),g.Q6J("routerLink",g.DdM(4,U))}}let L=(()=>{class t{constructor(t,e,r,n,a){this.fb=t,this.router=e,this.route=r,this.as=n,this.dialog=a,this.loginFg=this.fb.group({name:m.j2("test2@test.com",!1),password:m.j2("123456",!1)})}ngOnInit(){}onSignin(){if(this.loginFg.value){const t=this.loginFg.value.name,e=this.loginFg.value.password;t&&e&&this.as.onSignin(t,e)}}onForgot(){var t;this.dialog.open(w,{width:"450px",minHeight:"400px",data:{email:null===(t=this.loginFg.value)||void 0===t?void 0:t.name},hasBackdrop:!0}).afterClosed().pipe((0,_.q)(1)).subscribe(t=>{console.log("The dialog was closed")})}ngOnDestroy(){this.as.resetAuthErrorState()}}return t.\u0275fac=function(e){return new(e||t)(g.Y36(a.qu),g.Y36(i.F0),g.Y36(i.gz),g.Y36(c.e),g.Y36(f.uw))},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-login"]],decls:23,vars:4,consts:[["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","20px"],["fxLayout","row","ngClass.xs","full-w"],[4,"ngIf"],["ngClass.xs","full-w",3,"formGroup"],["fxLayout","row"],["appearance","outline","fxFlex.gt-xs","500px"],["type","text","matInput","","placeholder","Login name","formControlName","name"],["type","password","matInput","","placeholder","Password","formControlName","password"],["ngClass.xs","full-w","ngClass.gt-sm","action-btns"],["fxLayout","row","fxLayoutAlign","space-between center"],["mat-flat-button","","color","accent",3,"click"],["mat-flat-button","","color","primary",3,"click"],["role","alert","fxFlex.gt-xs","500px","fxFlex.xs","100%"],[1,"mt-1","register"],[3,"routerLink"]],template:function(t,e){1&t&&(g.TgZ(0,"div",0),g.TgZ(1,"div",1),g.YNc(2,F,6,5,"ng-container",2),g.ALo(3,"async"),g.qZA(),g.TgZ(4,"form",3),g.TgZ(5,"section",4),g.TgZ(6,"mat-form-field",5),g.TgZ(7,"mat-label"),g._uU(8,"Login name"),g.qZA(),g._UZ(9,"input",6),g.qZA(),g.qZA(),g.TgZ(10,"section",4),g.TgZ(11,"mat-form-field",5),g.TgZ(12,"mat-label"),g._uU(13,"Password"),g.qZA(),g._UZ(14,"input",7),g.qZA(),g.qZA(),g.qZA(),g.TgZ(15,"section",8),g.TgZ(16,"div",9),g.TgZ(17,"div"),g.TgZ(18,"button",10),g.NdJ("click",function(){return e.onForgot()}),g._uU(19,"Forgot password?"),g.qZA(),g.qZA(),g.TgZ(20,"div"),g.TgZ(21,"button",11),g.NdJ("click",function(){return e.onSignin()}),g._uU(22,"Login"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA()),2&t&&(g.xp6(2),g.Q6J("ngIf",g.lcZ(3,2,e.as.authError$)),g.xp6(2),g.Q6J("formGroup",e.loginFg))},directives:[h.xw,h.Wh,h.SQ,b.oO,n.O5,a._Y,a.JL,a.sg,Z.KE,h.yH,Z.hX,x.Nt,a.Fj,a.JJ,a.u,v.lW,i.yS],pipes:[n.Ov],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.alert[_ngcontent-%COMP%]   .register[_ngcontent-%COMP%]{font-size:12px;font-weight:700}.action-btns[_ngcontent-%COMP%]{width:31rem}"]}),t})();class C{isErrorState(t,e){return!!(t&&t.invalid&&(t.dirty||t.touched||e&&e.submitted))}}class J{isErrorState(t,e){return!(!t||!t.invalid)}}var I=r(9609);function Y(t){const e=t.value;if(!(e&&""!==(""+e).trim()&&(e+"").trim().length>3))return{fieldTooShort:!0}}function O(t){if(!t.value)return{required:!0};const e=t.value,r=I().subtract(18,"years");return e.valueOf()>r.valueOf()?{invalidBirthday:!0}:void 0}function k(t){if(!t.value)return{valueIsNotTrue:!0}}var Q=r(5959),S=r(5416),M=r(9024),E=r(994);const N=function(){return["/","auth","signin"]};function j(t,e){if(1&t&&(g.ynx(0),g.TgZ(1,"div",6),g._uU(2),g.TgZ(3,"div",7),g.TgZ(4,"a",8),g._uU(5,"Already have an account?"),g.qZA(),g.qZA(),g.qZA(),g.BQk()),2&t){const t=e.ngIf;g.xp6(1),g.Tol("alert "+(t.regError?"alert-danger":"alert-success")),g.xp6(1),g.hij(" ",t.regError?t.regErrMsg:"Sign up for a new account."," "),g.xp6(2),g.Q6J("routerLink",g.DdM(4,N))}}function P(t,e){1&t&&(g.TgZ(0,"mat-error"),g._uU(1," User name is "),g.TgZ(2,"strong"),g._uU(3,"required"),g.qZA(),g.qZA())}function D(t,e){1&t&&(g.TgZ(0,"mat-error"),g._uU(1," Password is "),g.TgZ(2,"strong"),g._uU(3,"required"),g.qZA(),g.qZA())}function B(t,e){if(1&t&&(g.TgZ(0,"mat-hint",21),g._uU(1),g.qZA()),2&t){const t=g.oxw(2);g.xp6(1),g.hij(" ",t.passwordCtrlValue?t.passwordCtrlValue.split("").length:0,"/4 ")}}function G(t,e){1&t&&(g.TgZ(0,"mat-error"),g._uU(1," Birthday is "),g.TgZ(2,"strong"),g._uU(3,"required"),g.qZA(),g.qZA())}function R(t,e){if(1&t&&(g.TgZ(0,"mat-error"),g._uU(1," You have to be born at least before "),g.TgZ(2,"strong"),g._uU(3),g.qZA(),g.qZA()),2&t){const t=g.oxw(2);g.xp6(3),g.Oqu(t.minBirthday)}}function $(t,e){if(1&t&&(g.TgZ(0,"section",9),g.TgZ(1,"form",10),g.TgZ(2,"mat-form-field",11),g._UZ(3,"input",12),g.YNc(4,P,4,0,"mat-error",2),g.TgZ(5,"mat-hint",13),g._uU(6,"Required"),g.qZA(),g.qZA(),g.TgZ(7,"mat-form-field",11),g._UZ(8,"input",14),g.YNc(9,D,4,0,"mat-error",2),g.TgZ(10,"mat-hint",13),g._uU(11,"Password has to be least 4 characters long"),g.qZA(),g.YNc(12,B,2,1,"mat-hint",15),g.qZA(),g.TgZ(13,"mat-form-field",16),g.TgZ(14,"mat-label"),g._uU(15,"Birthday"),g.qZA(),g._UZ(16,"input",17),g._UZ(17,"mat-datepicker-toggle",18),g._UZ(18,"mat-datepicker",null,19),g.TgZ(20,"mat-hint",13),g._uU(21,"You have to be at least 18 years old"),g.qZA(),g.YNc(22,G,4,0,"mat-error",2),g.YNc(23,R,4,1,"mat-error",2),g.qZA(),g.TgZ(24,"mat-checkbox",20),g._uU(25," Agree to Terms and Conditions "),g.qZA(),g.qZA(),g.qZA()),2&t){const t=g.MAs(19),e=g.oxw();let r,n,a,o,i;g.xp6(1),g.Q6J("formGroup",e.signupFg),g.xp6(2),g.Q6J("errorStateMatcher",e.matcher),g.xp6(1),g.Q6J("ngIf",null==(r=e.signupFg.get("name"))?null:r.hasError("required")),g.xp6(4),g.Q6J("errorStateMatcher",e.matcher),g.xp6(1),g.Q6J("ngIf",null==(n=e.signupFg.get("password"))?null:n.hasError("required")),g.xp6(3),g.Q6J("ngIf",null==(a=e.signupFg.get("password"))?null:a.hasError("fieldTooShort")),g.xp6(4),g.Q6J("matDatepicker",t)("max",e.maxDate)("errorStateMatcher",e.matcher),g.xp6(1),g.Q6J("for",t),g.xp6(5),g.Q6J("ngIf",null==(o=e.signupFg.get("birthday"))?null:o.hasError("required")),g.xp6(1),g.Q6J("ngIf",null==(i=e.signupFg.get("birthday"))?null:i.hasError("invalidBirthday"))}}const z=[{path:"",component:d,canActivate:[p],children:[{path:"",redirectTo:"signin",pathMatch:"full"},{path:"signin",component:L},{path:"signup",component:(()=>{class t{constructor(t,e,r,n){this.fb=t,this.router=e,this.route=r,this.as=n,this.compDest$=new Q.xQ,this.matcher=new C,this.instaMatcher=new J,this.maxDate=I().subtract(1,"day"),this.signupFg=this.fb.group({name:m.j2("test1@aol.com",!1,[a.kI.required]),password:m.j2("123456",!1,[a.kI.required,Y]),birthday:m.j2(null,!1,[O]),agree:m.j2(!1,!1,[k])})}get passwordCtrlValue(){var t;return null===(t=this.signupFg.get("password"))||void 0===t?void 0:t.value}get minBirthday(){return I().subtract(18,"years").format("MM/DD/YYYY")}ngOnInit(){var t;null===(t=this.signupFg.get("password"))||void 0===t||t.valueChanges.pipe((0,S.R)(this.compDest$)).subscribe(t=>{var e,r;let n=(null===(e=this.signupFg.get("password"))||void 0===e?void 0:e.value)?(null===(r=this.signupFg.get("password"))||void 0===r?void 0:r.value).split(""):[];n&&n.length>0&&" "===n[n.length-1]&&this.signupFg.get("password").setValue(n.slice(0,-1).join(""),{emitEvent:!1})}),this.signupFg.valueChanges.pipe((0,S.R)(this.compDest$)).subscribe(t=>{})}onRegister(){if(this.signupFg.valid){const t=this.getAllValues();this.as.onSignUp(t.name,t.password)}}getAllValues(){return Object.assign(Object.assign({},this.signupFg.value),{birthday:this.signupFg.value.birthday?this.signupFg.value.birthday.valueOf():void 0})}onLogin(){this.router.navigate(["../","signin"],{relativeTo:this.route})}ngOnDestroy(){this.as.resetAuthErrorState(),this.compDest$.next(),this.compDest$.complete()}}return t.\u0275fac=function(e){return new(e||t)(g.Y36(a.qu),g.Y36(i.F0),g.Y36(i.gz),g.Y36(c.e))},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-auth-signup"]],decls:8,vars:5,consts:[["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","20px"],["fxLayout","row","ngClass.xs","full-w"],[4,"ngIf"],["ngClass.gt-xs","signup-form","ngClass.xs","full-w",4,"ngIf"],["ngClass.gt-xs","actions","ngClass.xs","full-w","fxLayout","row","fxLayoutAlign","end"],["mat-flat-button","","color","primary",3,"disabled","click"],["role","alert","fxFlex.gt-xs","500px","fxFlex.xs","100%"],[1,"mt-1","login"],[3,"routerLink"],["ngClass.gt-xs","signup-form","ngClass.xs","full-w"],["fxLayout","column","fxLayoutAlign","start","fxLayoutGap","20px",3,"formGroup"],["appearance","outline",1,""],["type","text","matInput","","placeholder","User name","formControlName","name",3,"errorStateMatcher"],["align","start"],["type","password","matInput","","placeholder","Password","formControlName","password",3,"errorStateMatcher"],["align","end",4,"ngIf"],["appearance","outline"],["matInput","","formControlName","birthday",3,"matDatepicker","max","errorStateMatcher"],["matSuffix","",3,"for"],["dp",""],["labelPosition","after","formControlName","agree"],["align","end"]],template:function(t,e){1&t&&(g.TgZ(0,"div",0),g.TgZ(1,"div",1),g.YNc(2,j,6,5,"ng-container",2),g.ALo(3,"async"),g.qZA(),g.YNc(4,$,26,12,"section",3),g.TgZ(5,"section",4),g.TgZ(6,"button",5),g.NdJ("click",function(){return e.onRegister()}),g._uU(7,"Register"),g.qZA(),g.qZA(),g.qZA()),2&t&&(g.xp6(2),g.Q6J("ngIf",g.lcZ(3,3,e.as.authError$)),g.xp6(2),g.Q6J("ngIf",e.signupFg),g.xp6(2),g.Q6J("disabled",e.signupFg.invalid))},directives:[h.xw,h.Wh,h.SQ,b.oO,n.O5,v.lW,h.yH,i.yS,a._Y,a.JL,a.sg,Z.KE,x.Nt,a.Fj,a.JJ,a.u,Z.bx,Z.hX,M.hl,M.nW,Z.R9,M.Mq,E.oG,Z.TO],pipes:[n.Ov],styles:[".actions[_ngcontent-%COMP%], .signup-form[_ngcontent-%COMP%]{width:500px}.title[_ngcontent-%COMP%]{font-size:20px}.alert[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{font-size:12px;font-weight:700}"]}),t})()}]}];let W=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[i.Bz.forChild(z)],i.Bz]}),t})();var X=r(7154),V=r(5031),H=r(7064),K=r(9808);let tt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({providers:[{provide:H._A,useClass:V.t7,deps:[H.Ad]},{provide:H.sG,useValue:V.$o}],imports:[[W,o.p,a.u5,a.UX,n.ez,V.Yd,X.o9,K.q]]}),t})()}}]);