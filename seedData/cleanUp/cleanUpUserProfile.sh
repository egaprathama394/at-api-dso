#!/bin/bash
sqlcmd -S Astraazuredatabase.database.windows.net -d AstraServiceDevelopment -U astralogindev -P Astra123 -i seedData/cleanUp/cleanUpUserAccount.sql
sqlcmd -S Astraazuredatabase.database.windows.net -d AstraServiceDevelopment -U astralogindev -P Astra123 -i seedData/cleanUp/cleanUpResetPass.sql
sqlcmd -S Astraazuredatabase.database.windows.net -d AstraServiceDevelopment -U astralogindev -P Astra123 -i seedData/cleanUp/cleanUpMyVehicle.sql
sqlcmd -S Astraazuredatabase.database.windows.net -d AstraServiceDevelopment -U astralogindev -P Astra123 -i seedData/cleanUp/cleanUpMessages.sql
