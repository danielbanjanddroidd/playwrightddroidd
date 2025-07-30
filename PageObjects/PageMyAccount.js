class pageMyAccount {

constructor(page) {
this.page = page;
//Define XPath as properties here
this.buttonMyAccount = "xpath=//div[@data-testid='handle-button']"
this.buttonMyAddress = "xpath=//span[text()='My Addresses']";
this.iframeMyAddress = "xpath=//iframe[@title='My Addresses']";
this.buttonAddNewAddress = "xpath=//div[@class='_10o0_ _26mkp hidden-mobile' and @data-hook='add-address-button']//button[@data-hook='button' and text()='Add New Address']"
this.buttonConfirmRemove = "xpath=//*[@data-hook='remove-confirmation-accept-button']//button[@data-hook='button' and text()='Yes']"
this.iframeNewAddress = "//iframe[contains(@name, 'tpapopup-')]";
this.buttonRemoveAddress = "xpath=//button[@data-hook='remove-button']"
this.fieldFirstName = "xpath=//input[@name='firstName']";
this.fieldLastName = "xpath=//input[@name='lastName']";
this.fieldCompanyName = "xpath=//input[@name='company']";
this.fieldAddress = "xpath=//input[@name='addressLine1']";
this.fieldAddressLine2 = "xpath=//input[@name='addressLine2']";
this.fieldCity = "xpath=//input[@name='city']";
this.dropdownCountry = "xpath=//input[@name='country']";
this.dropdownOption = '//*[@data-hook="dropdown-item-UKR"]';
this.fieldZipCode = "xpath=//input[@name='zipCode']";
this.fieldPhone = "xpath=//input[@name='phone']";
this.buttonAddAddress = 'xpath=//button[@data-hook="submit-add-address"]';
} 
}
 
// Please note: Some locators shown in the video are now outdated due to Wix updates.
// Specifically, the iframe locators has changed.
// Since the iframe locator became dynamic, we now use a flexible XPath 
// that matches iframes whose names start with 'tpapopup-'.
        
export {pageMyAccount};

