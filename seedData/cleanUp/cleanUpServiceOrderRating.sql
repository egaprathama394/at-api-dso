DELETE FROM AstraServiceDevelopment.MobileService.ServiceOrderJob WHERE CreatedBy='renni0811@gmail.com'
DELETE FROM AstraServiceDevelopment.MobileService.ServiceOrderRating WHERE CreatedBy = 'renni0811@gmail.com'
DELETE FROM AstraServiceDevelopment.MobileService.LogConvertOrder WHERE OrderNo IN (SELECT OrderNo FROM AstraServiceDevelopment.MobileService.ServiceOrder WHERE OrderBy='renni0811@gmail.com')
DELETE FROM AstraServiceDevelopment.MobileService.UnitAvailability WHERE CreatedBy = 'renni0811@gmail.com'
DELETE FROM AstraServiceDevelopment.MobileService.ServiceOrder WHERE OrderBy='renni0811@gmail.com'
GO
