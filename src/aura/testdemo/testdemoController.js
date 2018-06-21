({
	openModel: function(component, event, helper) {
      // for Display Model,set the "isOpen" attribute to "true"
      component.set("v.isOpen", true);
   },
 
   cancelModel: function(component, event, helper) {
      // for Hide/Close Model,set the "isOpen" attribute to "Fasle"  
      component.set("v.tips", "You clicked the 'Cancel' button");
       component.set("v.isOpen", false);

   },
    
    closeModel: function(component, event, helper) {
      // for Hide/Close Model,set the "isOpen" attribute to "Fasle"  
        component.set("v.tips", " ");
        component.set("v.isOpen", false);

   },
 
   confirmModel: function(component, event, helper) {
      // and set set the "isOpen" attribute to "False for close the model Box.
       component.set("v.tips", "You clicked the 'Confirm' button");
       component.set("v.isOpen", false);
   },
})