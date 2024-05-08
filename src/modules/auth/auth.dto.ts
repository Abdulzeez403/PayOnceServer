import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { User } from '../user/user.dto';

@InputType()
export class LoginInput {
  @Field()
  email: string;
  @Field()
  password?: string;
}

@ObjectType()
export class Auth {
  @Field()
  token: string;

  @Field(() => User)
  user?: User;
}
