import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AirtimeResponse } from './airtime.schema';

@Injectable()
export class AirtimeResponseService {
  constructor(
    @InjectModel(AirtimeResponse.name)
    private readonly transactionResponseModel: Model<AirtimeResponse>,
  ) {}

  async create(
    createTransactionResponseDto: AirtimeResponse,
  ): Promise<AirtimeResponse> {
    const createdTransactionResponse = new this.transactionResponseModel(
      createTransactionResponseDto,
    );
    return await createdTransactionResponse.save();
  }

  async findAll(): Promise<AirtimeResponse[]> {
    return await this.transactionResponseModel.find().exec();
  }

  async findById(id: string): Promise<AirtimeResponse> {
    return await this.transactionResponseModel.findById(id).exec();
  }

  async update(
    id: string,
    updateTransactionResponseDto: AirtimeResponse,
  ): Promise<AirtimeResponse> {
    return await this.transactionResponseModel
      .findByIdAndUpdate(id, updateTransactionResponseDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<AirtimeResponse> {
    return await this.transactionResponseModel.findByIdAndDelete(id).exec();
  }
}
