import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { AirtimeResponseService } from './airtime.service';
import { AirtimeResponse, AirtimeResponseInput } from './airtime.dto';

@Resolver(() => AirtimeResponse)
export class AirtimeResponseResolver {
  constructor(
    private readonly airtimeResponseService: AirtimeResponseService,
  ) {}

  @Query(() => [AirtimeResponse])
  async getAirtimeResponses(): Promise<AirtimeResponse[]> {
    return await this.airtimeResponseService.findAll();
  }

  @Query(() => AirtimeResponse)
  async getAirtimeResponse(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<AirtimeResponse> {
    return await this.airtimeResponseService.findById(id);
  }

  @Mutation(() => AirtimeResponse)
  async createAirtimeResponse(
    @Args('input') input: AirtimeResponseInput,
  ): Promise<AirtimeResponse> {
    return await this.airtimeResponseService.create(input);
  }

  @Mutation(() => AirtimeResponse)
  async updateAirtimeResponse(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') input: AirtimeResponseInput,
  ): Promise<AirtimeResponse> {
    return await this.airtimeResponseService.update(id, input);
  }

  @Mutation(() => AirtimeResponse)
  async deleteTransactionResponse(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<AirtimeResponse> {
    return await this.airtimeResponseService.delete(id);
  }
}
