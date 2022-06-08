import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NoteWhereInput } from "../inputs/NoteWhereInput";

@TypeGraphQL.InputType("NoteListRelationFilter", {
  isAbstract: true
})
export class NoteListRelationFilter {
  @TypeGraphQL.Field(_type => NoteWhereInput, {
    nullable: true
  })
  every?: NoteWhereInput | undefined;

  @TypeGraphQL.Field(_type => NoteWhereInput, {
    nullable: true
  })
  some?: NoteWhereInput | undefined;

  @TypeGraphQL.Field(_type => NoteWhereInput, {
    nullable: true
  })
  none?: NoteWhereInput | undefined;
}
