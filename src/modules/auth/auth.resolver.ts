import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput } from './auth.dto';
import { Auth as AuthPayload } from './auth.dto';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthPayload)
  async login(@Args('input') payload: LoginInput): Promise<AuthPayload> {
    const { token, user } = await this.authService.login(
      payload.email,
      payload.password,
    );
    return { token, user };
  }
}
