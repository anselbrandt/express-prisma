import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateNoteArgs } from "./args/AggregateNoteArgs";
import { Note } from "../../../models/Note";
import { AggregateNote } from "../../outputs/AggregateNote";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Note)
export class AggregateNoteResolver {
  @TypeGraphQL.Query(_returns => AggregateNote, {
    nullable: false
  })
  async aggregateNote(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateNoteArgs): Promise<AggregateNote> {
    return getPrismaFromContext(ctx).note.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
