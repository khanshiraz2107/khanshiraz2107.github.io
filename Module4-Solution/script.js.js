
var names=new Array();
names[0]="Yaakov";
names[1]="Jonathan";
names[2]="Jen";
names[3]="jason";
names[4]="paul";
names[5]="frank";
names[6]="larry";
names[7]="potter";
names[8]="Laura";
names[9]="jimmy";

   for (var i = 0; i < names.length; i++) {
       if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
           console.log("Goodbye " + names[i])
       }
       else{
           console.log("Hello " + names[i])
       }
   }