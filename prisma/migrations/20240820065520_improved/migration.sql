/*
  Warnings:

  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VerificationToken` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `projectId` to the `Issue` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Issue` ADD COLUMN `projectId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Account`;

-- DropTable
DROP TABLE `Session`;

-- DropTable
DROP TABLE `VerificationToken`;

-- CreateTable
CREATE TABLE `Project` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `info` VARCHAR(191) NULL,
    `status` ENUM('CLOSED', 'COMPLETED', 'WORKING') NOT NULL DEFAULT 'WORKING',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `type` ENUM('PERSONAL', 'NOT_PERSONAL') NOT NULL DEFAULT 'NOT_PERSONAL',

    INDEX `Project_userId_idx`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Issue_projectId_idx` ON `Issue`(`projectId`);
