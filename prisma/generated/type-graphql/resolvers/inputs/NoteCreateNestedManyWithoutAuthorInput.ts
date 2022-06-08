import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NoteCreateOrConnectWithoutAuthorInput } from "../inputs/NoteCreateOrConnectWithoutAuthorInput";
import { NoteCreateWithoutAuthorInput } from "../inputs/NoteCreateWithoutAuthorInput";
import { NoteWhereUniqueInput } from "../inputs/NoteWhereUniqueInput";

@TypeGraphQL.InputType("NoteCreateNestedManyWithoutAuthorInput", {
  isAbstract: true
})
export class NoteCreateNestedManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [NoteCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: NoteCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [NoteCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: NoteCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [NoteWhereUniqueInput], {
    nullable: true
  })
  connect?: NoteWhereUniqueInput[] | undefined;
}
