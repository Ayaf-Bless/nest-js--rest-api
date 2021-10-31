import { MutationOutput } from "../../common/dtos/output.dto";
import { Field, InputType, ObjectType, PickType } from "@nestjs/graphql";
import { User } from "../entities/user.entity";

@InputType()
export class LoginInput extends PickType(User, ["email", "password"]) {}

@ObjectType()
export class LoginOutput extends MutationOutput {
  @Field((_type) => String, { nullable: true })
  token?: string;
}