import PracticeFormPage from "../pageObjects/PracticeForm.page";
import SortablePage from "../pageObjects/SortablePage";

describe('Demo QA page testing', () => {
  context('practice from test', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/automation-practice-form')
    });
    //Scenario 1 - ( https://demoqa.com/automation-practice-form ) Forms - Practice forms
    
  

    it.only('Forms - Practice forms', () => {
      // function setMonth(mnth){ <- couldn't get to work
      //   PracticeFormPage.doBField.click();
      //   PracticeFormPage.monthSelectorCalendar.select(mnth);
      //   };
    
      // function setYear(yr){ <- couldn't get to work
      //     PracticeFormPage.doBField.click();
      //     PracticeFormPage.yearSelectorCalendar.select(yr);
      //     };
    
      function setDate(x){ 
            PracticeFormPage.doBField.click();
            PracticeFormPage.dateSelectorCalendar.contains(x).click();
            };
      //     - Fill in information
      //     - First Name
      PracticeFormPage.userNameField.click();
      let name = "The User";
      PracticeFormPage.userNameField.type(name);
      //     - Last Name
      PracticeFormPage.lastNameField.click();
      let lastname = 'My Last Name';
      PracticeFormPage.lastNameField.type(lastname)
      //     - Email
      let email = 'email@email.com';
      PracticeFormPage.emailField.click();
      PracticeFormPage.emailField.type(email);
      //     - Gender
      let gender = 'Female';
      PracticeFormPage.genderRadio.contains(gender).click();
      //     - Mobile number
      let phone = '3490824098';
      PracticeFormPage.phoneField.click();
      PracticeFormPage.phoneField.type(phone);
      //     - Date of birth
      PracticeFormPage.doBField.click();
      //         - Set value - 29/February/1984
      // - Set date of birth value by using the calendar widget
      let year = '1984'
      let month = 'February'
      let date = '29'
      PracticeFormPage.monthSelectorCalendar.select(month);
      PracticeFormPage.yearSelectorCalendar.select(year);
      PracticeFormPage.dateSelectorCalendar.contains(date).click();
      date = '13';
      setDate(date);
      // - Pass the values dynamically, e.g. create methods:
      // - setYear(“1984”) <- couldn't get to work
      // year = '2006'; 
      // setYear(year);
      // - setMonth(“February”) <- couldn't get to work
      // month = 'May'
      // setMonth(month);
      //     - setDate(“29”)”

      //     - Subjects
      //         - Maths
      PracticeFormPage.subjectsField.click();
      PracticeFormPage.subjectsField.type('Maths{enter}');
      //     - Hobbies
      PracticeFormPage.hobbiesCheckboxes.contains('Reading').click();
      //     - Current address
      PracticeFormPage.currAddressField.click();
      let address = 'Riga, Latvia'
      PracticeFormPage.currAddressField.type(address);
      //     - State
      PracticeFormPage.stateSelector.click();
      PracticeFormPage.stateFirstChoice.click();
      //     - City
      PracticeFormPage.citySelector.click();
      PracticeFormPage.cityFirstChoice.click();
      //  - Click Submit
      PracticeFormPage.submitBtn.click();
      //  - Validate values in the table based on label value
      PracticeFormPage.studentName.should('contain.text',`${name} ${lastname}`);
      PracticeFormPage.emailCheck.should('contain.text',email);
      PracticeFormPage.genderCheck.should('contain.text', gender);
      PracticeFormPage.phoneCheck.should('contain.text',phone);
      PracticeFormPage.doBCheck.should('contain.text',`${date} ${month},${year}`);
      PracticeFormPage.subjectsCheck.should('contain.text','Maths');
      PracticeFormPage.hobbiesCheck.should('contain.text','Reading');
      PracticeFormPage.addressCheck.should('contain.text',address);
      PracticeFormPage.stateCityCheck.should('contain.text', 'NCR Delhi');
    })
  })

 // Scenario 2( https://demoqa.com/sortable ) Interactions - Sortable
    context('Interactions - Sortable', () => {
      beforeEach(() => {
        cy.visit('https://demoqa.com/sortable')
      });
      let values = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];
      // - Validate that the values are in order - One, Two, Three, Four, Five, Six
      // clumsy way but works
      it('Sortable page testing', () => {
        SortablePage.firstItem.should('have.text', 'One');
        SortablePage.secondItem.should('have.text', 'Two');
        SortablePage.thirdItem.should('have.text', 'Three');
        SortablePage.forthItem.should('have.text', 'Four');
        SortablePage.fifthItem.should('have.text', 'Five');
        SortablePage.sixthItem.should('have.text', 'Six');
        // - Sort the values in following order - Six, Five, Four, Three, Two, One
      // - Validate that the values are in order - Six, Five, Four, Three, Two, One
      })
    });
  

 



})