import { describe, it, expect, vi } from 'vitest'

import { sum } from './sum';

const logger = vi.fn().mockImplementation(() => 10);

describe('tests sum function', () => {
    it('it should return argument for any other zero arguments', () => {
        const mockResult = 123;

        const res = sum(0, mockResult, logger);
        
        expect(res).equal(mockResult + 10)
        expect(logger).toHaveBeenCalled();
        expect(logger).toHaveBeenCalledWith('help me');
    }),
    it('should returns sum of arguments', () => {
        const res = sum(1, 2, logger);

        expect(res).equal(3 + 10);
    })
})