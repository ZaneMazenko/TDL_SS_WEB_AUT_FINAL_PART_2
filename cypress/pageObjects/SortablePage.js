import BasePage from "./BasePage";

class SortablePage extends BasePage{

    static get sortableTable(){
        return cy.get('.vertical-list-container')
    }

    static get firstItem(){
        return cy.get('.vertical-list-container > :nth-child(1)')
    }

    static get secondItem(){
        return cy.get('.vertical-list-container > :nth-child(2)')
    }

    static get thirdItem(){
        return cy.get('.vertical-list-container > :nth-child(3)')
    }

    static get forthItem(){
        return cy.get('.vertical-list-container > :nth-child(4)')
    }

    static get fifthItem(){
        return cy.get('.vertical-list-container > :nth-child(5)')
    }

    static get sixthItem(){
        return cy.get('.vertical-list-container > :nth-child(6)')
    }

    static get listItems(){
        return cy.get('.vertical-list-container.mt-4')
    }
}

export default SortablePage