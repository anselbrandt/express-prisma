import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutNotesInput } from "../inputs/UserCreateOrConnectWithoutNotesInput";
import { UserCreateWithoutNotesInput } from "../inputs/UserCreateWithoutNotesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutNotesInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutNotesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutNotesInput, {
    nullable: true
  })
  create?: UserCreateWithoutNotesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutNotesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutNotesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
