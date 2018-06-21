/**
* @File Name:	NF_ContactTrigger_Example.trigger
* @Description: An example trigger for testing  
* @Author:   	Recruiter
* @Group:   	Trigger
* @Modification Log	:
*-------------------------------------------------------------------------------------
* Ver       Date        Author      Modification
* 1.0       2017-05-09  Recruiter    Created the file/class
*/
trigger NF_ContactTrigger_Example on Account (
	before insert, 
	before delete, 
	after insert, 
	after update, 
	after delete)
	
	 {
	if(trigger.isbefore && trigger.isinsert) {
		ContactTriggerHanlder_Sample.contactMethod(Trigger.new);
    }	
		
//	NF_TriggerFactory.CreateHandlerAndExecute(Contact.sObjectType);
}