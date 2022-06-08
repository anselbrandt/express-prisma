import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NoteOrderByWithAggregationInput } from "../../../inputs/NoteOrderByWithAggregationInput";
import { NoteScalarWhereWithAggregatesInput } from "../../../inputs/NoteScalarWhereWithAggregatesInput";
import { NoteWhereInput } from "../../../inputs/NoteWhereInput";
import { NoteScalarFieldEnum } from "../../../../enums/NoteScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByNoteArgs {
  @TypeGraphQL.Field(_type => NoteWhereInput, {
    nullable: true
  })
  where?: NoteWhereInput | undefined;

  @TypeGraphQL.Field(_type => [NoteOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: NoteOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [NoteScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "title" | "content" | "published" | "authorId">;

  @TypeGraphQL.Field(_type => NoteScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: NoteScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
