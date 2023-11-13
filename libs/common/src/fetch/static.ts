import { cookies } from 'next/headers'
import { FetchResult, GraphqlRequestOptions, fetchGraphQL } from '.'

export async function fetchGraphQLStatic<TData, V>({
  document,
  variables,
  apiSecret,
  config,
}: Omit<GraphqlRequestOptions<TData, V>, 'token'>): Promise<
  FetchResult<TData>
> {
  return fetchGraphQL({ document, apiSecret, config, variables })
}
