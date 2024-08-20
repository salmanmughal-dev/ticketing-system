-- AlterTable
ALTER TABLE `Issue` ADD COLUMN `ticketRole` ENUM('JUNIOR', 'INTERNEE', 'SENIOR', 'MANAGER', 'CEO') NOT NULL DEFAULT 'JUNIOR';

-- CreateIndex
CREATE INDEX `Issue_assignedToUserId_status_idx` ON `Issue`(`assignedToUserId`, `status`);
