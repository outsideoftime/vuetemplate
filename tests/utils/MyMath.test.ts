import { describe, expect, it } from 'vitest';
import { MyMath } from '../../src/utils/MyMath';

describe('测试MyMath', () => {
    it('Add Test', () => {
        const result: number = MyMath.Instance.add(1, 2);
        expect(result).toBe(3);
    });
});
