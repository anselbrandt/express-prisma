import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NoteCreateWithoutAuthorInput } from "../inputs/NoteCreateWithoutAuthorInput";
import { NoteUpdateWithoutAuthorInput } from "../inputs/NoteUpdateWithoutAuthorInput";
import { NoteWhereUniqueInput } from "../inputs/NoteWhereUniqueInput";

@TypeGraphQL.InputType("NoteUpsertWithWhereUniqueWithoutAuthorInput", {
  isAbstract: true
})
export class NoteUpsertWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => NoteWhereUniqueInput, {
    nullable: false
  })
  where!: NoteWhereUniqueInput;

  @TypeGraphQL.Field(_type => NoteUpdateWithoutAuthorInput, {
    nullable: false
  })
  update!: NoteUpdateWithoutAuthorInput;

  @TypeGraphQL.Field(_type => NoteCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: NoteCreateWithoutAuthorInput;
}
