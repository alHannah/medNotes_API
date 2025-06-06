-- AlterTable
ALTER TABLE "Patient" ALTER COLUMN "date_of_birth" DROP NOT NULL,
ALTER COLUMN "date_of_birth" SET DATA TYPE DATE,
ALTER COLUMN "update_at" DROP NOT NULL,
ALTER COLUMN "created_at" DROP NOT NULL;
