-- AlterTable
ALTER TABLE "Membership" ADD COLUMN     "approvedAt" TIMESTAMP(3),
ADD COLUMN     "rejectionReason" TEXT;
