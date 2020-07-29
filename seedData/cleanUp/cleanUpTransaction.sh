#!/bin/bash
sqlcmd -S Astraazuredatabase.database.windows.net -d AstraServiceDevelopment -U astralogindev -P Astra123 -i seedData/cleanUp/cleanUpServiceOrder.sql
sqlcmd -S Astraazuredatabase.database.windows.net -d AstraServiceDevelopment -U astralogindev -P Astra123 -i seedData/cleanUp/cleanUpRTB.sql
sqlcmd -S Astraazuredatabase.database.windows.net -d AstraServiceDevelopment -U astralogindev -P Astra123 -i seedData/cleanUp/cleanUpRTD.sql
sqlcmd -S Astraazuredatabase.database.windows.net -d AstraServiceDevelopment -U astralogindev -P Astra123 -i seedData/cleanUp/cleanUpServiceOrderRating.sql