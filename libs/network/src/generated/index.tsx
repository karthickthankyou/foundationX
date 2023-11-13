import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any }
}

export type AuthProvider = {
  __typename?: 'AuthProvider'
  type: AuthProviderType
  uid: Scalars['String']['output']
}

export enum AuthProviderType {
  Credentials = 'CREDENTIALS',
  Google = 'GOOGLE',
}

export type CreateItemInput = {
  name: Scalars['String']['input']
}

export type CreateUserWithCredentialsInput = {
  email: Scalars['String']['input']
  image?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type CreateUserWithProviderInput = {
  image?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
  type: AuthProviderType
  uid: Scalars['String']['input']
}

export type Credential = {
  __typename?: 'Credential'
  createdAt: Scalars['DateTime']['output']
  email: Scalars['String']['output']
  passwordHash: Scalars['String']['output']
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
}

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
}

export type Item = {
  __typename?: 'Item'
  createdAt: Scalars['DateTime']['output']
  id: Scalars['Int']['output']
  name: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type ItemOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum ItemScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
}

export type ItemWhereInput = {
  AND?: InputMaybe<Array<ItemWhereInput>>
  NOT?: InputMaybe<Array<ItemWhereInput>>
  OR?: InputMaybe<Array<ItemWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  name?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>
}

export type Mutation = {
  __typename?: 'Mutation'
  createItem: Item
  createUserWithCredentials: User
  createUserWithProvider: User
  removeItem: Item
  removeUser: User
  updateItem: Item
  updateUser: User
}

export type MutationCreateItemArgs = {
  createItemInput: CreateItemInput
}

export type MutationCreateUserWithCredentialsArgs = {
  createUserWithCredentialsInput: CreateUserWithCredentialsInput
}

export type MutationCreateUserWithProviderArgs = {
  createUserWithProviderInput: CreateUserWithProviderInput
}

export type MutationRemoveItemArgs = {
  where?: InputMaybe<ItemWhereUniqueInput>
}

export type MutationRemoveUserArgs = {
  where?: InputMaybe<UserWhereUniqueInput>
}

export type MutationUpdateItemArgs = {
  updateItemInput: UpdateItemInput
}

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput
}

export type Query = {
  __typename?: 'Query'
  getAuthProvider?: Maybe<AuthProvider>
  getCredentials?: Maybe<User>
  item: Item
  items: Array<Item>
  user: User
  users: Array<User>
}

export type QueryGetAuthProviderArgs = {
  uid: Scalars['String']['input']
}

export type QueryGetCredentialsArgs = {
  email: Scalars['String']['input']
}

export type QueryItemArgs = {
  where?: InputMaybe<ItemWhereUniqueInput>
}

export type QueryItemsArgs = {
  cursor?: InputMaybe<ItemWhereUniqueInput>
  distinct?: InputMaybe<Array<ItemScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ItemOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ItemWhereInput>
}

export type QueryUserArgs = {
  where?: InputMaybe<UserWhereUniqueInput>
}

export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<UserWhereInput>
}

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>
  endsWith?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  mode?: InputMaybe<QueryMode>
  not?: InputMaybe<Scalars['String']['input']>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
  startsWith?: InputMaybe<Scalars['String']['input']>
}

export type UpdateItemInput = {
  id: Scalars['Int']['input']
  name?: InputMaybe<Scalars['String']['input']>
}

export type UpdateUserInput = {
  image?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  uid: Scalars['String']['input']
}

export type User = {
  __typename?: 'User'
  createdAt: Scalars['DateTime']['output']
  credentials: Credential
  image?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type UserOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  image?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Image = 'image',
  Name = 'name',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>
  NOT?: InputMaybe<Array<UserWhereInput>>
  OR?: InputMaybe<Array<UserWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  image?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type UserWhereUniqueInput = {
  uid: Scalars['String']['input']
}

export type CreateUserWithCredentialsMutationVariables = Exact<{
  createUserWithCredentialsInput: CreateUserWithCredentialsInput
}>

export type CreateUserWithCredentialsMutation = {
  __typename?: 'Mutation'
  createUserWithCredentials: { __typename?: 'User'; uid: string }
}

export type CreateUserWithProviderMutationVariables = Exact<{
  createUserWithProviderInput: CreateUserWithProviderInput
}>

export type CreateUserWithProviderMutation = {
  __typename?: 'Mutation'
  createUserWithProvider: { __typename?: 'User'; uid: string }
}

export type GetCredentialsQueryVariables = Exact<{
  email: Scalars['String']['input']
}>

export type GetCredentialsQuery = {
  __typename?: 'Query'
  getCredentials?: {
    __typename?: 'User'
    uid: string
    name: string
    image?: string | null
    credentials: {
      __typename?: 'Credential'
      email: string
      passwordHash: string
    }
  } | null
}

export type GetAuthProviderQueryVariables = Exact<{
  uid: Scalars['String']['input']
}>

export type GetAuthProviderQuery = {
  __typename?: 'Query'
  getAuthProvider?: {
    __typename?: 'AuthProvider'
    uid: string
    type: AuthProviderType
  } | null
}

export const namedOperations = {
  Query: {
    getCredentials: 'getCredentials',
    GetAuthProvider: 'GetAuthProvider',
  },
  Mutation: {
    createUserWithCredentials: 'createUserWithCredentials',
    CreateUserWithProvider: 'CreateUserWithProvider',
  },
}

export const CreateUserWithCredentialsDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createUserWithCredentials' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createUserWithCredentialsInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateUserWithCredentialsInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createUserWithCredentials' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createUserWithCredentialsInput' },
                value: {
                  kind: 'Variable',
                  name: {
                    kind: 'Name',
                    value: 'createUserWithCredentialsInput',
                  },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateUserWithCredentialsMutation,
  CreateUserWithCredentialsMutationVariables
>
export const CreateUserWithProviderDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateUserWithProvider' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createUserWithProviderInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateUserWithProviderInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createUserWithProvider' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createUserWithProviderInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createUserWithProviderInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateUserWithProviderMutation,
  CreateUserWithProviderMutationVariables
>
export const GetCredentialsDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getCredentials' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'email' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getCredentials' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'email' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'email' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'credentials' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'passwordHash' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCredentialsQuery, GetCredentialsQueryVariables>
export const GetAuthProviderDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetAuthProvider' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'uid' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getAuthProvider' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'uid' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'uid' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAuthProviderQuery,
  GetAuthProviderQueryVariables
>
