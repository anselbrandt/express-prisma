import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("NoteScalarWhereInput", {
  isAbstract: true
})
export class NoteScalarWhereInput {
  @TypeGraphQL.Field(_type => [NoteScalarWhereInput], {
    nullable: true
  })
  AND?: NoteScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NoteScalarWhereInput], {
    nullable: true
  })
  OR?: NoteScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NoteScalarWhereInput], {
    nullable: true
  })
  NOT?: NoteScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  content?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  published?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  authorId?: IntNullableFilter | undefined;
}
