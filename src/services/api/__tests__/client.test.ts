jest.mock('axios', () => ({
  create: jest.fn(() => ({
    interceptors: {
      request: { use: jest.fn() },
      response: { use: jest.fn() },
    },
    get: jest.fn(),
    post: jest.fn(),
  })),
}))

import { api } from '../client'

describe('API Client', () => {
  it('should have api instance defined', () => {
    expect(api).toBeDefined()
  })

  it('should have interceptors configured', () => {
    expect(api.interceptors).toBeDefined()
    expect(api.interceptors.request).toBeDefined()
    expect(api.interceptors.response).toBeDefined()
  })
})
