import PracticeFormPage from "../pageObjects/PracticeForm.page";

describe('Demo QA page testing', () => {
  context('practice from test', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/automation-practice-form')
    });
    //Scenario 1 - ( https://demoqa.com/automation-practice-form ) Forms - Practice forms
    
   function setMonth(mnth){
    PracticeFormPage.doBField.click();
    PracticeFormPage.monthSelectorCalendar.select(mnth);
    }

    function setYear(yr){
      PracticeFormPage.doBField.click();
      PracticeFormPage.yearSelectorCalendar.select(yr);
      }

    // function setDate(date){ // !!! not working properly, must change selector
    //     PracticeFormPage.doBField.click();
    //     PracticeFormPage.dateSelectorCalendar.contains(date).click();
    //     }

    it('Forms - Practice forms', () => {
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
      let year = '1984'
      let month = 'February'
      let date = '29'
      PracticeFormPage.monthSelectorCalendar.select(month);
      PracticeFormPage.yearSelectorCalendar.select(year);
      PracticeFormPage.dateSelectorCalendar.contains('29').click();
      
      // --------------
      // setDate('13'); // TO DOOOOOOO
      //         - Set date of birth value by using the calendar widget
      //         - Pass the values dynamically, e.g. create methods:
      //           - setYear(“1984”)
      // year = '2006';
      setYear(year);
      //           - setMonth(“February”)
      // month = 'May'
      // setMonth(month);
      //           - setDate(“29”)”
      //     - Subjects
      //         - Maths
      PracticeFormPage.subjectsField.click();
      PracticeFormPage.subjectsField.type('Maths{enter}');
      //     - Hobbies
      PracticeFormPage.hobbiesCheckboxes.contains('Reading').click();
      //     - Current address
      PracticeFormPage.currAddressField.click();
      let address = 'Riga, Latvia'
      PracticeFormPage.currAddressField.type('Riga, Latvia');

      // ---------
      //     - State // TO DOOOOOO can't do it on several tries, left for later
      PracticeFormPage.stateSelector.click();
      PracticeFormPage.stateSelector.click();
      // PracticeFormPage.stateSelector.should('contain.text','NCR').click();
      //     - City
      // PracticeFormPage.citySelector.click(); // TO DOOOO can't do anything till State selected (DOH)
      // -------
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
    })
  })
})