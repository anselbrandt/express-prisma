import * as TypeGraphQL from "type-graphql";
import { Note } from "../../../models/Note";
import { User } from "../../../models/User";
import { UserNotesArgs } from "./args/UserNotesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Note], {
    nullable: false
  })
  async notes(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserNotesArgs): Promise<Note[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).notes(args);
  }
}
