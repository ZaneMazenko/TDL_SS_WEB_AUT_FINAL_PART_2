
import BasePage from "./basePage";

class PracticeFormPage extends BasePage {
 
    static get userNameField(){
        return cy.get('#firstName')
    }

    static get lastNameField(){
        return cy.get('#lastName')
    }

    static get emailField(){
        return cy.get('#userEmail')
    }

    static get genderRadio(){
        return cy.get('#genterWrapper')
    }

    static get phoneField(){
        return cy.get('#userNumber')
    }

    static get doBField(){
        return cy.get('#dateOfBirthInput')
    }

    static get monthSelectorCalendar(){
        return cy.get('.react-datepicker__month-select')
    }

    static get yearSelectorCalendar(){
        return cy.get('.react-datepicker__year-select')
    }

    static get dateSelectorCalendar(){
        return cy.get('.react-datepicker__day').not('.react-datepicker__day--outside-month')
    }

    static get subjectsField(){
        return cy.get('#subjectsContainer')
    }

    static get hobbiesCheckboxes(){
        return cy.get('#hobbiesWrapper')
    }

    static get currAddressField(){
        return cy.get('#currentAddress')
    }

    static get stateSelector(){
        return cy.get('#state')
    }

    static get stateDropDown(){
        return cy.get('#stateCity-wrapper')
    }

    static get stateFirstChoice(){
        return cy.get('#react-select-3-option-0')
    }
    
    static get cityFirstChoice(){
        return cy.get('#react-select-4-option-0')
    }

    static get citySelector(){
        return cy.get('#city')
    }

    static get submitBtn(){
        return cy.get('#submit')
    }

    static get confirmationTable(){
        return cy.get('.table-responsive')
    }

    static get studentName(){
        return cy.get('tbody > :nth-child(1)')
    }

    static get emailCheck(){
        return cy.get('tbody > :nth-child(2)')
    }

    static get genderCheck(){
        return cy.get('tbody > :nth-child(3)')
    }

    static get phoneCheck(){
        return cy.get('tbody > :nth-child(4)')
    }

    static get doBCheck(){
        return cy.get('tbody > :nth-child(5)')
    }

    static get subjectsCheck(){
        return cy.get('tbody > :nth-child(6)')
    }

    static get hobbiesCheck(){
        return cy.get('tbody > :nth-child(7)')
    }

    static get addressCheck(){
        return cy.get('tbody > :nth-child(9)')
    }

    static get stateCityCheck(){
        return cy.get('tbody > :nth-child(10)')
    }
}

export default PracticeFormPage