// user.resolver.ts
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.schema';
import { User as UserDto, CreateUserInput } from './user.dto';
import * as bcrypt from 'bcrypt';

@Resolver(() => UserDto)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserDto])
  async users(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Mutation(() => UserDto)
  async createUser(@Args('input') input: CreateUserInput): Promise<User> {
    const hashedPassword = await bcrypt.hash(input.password, 10);
    const existingUser = await this.userService.findOne(input.email);
    if (existingUser) {
      throw new Error('User already exist');
    }
    const userDto = await this.userService.create({
      ...input,
      password: hashedPassword,
    });
    return userDto;
  }
};
