import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NoteAvgAggregate } from "../outputs/NoteAvgAggregate";
import { NoteCountAggregate } from "../outputs/NoteCountAggregate";
import { NoteMaxAggregate } from "../outputs/NoteMaxAggregate";
import { NoteMinAggregate } from "../outputs/NoteMinAggregate";
import { NoteSumAggregate } from "../outputs/NoteSumAggregate";

@TypeGraphQL.ObjectType("NoteGroupBy", {
  isAbstract: true
})
export class NoteGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  published!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  authorId!: number | null;

  @TypeGraphQL.Field(_type => NoteCountAggregate, {
    nullable: true
  })
  _count!: NoteCountAggregate | null;

  @TypeGraphQL.Field(_type => NoteAvgAggregate, {
    nullable: true
  })
  _avg!: NoteAvgAggregate | null;

  @TypeGraphQL.Field(_type => NoteSumAggregate, {
    nullable: true
  })
  _sum!: NoteSumAggregate | null;

  @TypeGraphQL.Field(_type => NoteMinAggregate, {
    nullable: true
  })
  _min!: NoteMinAggregate | null;

  @TypeGraphQL.Field(_type => NoteMaxAggregate, {
    nullable: true
  })
  _max!: NoteMaxAggregate | null;
}
