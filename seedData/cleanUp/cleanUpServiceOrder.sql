DELETE FROM AstraServiceDevelopment.MobileService.ServiceOrderJob WHERE CreatedBy='testerlogin.DSO@gmail.com'
DELETE FROM AstraServiceDevelopment.MobileService.ServiceOrderRating WHERE CreatedBy = 'testerlogin.DSO@gmail.com'
DELETE FROM AstraServiceDevelopment.MobileService.LogConvertOrder WHERE OrderNo IN (SELECT OrderNo FROM AstraServiceDevelopment.MobileService.ServiceOrder WHERE OrderBy='testerlogin.DSO@gmail.com')
DELETE FROM AstraServiceDevelopment.MobileService.UnitAvailability WHERE CreatedBy = 'testerlogin.DSO@gmail.com'
DELETE FROM AstraServiceDevelopment.MobileService.ServiceOrder WHERE OrderBy='testerlogin.DSO@gmail.com'
GO
