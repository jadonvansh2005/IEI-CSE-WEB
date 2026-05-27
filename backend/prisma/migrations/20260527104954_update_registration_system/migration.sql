/*
  Warnings:

  - You are about to drop the column `screenshot` on the `Registration` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Registration" DROP COLUMN "screenshot",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "paymentScreenshot" TEXT,
ALTER COLUMN "paymentStatus" DROP NOT NULL,
ALTER COLUMN "transactionId" DROP NOT NULL,
ALTER COLUMN "registrationStatus" SET DEFAULT 'pending';
