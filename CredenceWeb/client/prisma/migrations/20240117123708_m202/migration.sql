/*
  Warnings:

  - Added the required column `mileage` to the `Vehicles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vehicles" ADD COLUMN     "mileage" INTEGER NOT NULL;
