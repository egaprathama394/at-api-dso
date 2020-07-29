DELETE FROM AstraServiceDevelopment.AstraProfile.ResetPasswordRequest WHERE UserAccountId IN (SELECT Id FROM AstraServiceDevelopment.AstraProfile.UserAccount WHERE Email='dbdtester8@gmail.com')
GO