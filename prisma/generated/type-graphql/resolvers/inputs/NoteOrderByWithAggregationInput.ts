import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NoteAvgOrderByAggregateInput } from "../inputs/NoteAvgOrderByAggregateInput";
import { NoteCountOrderByAggregateInput } from "../inputs/NoteCountOrderByAggregateInput";
import { NoteMaxOrderByAggregateInput } from "../inputs/NoteMaxOrderByAggregateInput";
import { NoteMinOrderByAggregateInput } from "../inputs/NoteMinOrderByAggregateInput";
import { NoteSumOrderByAggregateInput } from "../inputs/NoteSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("NoteOrderByWithAggregationInput", {
  isAbstract: true
})
export class NoteOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  published?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  authorId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => NoteCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: NoteCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NoteAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: NoteAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NoteMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: NoteMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NoteMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: NoteMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NoteSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: NoteSumOrderByAggregateInput | undefined;
}
