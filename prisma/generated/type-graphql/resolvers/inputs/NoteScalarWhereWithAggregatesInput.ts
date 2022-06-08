import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("NoteScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class NoteScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [NoteScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: NoteScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NoteScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: NoteScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NoteScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: NoteScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  content?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  published?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  authorId?: IntNullableWithAggregatesFilter | undefined;
}
