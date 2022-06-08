import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NoteOrderByWithRelationInput } from "../../../inputs/NoteOrderByWithRelationInput";
import { NoteWhereInput } from "../../../inputs/NoteWhereInput";
import { NoteWhereUniqueInput } from "../../../inputs/NoteWhereUniqueInput";
import { NoteScalarFieldEnum } from "../../../../enums/NoteScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserNotesArgs {
  @TypeGraphQL.Field(_type => NoteWhereInput, {
    nullable: true
  })
  where?: NoteWhereInput | undefined;

  @TypeGraphQL.Field(_type => [NoteOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: NoteOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => NoteWhereUniqueInput, {
    nullable: true
  })
  cursor?: NoteWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [NoteScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "title" | "content" | "published" | "authorId"> | undefined;
}
