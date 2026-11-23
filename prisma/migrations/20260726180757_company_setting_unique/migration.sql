/*
  Warnings:

  - A unique constraint covering the columns `[companyName]` on the table `CompanySetting` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CompanySetting_companyName_key" ON "CompanySetting"("companyName");
