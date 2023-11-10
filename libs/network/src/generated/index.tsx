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

export type Admin = {
  __typename?: 'Admin'
  createdAt: Scalars['DateTime']['output']
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
  user: User
}

export type AdminOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
}

export type AdminRelationFilter = {
  is?: InputMaybe<AdminWhereInput>
  isNot?: InputMaybe<AdminWhereInput>
}

export enum AdminScalarFieldEnum {
  CreatedAt = 'createdAt',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type AdminWhereInput = {
  AND?: InputMaybe<Array<AdminWhereInput>>
  NOT?: InputMaybe<Array<AdminWhereInput>>
  OR?: InputMaybe<Array<AdminWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  user?: InputMaybe<UserRelationFilter>
}

export type AdminWhereUniqueInput = {
  uid: Scalars['String']['input']
}

export type Article = {
  __typename?: 'Article'
  body: Scalars['String']['output']
  createdAt: Scalars['DateTime']['output']
  feedbacks: Array<Feedback>
  id: Scalars['Int']['output']
  published: Scalars['Boolean']['output']
  reads: Array<Read>
  reporter?: Maybe<Reporter>
  reporterUid: Scalars['String']['output']
  tags: Array<Scalars['String']['output']>
  title: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type ArticleListRelationFilter = {
  every?: InputMaybe<ArticleWhereInput>
  none?: InputMaybe<ArticleWhereInput>
  some?: InputMaybe<ArticleWhereInput>
}

export type ArticleOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ArticleOrderByWithRelationInput = {
  body?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  feedbacks?: InputMaybe<FeedbackOrderByRelationAggregateInput>
  id?: InputMaybe<SortOrder>
  published?: InputMaybe<SortOrder>
  reads?: InputMaybe<ReadOrderByRelationAggregateInput>
  reporter?: InputMaybe<ReporterOrderByWithRelationInput>
  reporterUid?: InputMaybe<SortOrder>
  tags?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type ArticleRelationFilter = {
  is?: InputMaybe<ArticleWhereInput>
  isNot?: InputMaybe<ArticleWhereInput>
}

export enum ArticleScalarFieldEnum {
  Body = 'body',
  CreatedAt = 'createdAt',
  Id = 'id',
  Published = 'published',
  ReporterUid = 'reporterUid',
  Tags = 'tags',
  Title = 'title',
  UpdatedAt = 'updatedAt',
}

export type ArticleWhereInput = {
  AND?: InputMaybe<Array<ArticleWhereInput>>
  NOT?: InputMaybe<Array<ArticleWhereInput>>
  OR?: InputMaybe<Array<ArticleWhereInput>>
  body?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  feedbacks?: InputMaybe<FeedbackListRelationFilter>
  id?: InputMaybe<IntFilter>
  published?: InputMaybe<BoolFilter>
  reads?: InputMaybe<ReadListRelationFilter>
  reporter?: InputMaybe<ReporterRelationFilter>
  reporterUid?: InputMaybe<StringFilter>
  tags?: InputMaybe<StringListFilter>
  title?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ArticleWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>
}

export type ArticleWithScore = {
  __typename?: 'ArticleWithScore'
  article: Article
  score: Scalars['Float']['output']
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

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>
  not?: InputMaybe<Scalars['Boolean']['input']>
}

export type CreateAdminInput = {
  uid: Scalars['String']['input']
}

export type CreateArticleInput = {
  body: Scalars['String']['input']
  published: Scalars['Boolean']['input']
  reporterUid: Scalars['String']['input']
  tags: Array<Scalars['String']['input']>
  title: Scalars['String']['input']
}

export type CreateFeedbackInput = {
  articleId: Scalars['Int']['input']
  type: FeedbackType
  uid: Scalars['String']['input']
}

export type CreateReadInput = {
  articleId: Scalars['Int']['input']
  uid: Scalars['String']['input']
}

export type CreateReporterInput = {
  uid: Scalars['String']['input']
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

export type EnumFeedbackTypeFilter = {
  equals?: InputMaybe<FeedbackType>
  in?: InputMaybe<Array<FeedbackType>>
  not?: InputMaybe<FeedbackType>
  notIn?: InputMaybe<Array<FeedbackType>>
}

export type Feedback = {
  __typename?: 'Feedback'
  article: Article
  articleId: Scalars['Int']['output']
  createdAt: Scalars['DateTime']['output']
  id: Scalars['Int']['output']
  type: FeedbackType
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
  user: User
}

export type FeedbackListRelationFilter = {
  every?: InputMaybe<FeedbackWhereInput>
  none?: InputMaybe<FeedbackWhereInput>
  some?: InputMaybe<FeedbackWhereInput>
}

export type FeedbackOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type FeedbackOrderByWithRelationInput = {
  article?: InputMaybe<ArticleOrderByWithRelationInput>
  articleId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  type?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
}

export enum FeedbackScalarFieldEnum {
  ArticleId = 'articleId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Type = 'type',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export enum FeedbackType {
  Dislike = 'DISLIKE',
  Hate = 'HATE',
  Like = 'LIKE',
  Love = 'LOVE',
}

export type FeedbackUidArticleIdCompoundUniqueInput = {
  articleId: Scalars['Int']['input']
  uid: Scalars['String']['input']
}

export type FeedbackWhereInput = {
  AND?: InputMaybe<Array<FeedbackWhereInput>>
  NOT?: InputMaybe<Array<FeedbackWhereInput>>
  OR?: InputMaybe<Array<FeedbackWhereInput>>
  article?: InputMaybe<ArticleRelationFilter>
  articleId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  type?: InputMaybe<EnumFeedbackTypeFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  user?: InputMaybe<UserRelationFilter>
}

export type FeedbackWhereUniqueInput = {
  uid_articleId: FeedbackUidArticleIdCompoundUniqueInput
}

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
}

export type Mutation = {
  __typename?: 'Mutation'
  createAdmin: Admin
  createArticle: Article
  createFeedback: Feedback
  createRead: Read
  createReporter: Reporter
  createUserWithCredentials: User
  createUserWithProvider: User
  giveMyFeedback: Feedback
  removeAdmin: Admin
  removeArticle: Article
  removeFeedback: Feedback
  removeRead: Read
  removeReporter: Reporter
  removeUser: User
  updateAdmin: Admin
  updateArticle: Article
  updateFeedback: Feedback
  updateRead: Read
  updateReporter: Reporter
  updateUser: User
}

export type MutationCreateAdminArgs = {
  createAdminInput: CreateAdminInput
}

export type MutationCreateArticleArgs = {
  createArticleInput: CreateArticleInput
}

export type MutationCreateFeedbackArgs = {
  createFeedbackInput: CreateFeedbackInput
}

export type MutationCreateReadArgs = {
  createReadInput: CreateReadInput
}

export type MutationCreateReporterArgs = {
  createReporterInput: CreateReporterInput
}

export type MutationCreateUserWithCredentialsArgs = {
  createUserWithCredentialsInput: CreateUserWithCredentialsInput
}

export type MutationCreateUserWithProviderArgs = {
  createUserWithProviderInput: CreateUserWithProviderInput
}

export type MutationGiveMyFeedbackArgs = {
  articleId: Scalars['Int']['input']
  feedbackId?: InputMaybe<Scalars['Int']['input']>
  type: Scalars['String']['input']
}

export type MutationRemoveAdminArgs = {
  where?: InputMaybe<AdminWhereUniqueInput>
}

export type MutationRemoveArticleArgs = {
  where?: InputMaybe<ArticleWhereUniqueInput>
}

export type MutationRemoveFeedbackArgs = {
  where?: InputMaybe<FeedbackWhereUniqueInput>
}

export type MutationRemoveReadArgs = {
  where?: InputMaybe<ReadWhereUniqueInput>
}

export type MutationRemoveReporterArgs = {
  where?: InputMaybe<ReporterWhereUniqueInput>
}

export type MutationRemoveUserArgs = {
  where?: InputMaybe<UserWhereUniqueInput>
}

export type MutationUpdateAdminArgs = {
  updateAdminInput: UpdateAdminInput
}

export type MutationUpdateArticleArgs = {
  updateArticleInput: UpdateArticleInput
}

export type MutationUpdateFeedbackArgs = {
  updateFeedbackInput: UpdateFeedbackInput
}

export type MutationUpdateReadArgs = {
  updateReadInput: UpdateReadInput
}

export type MutationUpdateReporterArgs = {
  updateReporterInput: UpdateReporterInput
}

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput
}

export type Query = {
  __typename?: 'Query'
  admin: Admin
  adminMe: Admin
  admins: Array<Admin>
  article: Article
  articles: Array<Article>
  articlesForAdmin: Array<Article>
  feedback?: Maybe<Feedback>
  feedbacks: Array<Feedback>
  getAuthProvider?: Maybe<AuthProvider>
  getCredentials?: Maybe<User>
  myArticles: Array<Article>
  myFeedback?: Maybe<Feedback>
  questionAI: Scalars['String']['output']
  read: Read
  reads: Array<Read>
  relatedArticles: Array<ArticleWithScore>
  reporter: Reporter
  reporterMe?: Maybe<Reporter>
  reporters: Array<Reporter>
  user: User
  users: Array<User>
}

export type QueryAdminArgs = {
  where?: InputMaybe<AdminWhereUniqueInput>
}

export type QueryAdminsArgs = {
  cursor?: InputMaybe<AdminWhereUniqueInput>
  distinct?: InputMaybe<Array<AdminScalarFieldEnum>>
  orderBy?: InputMaybe<Array<AdminOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AdminWhereInput>
}

export type QueryArticleArgs = {
  where?: InputMaybe<ArticleWhereUniqueInput>
}

export type QueryArticlesArgs = {
  cursor?: InputMaybe<ArticleWhereUniqueInput>
  distinct?: InputMaybe<Array<ArticleScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ArticleOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ArticleWhereInput>
}

export type QueryArticlesForAdminArgs = {
  cursor?: InputMaybe<ArticleWhereUniqueInput>
  distinct?: InputMaybe<Array<ArticleScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ArticleOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ArticleWhereInput>
}

export type QueryFeedbackArgs = {
  where?: InputMaybe<FeedbackWhereUniqueInput>
}

export type QueryFeedbacksArgs = {
  cursor?: InputMaybe<FeedbackWhereUniqueInput>
  distinct?: InputMaybe<Array<FeedbackScalarFieldEnum>>
  orderBy?: InputMaybe<Array<FeedbackOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<FeedbackWhereInput>
}

export type QueryGetAuthProviderArgs = {
  uid: Scalars['String']['input']
}

export type QueryGetCredentialsArgs = {
  email: Scalars['String']['input']
}

export type QueryMyArticlesArgs = {
  cursor?: InputMaybe<ArticleWhereUniqueInput>
  distinct?: InputMaybe<Array<ArticleScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ArticleOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ArticleWhereInput>
}

export type QueryMyFeedbackArgs = {
  articleId: Scalars['Int']['input']
}

export type QueryQuestionAiArgs = {
  query: Scalars['String']['input']
}

export type QueryReadArgs = {
  where?: InputMaybe<ReadWhereUniqueInput>
}

export type QueryReadsArgs = {
  cursor?: InputMaybe<ReadWhereUniqueInput>
  distinct?: InputMaybe<Array<ReadScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ReadOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ReadWhereInput>
}

export type QueryReporterArgs = {
  where?: InputMaybe<ReporterWhereUniqueInput>
}

export type QueryReportersArgs = {
  cursor?: InputMaybe<ReporterWhereUniqueInput>
  distinct?: InputMaybe<Array<ReporterScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ReporterOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ReporterWhereInput>
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

export type Read = {
  __typename?: 'Read'
  article: Article
  articleId: Scalars['Int']['output']
  count: Scalars['Int']['output']
  createdAt: Scalars['DateTime']['output']
  id: Scalars['Int']['output']
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
  user: User
}

export type ReadListRelationFilter = {
  every?: InputMaybe<ReadWhereInput>
  none?: InputMaybe<ReadWhereInput>
  some?: InputMaybe<ReadWhereInput>
}

export type ReadOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ReadOrderByWithRelationInput = {
  article?: InputMaybe<ArticleOrderByWithRelationInput>
  articleId?: InputMaybe<SortOrder>
  count?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
}

export enum ReadScalarFieldEnum {
  ArticleId = 'articleId',
  Count = 'count',
  CreatedAt = 'createdAt',
  Id = 'id',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type ReadWhereInput = {
  AND?: InputMaybe<Array<ReadWhereInput>>
  NOT?: InputMaybe<Array<ReadWhereInput>>
  OR?: InputMaybe<Array<ReadWhereInput>>
  article?: InputMaybe<ArticleRelationFilter>
  articleId?: InputMaybe<IntFilter>
  count?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  user?: InputMaybe<UserRelationFilter>
}

export type ReadWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>
}

export type Reporter = {
  __typename?: 'Reporter'
  articles: Array<Article>
  createdAt: Scalars['DateTime']['output']
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
  user: User
}

export type ReporterOrderByWithRelationInput = {
  articles?: InputMaybe<ArticleOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
}

export type ReporterRelationFilter = {
  is?: InputMaybe<ReporterWhereInput>
  isNot?: InputMaybe<ReporterWhereInput>
}

export enum ReporterScalarFieldEnum {
  CreatedAt = 'createdAt',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type ReporterWhereInput = {
  AND?: InputMaybe<Array<ReporterWhereInput>>
  NOT?: InputMaybe<Array<ReporterWhereInput>>
  OR?: InputMaybe<Array<ReporterWhereInput>>
  articles?: InputMaybe<ArticleListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  user?: InputMaybe<UserRelationFilter>
}

export type ReporterWhereUniqueInput = {
  uid: Scalars['String']['input']
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

export type StringListFilter = {
  equals?: InputMaybe<Array<Scalars['String']['input']>>
  has?: InputMaybe<Scalars['String']['input']>
  hasEvery?: InputMaybe<Array<Scalars['String']['input']>>
  hasSome?: InputMaybe<Array<Scalars['String']['input']>>
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>
}

export type UpdateAdminInput = {
  uid: Scalars['String']['input']
}

export type UpdateArticleInput = {
  body?: InputMaybe<Scalars['String']['input']>
  id: Scalars['Int']['input']
  published?: InputMaybe<Scalars['Boolean']['input']>
  reporterUid?: InputMaybe<Scalars['String']['input']>
  tags?: InputMaybe<Array<Scalars['String']['input']>>
  title?: InputMaybe<Scalars['String']['input']>
}

export type UpdateFeedbackInput = {
  articleId?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['Int']['input']
  type?: InputMaybe<FeedbackType>
  uid?: InputMaybe<Scalars['String']['input']>
}

export type UpdateReadInput = {
  articleId?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['Int']['input']
  uid?: InputMaybe<Scalars['String']['input']>
}

export type UpdateReporterInput = {
  uid: Scalars['String']['input']
}

export type UpdateUserInput = {
  image?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  uid: Scalars['String']['input']
}

export type User = {
  __typename?: 'User'
  createdAt: Scalars['DateTime']['output']
  credential: Credential
  feedbacks: Array<Feedback>
  image?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  reads: Array<Read>
  reporter?: Maybe<Reporter>
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type UserOrderByWithRelationInput = {
  admin?: InputMaybe<AdminOrderByWithRelationInput>
  createdAt?: InputMaybe<SortOrder>
  feedbacks?: InputMaybe<FeedbackOrderByRelationAggregateInput>
  image?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  reads?: InputMaybe<ReadOrderByRelationAggregateInput>
  reporter?: InputMaybe<ReporterOrderByWithRelationInput>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>
  isNot?: InputMaybe<UserWhereInput>
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
  admin?: InputMaybe<AdminRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  feedbacks?: InputMaybe<FeedbackListRelationFilter>
  image?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  reads?: InputMaybe<ReadListRelationFilter>
  reporter?: InputMaybe<ReporterRelationFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type UserWhereUniqueInput = {
  uid: Scalars['String']['input']
}

export type ArticlesQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<
    Array<ArticleOrderByWithRelationInput> | ArticleOrderByWithRelationInput
  >
  where?: InputMaybe<ArticleWhereInput>
}>

export type ArticlesQuery = {
  __typename?: 'Query'
  articles: Array<{
    __typename?: 'Article'
    id: number
    title: string
    body: string
    createdAt: any
    tags: Array<string>
  }>
}

export type ArticlesDetailsFragment = {
  __typename?: 'Article'
  id: number
  title: string
  createdAt: any
  tags: Array<string>
  published: boolean
}

export type ArticlesForAdminQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<
    Array<ArticleOrderByWithRelationInput> | ArticleOrderByWithRelationInput
  >
  where?: InputMaybe<ArticleWhereInput>
}>

export type ArticlesForAdminQuery = {
  __typename?: 'Query'
  articlesForAdmin: Array<{
    __typename?: 'Article'
    id: number
    title: string
    createdAt: any
    tags: Array<string>
    published: boolean
  }>
}

export type MyArticlesQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<
    Array<ArticleOrderByWithRelationInput> | ArticleOrderByWithRelationInput
  >
  where?: InputMaybe<ArticleWhereInput>
}>

export type MyArticlesQuery = {
  __typename?: 'Query'
  myArticles: Array<{
    __typename?: 'Article'
    id: number
    title: string
    createdAt: any
    tags: Array<string>
    published: boolean
  }>
}

export type UserQueryVariables = Exact<{
  where?: InputMaybe<UserWhereUniqueInput>
}>

export type UserQuery = {
  __typename?: 'Query'
  user: {
    __typename?: 'User'
    name: string
    image?: string | null
    updatedAt: any
    createdAt: any
    uid: string
  }
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

export type ArticleQueryVariables = Exact<{
  where?: InputMaybe<ArticleWhereUniqueInput>
}>

export type ArticleQuery = {
  __typename?: 'Query'
  article: {
    __typename?: 'Article'
    id: number
    body: string
    createdAt: any
    title: string
    tags: Array<string>
    reporter?: {
      __typename?: 'Reporter'
      user: {
        __typename?: 'User'
        image?: string | null
        name: string
        uid: string
      }
    } | null
  }
}

export type FeedbackQueryVariables = Exact<{
  where?: InputMaybe<FeedbackWhereUniqueInput>
}>

export type FeedbackQuery = {
  __typename?: 'Query'
  feedback?: {
    __typename?: 'Feedback'
    id: number
    uid: string
    articleId: number
    type: FeedbackType
  } | null
}

export type MyFeedbackQueryVariables = Exact<{
  articleId: Scalars['Int']['input']
}>

export type MyFeedbackQuery = {
  __typename?: 'Query'
  myFeedback?: {
    __typename?: 'Feedback'
    id: number
    uid: string
    articleId: number
    type: FeedbackType
  } | null
}

export type GiveMyFeedbackMutationVariables = Exact<{
  articleId: Scalars['Int']['input']
  type: Scalars['String']['input']
  feedbackId?: InputMaybe<Scalars['Int']['input']>
}>

export type GiveMyFeedbackMutation = {
  __typename?: 'Mutation'
  giveMyFeedback: { __typename?: 'Feedback'; id: number }
}

export type UserDetailsFragment = {
  __typename?: 'User'
  image?: string | null
  name: string
  uid: string
}

export type ReporterMeQueryVariables = Exact<{ [key: string]: never }>

export type ReporterMeQuery = {
  __typename?: 'Query'
  reporterMe?: {
    __typename?: 'Reporter'
    user: {
      __typename?: 'User'
      image?: string | null
      name: string
      uid: string
    }
  } | null
}

export type AdminMeQueryVariables = Exact<{ [key: string]: never }>

export type AdminMeQuery = {
  __typename?: 'Query'
  adminMe: {
    __typename?: 'Admin'
    user: {
      __typename?: 'User'
      image?: string | null
      name: string
      uid: string
    }
  }
}

export type AdminsQueryVariables = Exact<{ [key: string]: never }>

export type AdminsQuery = {
  __typename?: 'Query'
  admins: Array<{
    __typename?: 'Admin'
    createdAt: any
    user: {
      __typename?: 'User'
      image?: string | null
      name: string
      uid: string
    }
  }>
}

export type ReportersQueryVariables = Exact<{ [key: string]: never }>

export type ReportersQuery = {
  __typename?: 'Query'
  reporters: Array<{
    __typename?: 'Reporter'
    createdAt: any
    user: {
      __typename?: 'User'
      image?: string | null
      name: string
      uid: string
    }
  }>
}

export type UpdateArticleMutationVariables = Exact<{
  updateArticleInput: UpdateArticleInput
}>

export type UpdateArticleMutation = {
  __typename?: 'Mutation'
  updateArticle: { __typename?: 'Article'; id: number }
}

export type CreateReporterMutationVariables = Exact<{
  createReporterInput: CreateReporterInput
}>

export type CreateReporterMutation = {
  __typename?: 'Mutation'
  createReporter: { __typename?: 'Reporter'; uid: string }
}

export type CreateAdminMutationVariables = Exact<{
  createAdminInput: CreateAdminInput
}>

export type CreateAdminMutation = {
  __typename?: 'Mutation'
  createAdmin: { __typename?: 'Admin'; uid: string }
}

export type CreateArticleMutationVariables = Exact<{
  createArticleInput: CreateArticleInput
}>

export type CreateArticleMutation = {
  __typename?: 'Mutation'
  createArticle: { __typename?: 'Article'; id: number }
}

export type RelatedArticlesQueryVariables = Exact<{ [key: string]: never }>

export type RelatedArticlesQuery = {
  __typename?: 'Query'
  relatedArticles: Array<{
    __typename?: 'ArticleWithScore'
    score: number
    article: {
      __typename?: 'Article'
      id: number
      title: string
      body: string
      createdAt: any
      tags: Array<string>
    }
  }>
}

export type QuestionAiQueryVariables = Exact<{
  query: Scalars['String']['input']
}>

export type QuestionAiQuery = { __typename?: 'Query'; questionAI: string }

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
    credential: {
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
    articles: 'articles',
    articlesForAdmin: 'articlesForAdmin',
    myArticles: 'myArticles',
    User: 'User',
    Article: 'Article',
    feedback: 'feedback',
    MyFeedback: 'MyFeedback',
    reporterMe: 'reporterMe',
    adminMe: 'adminMe',
    admins: 'admins',
    reporters: 'reporters',
    relatedArticles: 'relatedArticles',
    questionAI: 'questionAI',
    getCredentials: 'getCredentials',
    GetAuthProvider: 'GetAuthProvider',
  },
  Mutation: {
    createUserWithCredentials: 'createUserWithCredentials',
    CreateUserWithProvider: 'CreateUserWithProvider',
    giveMyFeedback: 'giveMyFeedback',
    updateArticle: 'updateArticle',
    createReporter: 'createReporter',
    createAdmin: 'createAdmin',
    createArticle: 'createArticle',
  },
  Fragment: {
    articlesDetails: 'articlesDetails',
    userDetails: 'userDetails',
  },
}
export const ArticlesDetailsFragmentDoc = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'articlesDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Article' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tags' } },
          { kind: 'Field', name: { kind: 'Name', value: 'published' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ArticlesDetailsFragment, unknown>
export const UserDetailsFragmentDoc = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'userDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserDetailsFragment, unknown>
export const ArticlesDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'articles' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ArticleOrderByWithRelationInput',
                },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ArticleWhereInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'articles' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'body' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'tags' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ArticlesQuery, ArticlesQueryVariables>
export const ArticlesForAdminDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'articlesForAdmin' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ArticleOrderByWithRelationInput',
                },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ArticleWhereInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'articlesForAdmin' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'articlesDetails' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'articlesDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Article' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tags' } },
          { kind: 'Field', name: { kind: 'Name', value: 'published' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ArticlesForAdminQuery,
  ArticlesForAdminQueryVariables
>
export const MyArticlesDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'myArticles' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ArticleOrderByWithRelationInput',
                },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ArticleWhereInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'myArticles' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'articlesDetails' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'articlesDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Article' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tags' } },
          { kind: 'Field', name: { kind: 'Name', value: 'published' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MyArticlesQuery, MyArticlesQueryVariables>
export const UserDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'User' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'UserWhereUniqueInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserQuery, UserQueryVariables>
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
export const ArticleDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Article' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ArticleWhereUniqueInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'article' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'reporter' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'image' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'uid' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'body' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'tags' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ArticleQuery, ArticleQueryVariables>
export const FeedbackDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'feedback' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'FeedbackWhereUniqueInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'feedback' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                { kind: 'Field', name: { kind: 'Name', value: 'articleId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FeedbackQuery, FeedbackQueryVariables>
export const MyFeedbackDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'MyFeedback' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'articleId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'myFeedback' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'articleId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'articleId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                { kind: 'Field', name: { kind: 'Name', value: 'articleId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MyFeedbackQuery, MyFeedbackQueryVariables>
export const GiveMyFeedbackDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'giveMyFeedback' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'articleId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'type' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'feedbackId' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'giveMyFeedback' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'articleId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'articleId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'type' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'type' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'feedbackId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'feedbackId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GiveMyFeedbackMutation,
  GiveMyFeedbackMutationVariables
>
export const ReporterMeDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'reporterMe' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'reporterMe' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'userDetails' },
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
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'userDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ReporterMeQuery, ReporterMeQueryVariables>
export const AdminMeDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'adminMe' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'adminMe' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'userDetails' },
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
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'userDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AdminMeQuery, AdminMeQueryVariables>
export const AdminsDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'admins' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'admins' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'userDetails' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'userDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AdminsQuery, AdminsQueryVariables>
export const ReportersDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'reporters' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'reporters' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'userDetails' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'userDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ReportersQuery, ReportersQueryVariables>
export const UpdateArticleDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'updateArticle' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'updateArticleInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateArticleInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateArticle' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'updateArticleInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'updateArticleInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateArticleMutation,
  UpdateArticleMutationVariables
>
export const CreateReporterDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createReporter' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createReporterInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateReporterInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createReporter' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createReporterInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createReporterInput' },
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
  CreateReporterMutation,
  CreateReporterMutationVariables
>
export const CreateAdminDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createAdmin' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createAdminInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateAdminInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createAdmin' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createAdminInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createAdminInput' },
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
} as unknown as DocumentNode<CreateAdminMutation, CreateAdminMutationVariables>
export const CreateArticleDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createArticle' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createArticleInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateArticleInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createArticle' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createArticleInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createArticleInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateArticleMutation,
  CreateArticleMutationVariables
>
export const RelatedArticlesDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'relatedArticles' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'relatedArticles' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'article' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'body' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'tags' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'score' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RelatedArticlesQuery,
  RelatedArticlesQueryVariables
>
export const QuestionAiDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'questionAI' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'query' },
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
            name: { kind: 'Name', value: 'questionAI' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'query' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'query' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QuestionAiQuery, QuestionAiQueryVariables>
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
                  name: { kind: 'Name', value: 'credential' },
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
