/*
  Warnings:

  - You are about to drop the column `accounttype` on the `SignUp` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `SignUp` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `SignUp` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `SignUp` table. All the data in the column will be lost.
  - You are about to drop the column `currency` on the `SignUp` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `SignUp` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `SignUp` table. All the data in the column will be lost.
  - You are about to drop the column `mobile` on the `SignUp` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `SignUp` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `SignUp` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `SignUp` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `SignUp` DROP COLUMN `accounttype`,
    DROP COLUMN `city`,
    DROP COLUMN `country`,
    DROP COLUMN `createdAt`,
    DROP COLUMN `currency`,
    DROP COLUMN `email`,
    DROP COLUMN `lastname`,
    DROP COLUMN `mobile`,
    DROP COLUMN `password`,
    DROP COLUMN `state`,
    DROP COLUMN `updatedAt`;
