import { queryClient } from '../queryClient'

describe('Query Client', () => {
  it('should create query client with default options', () => {
    expect(queryClient).toBeDefined()

    const defaultOptions = queryClient.getDefaultOptions()

    expect(defaultOptions.queries?.retry).toBe(2)
    expect(defaultOptions.queries?.staleTime).toBe(10 * 60_000)
    expect(defaultOptions.queries?.gcTime).toBe(30 * 60_000)
    expect(defaultOptions.queries?.refetchOnWindowFocus).toBe(false)
  })
})
