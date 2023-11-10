import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import { print } from 'graphql'

interface FetchResult<T> {
  data?: T
  error?: string
}

interface GraphqlRequestOptions<TData, V> {
  document: TypedDocumentNode<TData, V>
  variables?: V
  config?: RequestInit
  apiSecret?: string
}

/**ss
 * Sends a GraphQL request and returns the response data.
 *
 * @param {TypedDocumentNode<TData, V>} document - The GraphQL query/mutation document.
 * @param {V} [variables] - The variables for the GraphQL query/mutation.
 * @param {RequestInit} [config] - Optional configuration for the fetch request.
 *
 * @returns {Promise<FetchResult<TData>>} The result of the GraphQL request.
 */
export async function fetchGraphQL<TData, V>({
  document,
  variables,
  apiSecret,
  config,
}: GraphqlRequestOptions<TData, V>): Promise<FetchResult<TData>> {
  const token = await fetch('/api/auth/token').then((res) => res.json())

  const query = print(document)

  return await fetch(process.env.NEXT_PUBLIC_API_URL + '/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : null),
      ...(apiSecret ? { 'X-API-Secret': apiSecret } : null),
    },
    body: JSON.stringify({ query, variables }),
    ...config,
  }).then(async (res) => {
    const { data, errors } = await res.json()
    if (errors) {
      console.log('Error', JSON.stringify(errors))
      return { error: JSON.stringify(errors[0].message) }
    }
    return { data }
  })
}
