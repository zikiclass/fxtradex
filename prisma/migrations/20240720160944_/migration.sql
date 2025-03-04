/*
  Warnings:

  - You are about to drop the column `role` on the `Register` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Register` DROP COLUMN `role`;

-- CreateTable
CREATE TABLE `Admin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,

    UNIQUE INDEX `Admin_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
