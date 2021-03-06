import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NoteUpdateManyMutationInput } from "../../../inputs/NoteUpdateManyMutationInput";
import { NoteWhereInput } from "../../../inputs/NoteWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyNoteArgs {
  @TypeGraphQL.Field(_type => NoteUpdateManyMutationInput, {
    nullable: false
  })
  data!: NoteUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => NoteWhereInput, {
    nullable: true
  })
  where?: NoteWhereInput | undefined;
}
