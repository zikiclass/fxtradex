import prisma from "../../../../../prisma/client";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth"; // Or any other session management you are using

export async function PUT(request) {
  try {
    const body = await request.json(); // The request body contains wallet data

    const { btc, eth, usdttrc, usdterc, trx } = body; // Get wallet values from the request

    // Update wallet information for each type if they are provided
    const updatedWallets = [];

    if (btc) {
      updatedWallets.push(
        await prisma.wallets.upsert({
          where: { wallet_address: "BTC Bitcoin" }, // Assumes wallet_address is unique
          update: { wallet: btc },
          create: { wallet_address: "BTC Bitcoin", wallet: btc },
        })
      );
    }

    if (eth) {
      updatedWallets.push(
        await prisma.wallets.upsert({
          where: { wallet_address: "ETH Ethereum" },
          update: { wallet: eth },
          create: { wallet_address: "ETH Ethereum", wallet: eth },
        })
      );
    }

    if (usdttrc) {
      updatedWallets.push(
        await prisma.wallets.upsert({
          where: { wallet_address: "USDT (TRC20)" },
          update: { wallet: usdttrc },
          create: { wallet_address: "USDT (TRC20)", wallet: usdttrc },
        })
      );
    }

    if (usdterc) {
      updatedWallets.push(
        await prisma.wallets.upsert({
          where: { wallet_address: "USDT (ERC20)" },
          update: { wallet: usdterc },
          create: { wallet_address: "USDT (ERC20)", wallet: usdterc },
        })
      );
    }

    if (trx) {
      updatedWallets.push(
        await prisma.wallets.upsert({
          where: { wallet_address: "TRX (Tron)" },
          update: { wallet: trx },
          create: { wallet_address: "TRX (Tron)", wallet: trx },
        })
      );
    }

    return NextResponse.json(
      { message: "Wallets updated successfully", updatedWallets },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update wallets", details: error.message },
      { status: 500 }
    );
  }
}
