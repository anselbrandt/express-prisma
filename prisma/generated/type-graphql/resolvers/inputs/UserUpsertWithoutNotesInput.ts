import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutNotesInput } from "../inputs/UserCreateWithoutNotesInput";
import { UserUpdateWithoutNotesInput } from "../inputs/UserUpdateWithoutNotesInput";

@TypeGraphQL.InputType("UserUpsertWithoutNotesInput", {
  isAbstract: true
})
export class UserUpsertWithoutNotesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutNotesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutNotesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutNotesInput, {
    nullable: false
  })
  create!: UserCreateWithoutNotesInput;
}
