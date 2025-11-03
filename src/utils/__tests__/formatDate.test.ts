import { formatDate, getYear } from '../formatDate'

describe('formatDate utils', () => {
  describe('formatDate', () => {
    it('should format date string to "MMM DD, YYYY" format', () => {
      const dateString = '2024-03-15T12:00:00.000Z'
      const result = formatDate(dateString)

      expect(result).toContain('2024')
      expect(result).toContain('Mar')
    })

    it('should handle different month correctly', () => {
      const dateString = '2023-12-25T12:00:00.000Z'
      const result = formatDate(dateString)

      expect(result).toContain('2023')
      expect(result).toContain('Dec')
    })

    it('should handle January dates', () => {
      const dateString = '2024-01-01T12:00:00.000Z'
      const result = formatDate(dateString)

      expect(result).toContain('2024')
      expect(result).toContain('Jan')
    })

    it('should return a formatted string', () => {
      const dateString = '2024-02-15T12:00:00.000Z'
      const result = formatDate(dateString)

      expect(typeof result).toBe('string')
      expect(result.length).toBeGreaterThan(0)
    })
  })

  describe('getYear', () => {
    it('should extract year from date string', () => {
      const dateString = '2024-03-15'
      const result = getYear(dateString)

      expect(result).toBe(2024)
    })

    it('should handle different years', () => {
      const dateString = '1999-12-31'
      const result = getYear(dateString)

      expect(result).toBe(1999)
    })

    it('should handle early 2000s', () => {
      const dateString = '2001-05-20'
      const result = getYear(dateString)

      expect(result).toBe(2001)
    })

    it('should return number type', () => {
      const dateString = '2024-01-01'
      const result = getYear(dateString)

      expect(typeof result).toBe('number')
    })
  })
})
