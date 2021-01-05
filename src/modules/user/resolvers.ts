import { User } from "../../models/user"
import { PageOptions } from "../../utils/pagination"
import { Context, ResolverMap } from "../../utils/resolver"
import { CreateUserInput } from "./types"

export const Resolvers: ResolverMap = {
    Query: {
        user: (_, { id }) => {
            return User.findById(id)
        },
        users: (_, { pageOptions }: { pageOptions: PageOptions }) => {
            return User.paginate({}, pageOptions)
        }
    },
    Mutation: {
        createUser: (_, input: CreateUserInput) => {
            const newUser = new User({ ...input })
            return newUser.save()
        }
    }
}
