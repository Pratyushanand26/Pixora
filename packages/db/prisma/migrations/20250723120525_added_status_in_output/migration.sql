/*
  Warnings:

  - Added the required column `prompt` to the `Outputimages` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OutputStatus" AS ENUM ('Pending', 'generated', 'Failed');

-- AlterTable
ALTER TABLE "Outputimages" ADD COLUMN     "prompt" TEXT NOT NULL,
ADD COLUMN     "status" "OutputStatus" NOT NULL DEFAULT 'Pending';
