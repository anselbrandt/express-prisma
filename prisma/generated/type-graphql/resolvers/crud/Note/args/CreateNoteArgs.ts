import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NoteCreateInput } from "../../../inputs/NoteCreateInput";

@TypeGraphQL.ArgsType()
export class CreateNoteArgs {
  @TypeGraphQL.Field(_type => NoteCreateInput, {
    nullable: false
  })
  data!: NoteCreateInput;
}
