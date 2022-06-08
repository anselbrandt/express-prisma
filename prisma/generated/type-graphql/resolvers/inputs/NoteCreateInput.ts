import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutNotesInput } from "../inputs/UserCreateNestedOneWithoutNotesInput";

@TypeGraphQL.InputType("NoteCreateInput", {
  isAbstract: true
})
export class NoteCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  published?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutNotesInput, {
    nullable: true
  })
  author?: UserCreateNestedOneWithoutNotesInput | undefined;
}
