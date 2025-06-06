/*
  Warnings:

  - Made the column `date_of_birth` on table `Patient` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Note" ALTER COLUMN "created_at" DROP NOT NULL,
ALTER COLUMN "updated_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Patient" ALTER COLUMN "date_of_birth" SET NOT NULL;
