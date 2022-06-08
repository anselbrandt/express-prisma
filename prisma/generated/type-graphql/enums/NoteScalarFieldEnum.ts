import * as TypeGraphQL from "type-graphql";

export enum NoteScalarFieldEnum {
  id = "id",
  title = "title",
  content = "content",
  published = "published",
  authorId = "authorId"
}
TypeGraphQL.registerEnumType(NoteScalarFieldEnum, {
  name: "NoteScalarFieldEnum",
  description: undefined,
});
