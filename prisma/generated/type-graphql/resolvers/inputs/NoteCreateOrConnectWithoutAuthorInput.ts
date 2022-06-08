import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NoteCreateWithoutAuthorInput } from "../inputs/NoteCreateWithoutAuthorInput";
import { NoteWhereUniqueInput } from "../inputs/NoteWhereUniqueInput";

@TypeGraphQL.InputType("NoteCreateOrConnectWithoutAuthorInput", {
  isAbstract: true
})
export class NoteCreateOrConnectWithoutAuthorInput {
  @TypeGraphQL.Field(_type => NoteWhereUniqueInput, {
    nullable: false
  })
  where!: NoteWhereUniqueInput;

  @TypeGraphQL.Field(_type => NoteCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: NoteCreateWithoutAuthorInput;
}
