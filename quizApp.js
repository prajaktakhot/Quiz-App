import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected={} // for storing answers
    correctAnswers = 0 //to show the number of correct answers
    isSubmitted = false // use to show the result
    myQuestions=[
        {
            id:"Question1",
            question:"What’s the annotation used to invoke an Apex method imperatively from LWC?",
            answers:{
                a:"@future",
                b:"@isTest",
                c:"@AuraEnabled"
            },
            correctAnswer:"c"
        },
        {
            id:"Question2",
            question:"Which of the file is invald in LWC component folder?",
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },
        {
            id:"Question3",
            question:"What’s the annotation used to wire an Apex method to a property or function inLWC?",
            answers:{
                a:"@future",
                b:"@AuraEnabled(cacheable=true)",
                c:"@AuraEnabled"
            },
            correctAnswer:"b"
        },
        {
            id:"Question4",
            question:"What are the maximum no of components that we can include in an LWC",
            answers:{
                a:"3",
                b:"9",
                c:"No Limit"
            },
            correctAnswer:"c"
        },
        {
            id:"Question5",
            question:"Salesforce Scratch Org is?",
            answers:{
                a:"Disposable Org",
                b:"Developer Org",
                c:"Sandbox Org"
            },
            correctAnswer:"a"
        },
        {
            id:"Question6",
            question:"How you write Expression in LWC HTML?",
            answers:{
                a:"if:true=\"{propertyName}\"",
                b:"if:true={propertyName}",
                c:"if:true=\"{!propertyName}\""
            },
            correctAnswer:"b"
        },
        {
            id:"Question7",
            question:" Which is true?",
            answers:{
                a:"LWC can coexist wrapped around Aura",
                b:"Aura can coexist wrapped around LWC",
                c:"Both ways possible"
            },
            correctAnswer:"a"
        },
        {
            id:"Question8",
            question:"Number of components Aura Bundle has?",
            answers:{
                a:"7",
                b:"3",
                c:"8"
            },
            correctAnswer:"c"
        },
        {
            id:"Question9",
            question:"Mandatory minimum number of components in LWC",
            answers:{
                a:"3",
                b:"2",
                c:"4"
            },
            correctAnswer:"a"
        },
        {
            id:"Question10",
            question:"LWC Framework Not includes",
            answers:{
                a:"Lightning Data Service",
                b:"Templates",
                c:"Base Lightning Components"
            },
            correctAnswer:"b"
        }
    ]

    //used for disabling the sumbmit button
    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }

    // for applying dynamic styling to our result
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers?
            'slds-text-color_success':'slds-text-color_error'}`
    }
    // changeHandler get's called on every click on the options
    changeHandler(event){
        const {name, value} = event.target 
        //conts name=event.target.name
        //conts value=event.target.value
        this.selected={...this.selected, [name]:value}
    }
    //form submit handler
    submitHandler(event){
        event.preventDefault()  //to privent the refresh of the form
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer)
        this.correctAnswers = correct.length
        this.isSubmitted = true
    }
    //form reset handler
    resetHandler(){
        this.selected ={}
        this.correctAnswers=0
        this.isSubmitted = false
    }
}
