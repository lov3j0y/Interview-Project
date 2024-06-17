import { test, expect } from "@playwright/test";

import { ResetPasswordPage } from "../Pages/ResetPasswordPage";

let resetPasswordPage;

test.beforeEach('Go to the reset password page as a prerequisite.',async ( { page } ) => {
    resetPasswordPage = new ResetPasswordPage(page);
    await resetPasswordPage.goToResetPasswordPage();
  })