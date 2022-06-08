import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NoteUpdateWithoutAuthorInput } from "../inputs/NoteUpdateWithoutAuthorInput";
import { NoteWhereUniqueInput } from "../inputs/NoteWhereUniqueInput";

@TypeGraphQL.InputType("NoteUpdateWithWhereUniqueWithoutAuthorInput", {
  isAbstract: true
})
export class NoteUpdateWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => NoteWhereUniqueInput, {
    nullable: false
  })
  where!: NoteWhereUniqueInput;

  @TypeGraphQL.Field(_type => NoteUpdateWithoutAuthorInput, {
    nullable: false
  })
  data!: NoteUpdateWithoutAuthorInput;
}
