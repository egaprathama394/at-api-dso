DELETE FROM AstraServiceDevelopment.AstraProfile.UserAccountType WHERE UserAccountId IN (SELECT Id FROM AstraServiceDevelopment.AstraProfile.UserAccount WHERE Email='renni.aja8@gmail.com')
DELETE FROM AstraServiceDevelopment.AstraProfile.UserRefreshToken WHERE CreatedBy='renni.aja8@gmail.com'
DELETE FROM AstraServiceDevelopment.AstraProfile.ResetPasswordRequest WHERE UserAccountId IN (SELECT Id FROM AstraServiceDevelopment.AstraProfile.UserAccount WHERE Email='renni.aja8@gmail.com')
DELETE FROM AstraServiceDevelopment.AstraProfile.UserActivation WHERE UserAccountId IN (SELECT Id FROM AstraServiceDevelopment.AstraProfile.UserAccount WHERE Email='renni.aja8@gmail.com')
DELETE FROM AstraServiceDevelopment.AstraProfile.UserApplication WHERE CreatedBy='renni.aja8@gmail.com'
DELETE FROM AstraServiceDevelopment.AstraProfile.UserVehicle WHERE CreatedBy='renni.aja8@gmail.com'
DELETE FROM AstraServiceDevelopment.AstraProfile.UserAccount WHERE Email='renni.aja8@gmail.com'

--register using max char 
DELETE FROM AstraServiceDevelopment.AstraProfile.UserAccountType WHERE UserAccountId IN (SELECT Id FROM AstraServiceDevelopment.AstraProfile.UserAccount WHERE Email='testingAT.ABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJ@gmail.com')
DELETE FROM AstraServiceDevelopment.AstraProfile.UserRefreshToken WHERE CreatedBy='testingAT.ABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJ@gmail.com'
DELETE FROM AstraServiceDevelopment.AstraProfile.ResetPasswordRequest WHERE UserAccountId IN (SELECT Id FROM AstraServiceDevelopment.AstraProfile.UserAccount WHERE Email='testingAT.ABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJ@gmail.com')
DELETE FROM AstraServiceDevelopment.AstraProfile.UserActivation WHERE UserAccountId IN (SELECT Id FROM AstraServiceDevelopment.AstraProfile.UserAccount WHERE Email='testingAT.ABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJ@gmail.com')
DELETE FROM AstraServiceDevelopment.AstraProfile.UserApplication WHERE CreatedBy='testingAT.ABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJ@gmail.com'
DELETE FROM AstraServiceDevelopment.AstraProfile.UserVehicle WHERE CreatedBy='testingAT.ABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJ@gmail.com'
DELETE FROM AstraServiceDevelopment.AstraProfile.UserAccount WHERE Email='testingAT.ABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJ@gmail.com'
GO
