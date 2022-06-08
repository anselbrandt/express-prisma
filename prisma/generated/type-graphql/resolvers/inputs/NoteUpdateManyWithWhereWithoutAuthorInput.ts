import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NoteScalarWhereInput } from "../inputs/NoteScalarWhereInput";
import { NoteUpdateManyMutationInput } from "../inputs/NoteUpdateManyMutationInput";

@TypeGraphQL.InputType("NoteUpdateManyWithWhereWithoutAuthorInput", {
  isAbstract: true
})
export class NoteUpdateManyWithWhereWithoutAuthorInput {
  @TypeGraphQL.Field(_type => NoteScalarWhereInput, {
    nullable: false
  })
  where!: NoteScalarWhereInput;

  @TypeGraphQL.Field(_type => NoteUpdateManyMutationInput, {
    nullable: false
  })
  data!: NoteUpdateManyMutationInput;
}
