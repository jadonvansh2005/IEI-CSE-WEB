-- AlterTable
ALTER TABLE "Membership" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "domain" TEXT,
ADD COLUMN     "reason" TEXT,
ADD COLUMN     "skills" TEXT,
ALTER COLUMN "membershipStatus" SET DEFAULT 'pending';
