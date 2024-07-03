import { test, expect } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
import { ResetPasswordPage } from "../Pages/ResetPasswordPage";

let loginPage;
let resetPasswordPage;

test.beforeEach('Go to the reset password page as a prerequisite.',async ( { page } ) => {
    loginPage = new LoginPage(page);
    resetPasswordPage = new ResetPasswordPage(page);
    await loginPage.goToResetPasswordPage();
  });

  // Visibility test

  test('Check all elements visibility.', async ( { page } ) => {
    expect.soft(await loginPage.convergeLogo.isVisible());
    expect.soft(await loginPage.selectTitle.isVisible());
    expect.soft(await resetPasswordPage.resetPasswordEmailInput.isVisible());
  });