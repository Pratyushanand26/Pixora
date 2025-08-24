/*
  Warnings:

  - The `status` column on the `Outputimages` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "OutputStatusEnum" AS ENUM ('Pending', 'Generated', 'Failed');

-- CreateEnum
CREATE TYPE "ModelStatusEnum" AS ENUM ('Pending', 'Generated', 'Failed');

-- AlterTable
ALTER TABLE "Model" ADD COLUMN     "falAiRequestId" TEXT,
ADD COLUMN     "status" "ModelStatusEnum" NOT NULL DEFAULT 'Pending',
ADD COLUMN     "tensorPath" TEXT,
ADD COLUMN     "triggerWord" TEXT;

-- AlterTable
ALTER TABLE "Outputimages" ADD COLUMN     "falAiRequestId" TEXT,
DROP COLUMN "status",
ADD COLUMN     "status" "OutputStatusEnum" NOT NULL DEFAULT 'Pending';

-- DropEnum
DROP TYPE "OutputStatus";

-- CreateIndex
CREATE INDEX "Model_falAiRequestId_idx" ON "Model"("falAiRequestId");

-- CreateIndex
CREATE INDEX "Outputimages_falAiRequestId_idx" ON "Outputimages"("falAiRequestId");
