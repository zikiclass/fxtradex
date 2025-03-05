/*
  Warnings:

  - A unique constraint covering the columns `[wallet_address]` on the table `Wallets` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Wallets_wallet_address_key` ON `Wallets`(`wallet_address`);
