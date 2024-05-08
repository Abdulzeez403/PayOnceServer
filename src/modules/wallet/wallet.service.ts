// wallet.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Wallet } from './wallet.schema';

@Injectable()
export class WalletService {
  constructor(@InjectModel(Wallet.name) private walletModel: Model<Wallet>) {}

  async create(createWalletInputDto: Wallet): Promise<Wallet> {
    const createdWallet = new this.walletModel(createWalletInputDto);
    return createdWallet.save();
  }

  async findAll(): Promise<Wallet[]> {
    return this.walletModel.find().exec();
  }

  async findOneById(id: string): Promise<Wallet> {
    return this.walletModel.findById(id).exec();
  }

  async update(updateWalletInput: Wallet): Promise<Wallet> {
    const { id, ...updateData } = updateWalletInput;
    return this.walletModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Wallet> {
    return this.walletModel.findOneAndDelete({ _id: id }).exec();
  }
}
