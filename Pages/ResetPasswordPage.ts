import { Locator, Page} from '@playwright/test';
export class ResetPasswordPage {
    readonly resetPasswordUrl = "https://platform.converge-digital.com/reset_password";
    readonly page: Page;
    readonly resetPasswordEmailInput: Locator;
    readonly resetPasswordSubmitBtn: Locator;
    readonly resetPasswordGoBackLink: Locator;
    readonly resetPasswordEmailErrorMsg: Locator;

    constructor(page: Page) {
        this.page = page;
        this.resetPasswordEmailInput = page.getByTestId('resetPasswordEmailInput');
        this.resetPasswordSubmitBtn = page.getByTestId('resetPasswordSubmitBtn');
        this.resetPasswordGoBackLink = page.getByTestId('resetPasswordGoBack');
        this.resetPasswordEmailErrorMsg = page.getByText('Email address is required');
    }

    async fillEmail(resetPasswordEmailInput: string) {
        await this.resetPasswordEmailInput.fill(resetPasswordEmailInput);        
        await this.resetPasswordSubmitBtn.click();
    }
}