import { Locator, Page} from '@playwright/test';
export class LoginPage {
    readonly url = "https://platform.converge-digital.com/login";
    readonly page: Page;    
    readonly loginUsernameInput: Locator;
    readonly loginPasswordInput: Locator;
    readonly loginSignInBtn: Locator;
    readonly message: Locator;
    readonly errorMessageUsername: Locator;
    readonly errorMessagePassword: Locator;
    readonly convergeLogo: Locator;
    readonly resetPasswordUrl = "https://platform.converge-digital.com/reset_password";
    readonly resetPasswordLink: Locator;
    readonly selectTitle: Locator;

constructor(page: Page) {
    this.page = page;    
    this.loginUsernameInput = page.locator('[data-testid="loginUsernameInput"]');
    this.loginPasswordInput = page.locator('[data-testid="loginPasswordInput"]');
    this.loginSignInBtn = page.locator('[data-testid="loginSignInBtn"]');
    this.message = page.locator('.el-message__content');
    this.errorMessageUsername = page.locator('text=username is required');
    this.errorMessagePassword = page.locator('text=password is required');
    this.convergeLogo = page.locator('.logo');
    this.selectTitle = page.locator('.title');
    this.resetPasswordLink = page.locator('[data-testid="loginForgotPassword"]');    
}


async goToLoginPage(){
    await this.page.goto(this.url);
}

async goToResetPasswordPage(){
    await this.page.goto(this.resetPasswordUrl);
}

async fillForm(loginUsernameInput: string, loginPasswordInput: string) {
    await this.loginUsernameInput.fill(loginUsernameInput);
    await this.loginPasswordInput.fill(loginPasswordInput);
    await this.loginSignInBtn.click();
}
}
