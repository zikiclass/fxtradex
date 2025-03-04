-- AlterTable
ALTER TABLE `Register` ADD COLUMN `otp_code` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Withdrawal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `amount` DOUBLE NULL,
    `method` VARCHAR(191) NULL,
    `from_account` VARCHAR(191) NULL,
    `account_number` VARCHAR(191) NULL,
    `account_name` VARCHAR(191) NULL,
    `bank_name` VARCHAR(191) NULL,
    `crypto` VARCHAR(191) NULL,
    `wallet_address` VARCHAR(191) NULL,
    `paypal_email` VARCHAR(191) NULL,
    `cash_tag` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Withdrawal` ADD CONSTRAINT `Withdrawal_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Register`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
