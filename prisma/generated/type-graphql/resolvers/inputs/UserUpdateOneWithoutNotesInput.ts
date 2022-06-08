import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutNotesInput } from "../inputs/UserCreateOrConnectWithoutNotesInput";
import { UserCreateWithoutNotesInput } from "../inputs/UserCreateWithoutNotesInput";
import { UserUpdateWithoutNotesInput } from "../inputs/UserUpdateWithoutNotesInput";
import { UserUpsertWithoutNotesInput } from "../inputs/UserUpsertWithoutNotesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutNotesInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutNotesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutNotesInput, {
    nullable: true
  })
  create?: UserCreateWithoutNotesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutNotesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutNotesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutNotesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutNotesInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutNotesInput, {
    nullable: true
  })
  update?: UserUpdateWithoutNotesInput | undefined;
}
