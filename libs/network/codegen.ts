import type { CodegenConfig } from '@graphql-codegen/cli'

const documentsPattern = '**/*.graphql'
const plugins = [
  'typescript',
  'typescript-operations',
  'named-operations-object',
  'typed-document-node',
]
const configDetails = {
  avoidOptionals: false,
  exposeQueryKeys: true,
  pureMagicComment: true,
}
const config: CodegenConfig = {
  overwrite: true,
  schema: '../../apps/api/src/schema.gql',
  watch: true,
  generates: {
    './src/generated/index.tsx': {
      documents: `./src/${documentsPattern}`,
      plugins,
      config: configDetails,
    },
  },
}

export default config
