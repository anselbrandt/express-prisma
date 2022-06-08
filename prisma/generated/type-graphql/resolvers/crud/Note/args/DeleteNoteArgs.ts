import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NoteWhereUniqueInput } from "../../../inputs/NoteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteNoteArgs {
  @TypeGraphQL.Field(_type => NoteWhereUniqueInput, {
    nullable: false
  })
  where!: NoteWhereUniqueInput;
}
