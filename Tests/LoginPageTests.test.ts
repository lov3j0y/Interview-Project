import { test, expect } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";

let loginPage;

test.beforeEach('Go to the login page as a prerequisite.',async ( { page } ) => {
  loginPage = new LoginPage(page);
  await loginPage.goToLoginPage();
})

// Visibility tests.

test.describe('Check elements visibility.', () => {
  test('Verify username field is visible', async ( { page } ) => {  
    expect (await loginPage.loginUsernameInput.isVisible()).toBe(true);
  })

  test('Verify password field is visible', async ( { page } ) => {
    expect (await loginPage.loginPasswordInput.isVisible()).toBe(true);
  })

  test('Verify SignIn button is visible', async ( { page } ) => {
    expect (await loginPage.loginSignInBtn.isVisible()).toBe(true);
  })

  test('Verify Converge logo is visible.', async ( { page } ) => {
    expect(await loginPage.convergeLogo.isVisible()).toBe(true);
  })

  test('Verify Forgot Password link is visible.', async ( { page } ) => {
    expect(await loginPage.resetPasswordLink.isVisible()).toBe(true);
  })
})


test.describe('Test "Log in" functionality', () => {
  test('Login with blank username', async ( { page } ) => {
      await loginPage.fillForm( "", "123");    
      await expect(loginPage.errorMessageUsername).toBeVisible();
      expect(await loginPage.errorMessageUsername.innerText()).toEqual('username is required');    
  })

  test('Login with blank password', async ( { page } ) => {
      await loginPage.fillForm( "123", "");    
      await expect(loginPage.errorMessagePassword).toBeVisible();
      expect(await loginPage.errorMessagePassword.innerText()).toEqual('password is required');    
  })

  test('Login with blank username and password', async ( { page } ) => {
    await loginPage.fillForm( "", "");    
    await expect(loginPage.errorMessageUsername, loginPage.errorMessagePassword).toBeVisible();
    expect(await loginPage.errorMessageUsername.innerText()).toEqual('username is required');
    expect(await loginPage.errorMessagePassword.innerText()).toEqual('password is required');    
  })

  test('Login with wrong credentials', async ( { page } ) => {
      await loginPage.fillForm("123", "123");    
      await expect(loginPage.message).toBeVisible();
      expect(await loginPage.message.innerText()).toEqual('No active account found with the given credentials');
    await expect(loginPage.message).not.toBeVisible();
  })
})

  test('Forgot password link navigate to the correct url.', async ( { page } ) => {
    await loginPage.resetPasswordLink.click();
    await loginPage.goToResetPasswordPage();    
    expect(await page.url()).toBe('https://platform.converge-digital.com/reset_password');
  })

