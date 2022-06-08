import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NoteCreateOrConnectWithoutAuthorInput } from "../inputs/NoteCreateOrConnectWithoutAuthorInput";
import { NoteCreateWithoutAuthorInput } from "../inputs/NoteCreateWithoutAuthorInput";
import { NoteScalarWhereInput } from "../inputs/NoteScalarWhereInput";
import { NoteUpdateManyWithWhereWithoutAuthorInput } from "../inputs/NoteUpdateManyWithWhereWithoutAuthorInput";
import { NoteUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/NoteUpdateWithWhereUniqueWithoutAuthorInput";
import { NoteUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/NoteUpsertWithWhereUniqueWithoutAuthorInput";
import { NoteWhereUniqueInput } from "../inputs/NoteWhereUniqueInput";

@TypeGraphQL.InputType("NoteUpdateManyWithoutAuthorInput", {
  isAbstract: true
})
export class NoteUpdateManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [NoteCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: NoteCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [NoteCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: NoteCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [NoteUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  upsert?: NoteUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [NoteWhereUniqueInput], {
    nullable: true
  })
  set?: NoteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NoteWhereUniqueInput], {
    nullable: true
  })
  disconnect?: NoteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NoteWhereUniqueInput], {
    nullable: true
  })
  delete?: NoteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NoteWhereUniqueInput], {
    nullable: true
  })
  connect?: NoteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NoteUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  update?: NoteUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [NoteUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true
  })
  updateMany?: NoteUpdateManyWithWhereWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [NoteScalarWhereInput], {
    nullable: true
  })
  deleteMany?: NoteScalarWhereInput[] | undefined;
}
