import { mergeTypes, mergeResolvers } from "merge-graphql-schemas";
import * as path from "path";
import * as fs from "fs";
import { makeExecutableSchema } from "graphql-tools";
import * as glob from "glob";

export const generateSchema = () => {
    const pathToModules = path.join(__dirname, "../modules");
    const graphqlTypes = glob
        .sync(`${pathToModules}/**/*.graphql`)
        .map((filePath: string) => fs.readFileSync(filePath, { encoding: "utf8" }));

    const resolvers = glob
        .sync(`${pathToModules}/**/resolvers.ts`)
        .map((resolver: string) => require(resolver).Resolvers);

    return makeExecutableSchema({
        typeDefs: mergeTypes(graphqlTypes),
        resolvers: mergeResolvers(resolvers)
    });
};
