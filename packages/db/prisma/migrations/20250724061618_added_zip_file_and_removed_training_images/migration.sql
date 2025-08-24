/*
  Warnings:

  - You are about to drop the `Trainingimages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Trainingimages" DROP CONSTRAINT "Trainingimages_modelId_fkey";

-- DropTable
DROP TABLE "Trainingimages";
