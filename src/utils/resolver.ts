export interface Context {
    url: string
    req: Express.Request
}

export type Resolver = (
    parent: any,
    args: any,
    context: Context,
    info: any
) => any

export interface ResolverMap {
    Query?: {
        [key: string]: Resolver
    }
    Mutation?: {
        [key: string]: Resolver
    }
}
